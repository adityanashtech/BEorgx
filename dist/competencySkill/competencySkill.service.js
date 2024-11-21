"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeSkillService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tenant_entity_1 = require("../tenant/tenant.entity");
const competencySkillQueries_service_1 = require("./competencySkillQueries.service");
const skillsQueries_service_1 = require("../Skills/skillsQueries.service");
const employeeQueries_service_1 = require("../user/employeeQueries.service");
const competency_service_1 = require("./../competency/competency.service");
let employeeSkillService = class employeeSkillService {
    constructor(tenantRepository, employeeSkillQueriesService, skillsQueriesService, UserQueries, CompetencyService) {
        this.tenantRepository = tenantRepository;
        this.employeeSkillQueriesService = employeeSkillQueriesService;
        this.skillsQueriesService = skillsQueriesService;
        this.UserQueries = UserQueries;
        this.CompetencyService = CompetencyService;
    }
    async checkEmployeeSkillByName(tenantCode, userData) {
        const tenant = await this.tenantRepository.findOne({
            where: { tenant_code: tenantCode },
        });
        if (!tenant) {
            throw new common_1.NotFoundException('Tenant not found');
        }
        let nameTenant = tenant.tenant_name;
        const existingemployeeSkill = await this.employeeSkillQueriesService.checkEmployeeSkillByName(nameTenant, userData.skill_name, userData.employee_id, userData.level);
        if (existingemployeeSkill && existingemployeeSkill.length > 0) {
            throw new common_1.BadRequestException('Skill with this name already exists. Please use another name.');
        }
        else {
            return { message: 'Skill with this name can be created' };
        }
    }
    async getSkillsBySkillName(skill_name, tenantCode) {
        const tenant = await this.tenantRepository.findOne({
            where: { tenant_code: tenantCode },
        });
        if (!tenant) {
            throw new common_1.NotFoundException('Tenant not found');
        }
        let nameTenant = tenant.tenant_name;
        const employeeSkill = await this.employeeSkillQueriesService.getSkillsBySkillName(nameTenant, skill_name);
        if (employeeSkill.length === 0) {
            return {
                message: 'No skill is added.',
                data: [],
            };
        }
        let obj = {};
        obj['skill_name'] = skill_name;
        var finalData = [];
        for (let i = 0; i < employeeSkill.length; i++) {
            let empData = await this.UserQueries.getUserById(nameTenant, employeeSkill[i].employee_id);
            if (empData.data != null) {
                employeeSkill[i].employee_name = empData.data.first_name;
                employeeSkill[i].employee_designation = empData.data.designation;
                delete employeeSkill[i].skill_name;
                finalData.push(employeeSkill[i]);
            }
        }
        obj['employee data'] = finalData;
        if (finalData.length > 0) {
            return {
                message: 'employeeSkill retrieved successfully.',
                data: obj,
            };
        }
        else {
            throw new common_1.BadRequestException('employee with skill does not exist');
        }
    }
    async getSkillsByLevel(skill_name, level, tenantCode) {
        const tenant = await this.tenantRepository.findOne({
            where: { tenant_code: tenantCode },
        });
        if (!tenant) {
            throw new common_1.NotFoundException('Tenant not found');
        }
        let nameTenant = tenant.tenant_name;
        const employeeSkill = await this.employeeSkillQueriesService.getSkillsByLevel(nameTenant, skill_name, level);
        if (employeeSkill && employeeSkill.length === 0) {
            return {
                message: 'No skill is added.',
                data: [],
            };
        }
        let obj = {};
        obj['skill_name'] = skill_name;
        obj['level'] = level;
        var finalData = [];
        for (let i = 0; i < employeeSkill.length; i++) {
            let empData = await this.UserQueries.getUserById(nameTenant, employeeSkill[i].employee_id);
            if (empData.data != null) {
                employeeSkill[i].employee_name = empData.data.first_name;
                employeeSkill[i].employee_designation = empData.data.designation;
                delete employeeSkill[i].skill_name;
                delete employeeSkill[i].level;
                finalData.push(employeeSkill[i]);
            }
        }
        obj['employee data'] = finalData;
        if (finalData.length > 0) {
            return {
                message: 'employeeSkill retrieved successfully.',
                data: obj,
            };
        }
        else {
            throw new common_1.BadRequestException('employee with skill does not exist');
        }
    }
    async getSkillsByCompetency(studio_id, tenantCode) {
        const tenant = await this.tenantRepository.findOne({
            where: { tenant_code: tenantCode },
        });
        if (!tenant) {
            throw new common_1.NotFoundException('Tenant not found');
        }
        let nameTenant = tenant.tenant_name;
        let studioData = await this.CompetencyService.getCompetencyById(studio_id, tenantCode);
        if (studioData.data == null) {
            throw new common_1.NotFoundException('Studio Not found');
        }
        const employeeSkill = await this.employeeSkillQueriesService.getSkillsByCompetency(nameTenant, studio_id);
        if (employeeSkill && employeeSkill.length === 0) {
            return {
                message: 'No skill is added.',
                data: [],
            };
        }
        var finalData = [];
        for (let i = 0; i < employeeSkill.length; i++) {
            let empData = await this.UserQueries.getUserById(nameTenant, employeeSkill[i].employee_id);
            if (empData.data != null) {
                employeeSkill[i].employee_name = empData.data.first_name;
                employeeSkill[i].employee_designation = empData.data.designation;
                finalData.push(employeeSkill[i]);
            }
        }
        return {
            message: 'Skill retrieved successfully.',
            data: finalData,
        };
    }
};
exports.employeeSkillService = employeeSkillService;
exports.employeeSkillService = employeeSkillService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tenant_entity_1.Tenant)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        competencySkillQueries_service_1.employeeSkillQueriesService,
        skillsQueries_service_1.SkillsQueriesService,
        employeeQueries_service_1.EmployeeQueriesService,
        competency_service_1.CompetencyService])
], employeeSkillService);
//# sourceMappingURL=competencySkill.service.js.map