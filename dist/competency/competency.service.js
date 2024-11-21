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
exports.CompetencyService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tenant_entity_1 = require("../tenant/tenant.entity");
const competencyQueries_service_1 = require("./competencyQueries.service");
const user_service_1 = require("../user/user.service");
const employeeQueries_service_1 = require("../user/employeeQueries.service");
const access_service_1 = require("../accesslabels/access.service");
let CompetencyService = class CompetencyService {
    constructor(tenantRepository, competencyQueriesService, UserService, EmployeeQueriesService, accesslabelsService) {
        this.tenantRepository = tenantRepository;
        this.competencyQueriesService = competencyQueriesService;
        this.UserService = UserService;
        this.EmployeeQueriesService = EmployeeQueriesService;
        this.accesslabelsService = accesslabelsService;
    }
    async createCompetency(tenantCode, userData) {
        const tenant = await this.tenantRepository.findOne({
            where: { tenant_code: tenantCode },
        });
        if (!tenant) {
            throw new common_1.NotFoundException('Tenant not found');
        }
        const nameTenant = tenant.tenant_name;
        const existingCompetency = await this.competencyQueriesService.checkCompetencyName(nameTenant, userData.competency_name);
        if (existingCompetency.length > 0) {
            throw new common_1.BadRequestException('Competency with this name already exists. Please use another name.');
        }
        let existingEmployee = await this.UserService.getUserById(userData.competency_head, tenantCode);
        if (existingEmployee.data == null) {
            throw new common_1.BadRequestException('Employee does not exist');
        }
        else if (existingEmployee.data.competency_head == true) {
            throw new common_1.BadRequestException('Competency Head is already a head of another competency');
        }
        else {
            await this.EmployeeQueriesService.updateCompetencyHead(nameTenant, existingEmployee.data.id, true, userData.competency_name);
            let accessLabelsforCompetencyHead = {
                isemployeecreate: false,
                isemployeeupdate: true,
                isemployeeread: true,
                isemployeedelete: false,
                isprojectcreate: false,
                isprojectupdate: true,
                isprojectread: true,
                isprojectdelete: false,
                iscompetencycreate: false,
                iscompetencyread: true,
                iscompetencyupdate: true,
                iscompetencydelete: false,
                ispracticecreate: false,
                ispracticeread: true,
                ispracticeupdate: false,
                ispracticedelete: false,
                iscsvupload: true,
                isprofileupdate: true,
            };
            let access = await this.accesslabelsService.updateAccessByEmployeeId(existingEmployee.data.id, tenantCode, accessLabelsforCompetencyHead);
            if (access.data > 0) {
                await this.EmployeeQueriesService.updateCompetencyHead(nameTenant, existingEmployee.data.id, false, userData.competency_name);
                throw new common_1.BadRequestException('Access Labels not updated for competency head');
            }
        }
        const code = Math.floor(Math.random() * 9000) + 1000;
        await this.competencyQueriesService.createCompetency(nameTenant, userData, code);
        const competencyData = await this.competencyQueriesService.checkCompetencyName(nameTenant, userData.competency_name);
        return {
            message: 'Competency created successfully and data saved.',
            data: competencyData,
        };
    }
    async competencyName(tenantCode, userData) {
        const tenant = await this.tenantRepository.findOne({
            where: { tenant_code: tenantCode },
        });
        if (!tenant) {
            throw new common_1.NotFoundException('Tenant not found');
        }
        const nameTenant = tenant.tenant_name;
        const existingCompetency = await this.competencyQueriesService.checkCompetencyName(nameTenant, userData.competency_name);
        if (existingCompetency.length > 0) {
            return {
                message: 'Competency with this name already exists. Please use another name.',
                data: existingCompetency[0],
            };
        }
        else {
            return { message: 'Competency with this name can be created' };
        }
    }
    async getAllCompetencies(tenantCode) {
        const tenant = await this.tenantRepository.findOne({
            where: { tenant_code: tenantCode },
        });
        if (!tenant) {
            throw new common_1.NotFoundException('Tenant not found');
        }
        const nameTenant = tenant.tenant_name;
        const competencies = await this.competencyQueriesService.getAllCompetencies(nameTenant);
        return {
            message: 'Retrieved all competencies successfully.',
            data: competencies,
        };
    }
    async getCompetencyById(id, tenantCode) {
        const tenant = await this.tenantRepository.findOne({
            where: { tenant_code: tenantCode },
        });
        if (!tenant) {
            throw new common_1.NotFoundException('Tenant not found');
        }
        const nameTenant = tenant.tenant_name;
        const competency = await this.competencyQueriesService.getCompetencyById(nameTenant, id);
        if (competency.length === 0) {
            return { message: 'Competency not found.', data: null };
        }
        return {
            message: 'Competency retrieved successfully.',
            data: competency[0],
        };
    }
    async updateCompetency(id, tenantCode, userData) {
        const tenant = await this.tenantRepository.findOne({
            where: { tenant_code: tenantCode },
        });
        if (!tenant) {
            throw new common_1.NotFoundException('Tenant not found');
        }
        const nameTenant = tenant.tenant_name;
        const competency = await this.competencyQueriesService.getCompetencyById(nameTenant, id);
        if (competency.length === 0) {
            throw new common_1.NotFoundException('Competency not found.');
        }
        await this.EmployeeQueriesService.updateCompetencyHead(nameTenant, competency[0].competency_head, false, competency[0].competency_name);
        let accessLabelsforCompetencyHead = {
            isemployeecreate: false,
            isemployeeupdate: false,
            isemployeeread: true,
            isemployeedelete: false,
            isprojectcreate: false,
            isprojectupdate: false,
            isprojectread: true,
            isprojectdelete: false,
            iscompetencycreate: false,
            iscompetencyread: true,
            iscompetencyupdate: false,
            iscompetencydelete: false,
            ispracticecreate: false,
            ispracticeread: true,
            ispracticeupdate: false,
            ispracticedelete: false,
            iscsvupload: false,
            isprofileupdate: true,
        };
        let access = await this.accesslabelsService.updateAccessByEmployeeId(competency[0].competency_head, tenantCode, accessLabelsforCompetencyHead);
        if (access.data > 0) {
            throw new common_1.BadRequestException('Access Labels not updated for previous competency head');
        }
        let existingEmployee = await this.UserService.getUserById(userData.competency_head, tenantCode);
        if (existingEmployee.data == null) {
            throw new common_1.BadRequestException('Employee does not exist');
        }
        else if (existingEmployee.data.competency_head == true) {
            throw new common_1.BadRequestException('Competency Head is already a head of another competency');
        }
        else {
            await this.EmployeeQueriesService.updateCompetencyHead(nameTenant, existingEmployee.data.id, true, competency[0].competency_name);
            let accessLabelsforCompetencyHead = {
                isemployeecreate: true,
                isemployeeupdate: true,
                isemployeeread: true,
                isemployeedelete: true,
                isprojectcreate: false,
                isprojectupdate: true,
                isprojectread: true,
                isprojectdelete: false,
                iscompetencycreate: false,
                iscompetencyread: true,
                iscompetencyupdate: true,
                iscompetencydelete: false,
                ispracticecreate: false,
                ispracticeread: true,
                ispracticeupdate: false,
                ispracticedelete: false,
                iscsvupload: true,
                isprofileupdate: true,
            };
            let access = await this.accesslabelsService.updateAccessByEmployeeId(existingEmployee.data.id, tenantCode, accessLabelsforCompetencyHead);
            if (access.data > 0) {
                throw new common_1.BadRequestException('Access Labels not updated');
            }
        }
        await this.competencyQueriesService.updateCompetency(nameTenant, id, userData);
        const updatedCompetency = await this.competencyQueriesService.getCompetencyById(nameTenant, id);
        return {
            message: 'Competency updated successfully.',
            data: updatedCompetency[0],
        };
    }
    async deleteCompetency(id, tenantCode) {
        const tenant = await this.tenantRepository.findOne({
            where: { tenant_name: tenantCode },
        });
        if (!tenant) {
            throw new common_1.NotFoundException('Tenant not found');
        }
        const nameTenant = tenant.tenant_name;
        const competency = await this.competencyQueriesService.getCompetencyById(nameTenant, id);
        if (competency.length === 0) {
            throw new common_1.NotFoundException('Competency not found.');
        }
        await this.competencyQueriesService.deleteCompetency(nameTenant, id);
        return { message: 'Competency deleted successfully.' };
    }
};
exports.CompetencyService = CompetencyService;
exports.CompetencyService = CompetencyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tenant_entity_1.Tenant)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        competencyQueries_service_1.CompetencyQueriesService,
        user_service_1.UserService,
        employeeQueries_service_1.EmployeeQueriesService,
        access_service_1.accessLabelService])
], CompetencyService);
//# sourceMappingURL=competency.service.js.map