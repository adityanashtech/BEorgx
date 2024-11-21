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
exports.SkillService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tenant_entity_1 = require("../tenant/tenant.entity");
const skillsQueries_service_1 = require("./skillsQueries.service");
let SkillService = class SkillService {
    constructor(tenantRepository, skillsQueriesService) {
        this.tenantRepository = tenantRepository;
        this.skillsQueriesService = skillsQueriesService;
    }
    async createSkill(tenantCode, userData) {
        const tenant = await this.tenantRepository.findOne({
            where: { tenant_code: tenantCode },
        });
        if (!tenant) {
            throw new common_1.NotFoundException('Tenant not found');
        }
        let nameTenant = tenant.tenant_name;
        const existingSkill = await this.skillsQueriesService.checkSkillName(nameTenant, userData.skill_name);
        if (existingSkill.length > 0) {
            throw new common_1.BadRequestException('skill with this name already exists. Please use another name.');
        }
        const code = Math.floor(Math.random() * 9000) + 1000;
        await this.skillsQueriesService.createSkill(nameTenant, userData);
        const competencyData = await this.skillsQueriesService.checkSkillName(nameTenant, userData.skill_name);
        return {
            message: 'skill created successfully and data saved.',
            data: competencyData,
        };
    }
    async skillName(tenantCode, userData) {
        const tenant = await this.tenantRepository.findOne({
            where: { tenant_code: tenantCode },
        });
        if (!tenant) {
            throw new common_1.NotFoundException('Tenant not found');
        }
        let nameTenant = tenant.tenant_name;
        const existingSkill = await this.skillsQueriesService.checkSkillName(nameTenant, userData.skill_name);
        if (existingSkill.length > 0) {
            throw new common_1.BadRequestException('Skill with this name already exists. Please use another name.');
        }
        else {
            return { message: 'Skill with this name can be created' };
        }
    }
    async getAllSkills(tenantCode) {
        const tenant = await this.tenantRepository.findOne({
            where: { tenant_code: tenantCode },
        });
        if (!tenant) {
            throw new common_1.NotFoundException('Tenant not found');
        }
        let nameTenant = tenant.tenant_name;
        const competencies = await this.skillsQueriesService.getAllSkills(nameTenant);
        return {
            message: 'Retrieved all skills successfully.',
            data: competencies,
        };
    }
    async getSkillById(id, tenantCode) {
        const tenant = await this.tenantRepository.findOne({
            where: { tenant_code: tenantCode },
        });
        if (!tenant) {
            throw new common_1.NotFoundException('Tenant not found');
        }
        let nameTenant = tenant.tenant_name;
        const skill = await this.skillsQueriesService.getSkillById(nameTenant, id);
        if (skill.length === 0) {
            throw new common_1.NotFoundException('skill not found');
        }
        return {
            message: 'skill retrieved successfully.',
            data: skill[0],
        };
    }
};
exports.SkillService = SkillService;
exports.SkillService = SkillService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tenant_entity_1.Tenant)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        skillsQueries_service_1.SkillsQueriesService])
], SkillService);
//# sourceMappingURL=skills.service.js.map