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
exports.accessLabelService = void 0;
const common_1 = require("@nestjs/common");
const tenant_entity_1 = require("../tenant/tenant.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const accessQueries_service_1 = require("./accessQueries.service");
let accessLabelService = class accessLabelService {
    constructor(tenantRepository, accessLabelQueriesService) {
        this.tenantRepository = tenantRepository;
        this.accessLabelQueriesService = accessLabelQueriesService;
    }
    async checkTenant(tenantName) {
        const tenant = await this.tenantRepository.findOne({
            where: { tenant_code: tenantName },
        });
        if (!tenant) {
            throw new common_1.BadRequestException('Tenant not found');
        }
        else {
            return tenant;
        }
    }
    async createAccess(tenantName, userData) {
        let tenant = await this.checkTenant(tenantName);
        const nameTenant = tenant.tenant_name;
        const accessData = await this.accessLabelQueriesService.createAccess(nameTenant, userData);
        return {
            message: 'Access labels created successfully and data saved.',
            data: accessData,
        };
    }
    async getAllAccess(tenantName) {
        let tenant = await this.checkTenant(tenantName);
        const nameTenant = tenant.tenant_name;
        const practices = await this.accessLabelQueriesService.getAllAccess(nameTenant);
        return {
            message: 'Retrieved all access la bels successfully.',
            data: practices,
        };
    }
    async getAccessByEmployeeId(id, tenantName) {
        let tenant = await this.checkTenant(tenantName);
        const nameTenant = tenant.tenant_name;
        const access = await this.accessLabelQueriesService.getAccessByEmployeeId(nameTenant, id);
        if (access.length === 0) {
            return { message: 'Access labels for this employee not found.', data: null };
        }
        return access[0];
    }
    async updateAccessByEmployeeId(id, tenantName, userData) {
        let tenant = await this.checkTenant(tenantName);
        const nameTenant = tenant.tenant_name;
        const accessData = await this.accessLabelQueriesService.updateAccessByEmployeeId(nameTenant, id, userData);
        return {
            message: 'Access label data updated successfully.',
            data: accessData,
        };
    }
};
exports.accessLabelService = accessLabelService;
exports.accessLabelService = accessLabelService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tenant_entity_1.Tenant)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        accessQueries_service_1.accessLabelQueriesService])
], accessLabelService);
//# sourceMappingURL=access.service.js.map