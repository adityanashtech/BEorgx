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
exports.PracticeService = void 0;
const common_1 = require("@nestjs/common");
const tenant_entity_1 = require("../tenant/tenant.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const practiceQueries_service_1 = require("./practiceQueries.service");
let PracticeService = class PracticeService {
    constructor(tenantRepository, practiceQueriesService) {
        this.tenantRepository = tenantRepository;
        this.practiceQueriesService = practiceQueriesService;
    }
    async createPractice(tenantName, userData) {
        const tenant = await this.tenantRepository.findOne({
            where: { tenant_code: tenantName },
        });
        if (!tenant) {
            throw new common_1.BadRequestException('Tenant not found');
        }
        const nameTenant = tenant.tenant_name;
        const practices = await this.practiceQueriesService.checkPracticeName(nameTenant, userData.title);
        if (practices.length > 0) {
            throw new common_1.BadRequestException('Practice with this name already exists. Please use another name.');
        }
        const practiceData = await this.practiceQueriesService.createPractice(nameTenant, userData);
        return {
            message: 'Practice created successfully and data saved.',
            data: practiceData,
        };
    }
    async practiceName(tenantName, data) {
        const tenant = await this.tenantRepository.findOne({
            where: { tenant_code: tenantName },
        });
        if (!tenant) {
            throw new common_1.BadRequestException('Tenant not found');
        }
        const nameTenant = tenant.tenant_name;
        const practices = await this.practiceQueriesService.checkPracticeName(nameTenant, data.title);
        if (practices.length > 0) {
            throw new common_1.BadRequestException('Practice with this name already exists. Please use another name.');
        }
        return { message: 'Practice with this title can be created' };
    }
    async getAllPractices(tenantName) {
        const tenant = await this.tenantRepository.findOne({
            where: { tenant_code: tenantName },
        });
        if (!tenant) {
            throw new common_1.BadRequestException('Tenant not found');
        }
        const nameTenant = tenant.tenant_name;
        const practices = await this.practiceQueriesService.getAllPractices(nameTenant);
        return {
            message: 'Retrieved all practices successfully.',
            data: practices,
        };
    }
    async getPracticeById(id, tenantName) {
        const tenant = await this.tenantRepository.findOne({
            where: { tenant_code: tenantName },
        });
        if (!tenant) {
            throw new common_1.BadRequestException('Tenant not found');
        }
        const nameTenant = tenant.tenant_name;
        const practice = await this.practiceQueriesService.getPracticeById(nameTenant, id);
        if (practice.length === 0) {
            return { message: 'Practice not found.', data: null };
        }
        return { message: 'Practice retrieved successfully.', data: practice[0] };
    }
    async updatePractice(id, tenantName, userData) {
        const tenant = await this.tenantRepository.findOne({
            where: { tenant_code: tenantName },
        });
        if (!tenant) {
            throw new common_1.BadRequestException('Tenant not found');
        }
        const nameTenant = tenant.tenant_name;
        const practiceData = await this.practiceQueriesService.updatePractice(nameTenant, id, userData);
        return {
            message: 'Practice data updated successfully.',
            data: practiceData,
        };
    }
    async deletePractice(id, tenantName) {
        const tenant = await this.tenantRepository.findOne({
            where: { tenant_code: tenantName },
        });
        if (!tenant) {
            throw new common_1.BadRequestException('Tenant not found');
        }
        const nameTenant = tenant.tenant_name;
        await this.practiceQueriesService.deletePractice(nameTenant, id);
        return { message: 'Practice deleted successfully.' };
    }
};
exports.PracticeService = PracticeService;
exports.PracticeService = PracticeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tenant_entity_1.Tenant)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        practiceQueries_service_1.PracticeQueriesService])
], PracticeService);
//# sourceMappingURL=practice.service.js.map