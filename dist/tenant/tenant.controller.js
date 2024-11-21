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
exports.TenantController = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const tenant_entity_1 = require("./tenant.entity");
const tenant_service_1 = require("./tenant.service");
const swagger_1 = require("@nestjs/swagger");
const tenant_swagger_1 = require("./tenant.swagger");
const tenant_dto_1 = require("./tenant.dto");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const roles_decorator_1 = require("../login/decorators/roles.decorator");
const jwt_auth_guard_1 = require("../login/guards/jwt-auth.guard");
const auth_guard_1 = require("../login/guards/auth.guard");
let TenantController = class TenantController {
    constructor(tenantRepository, tenantService) {
        this.tenantRepository = tenantRepository;
        this.tenantService = tenantService;
    }
    async findAll() {
        const tenants = await this.tenantRepository.find();
        return {
            message: 'Tenants retrieved successfully',
            data: tenants,
        };
    }
    async filterByEmail(tenant_email) {
        const tenant = await this.tenantRepository.findOne({
            where: { tenant_email },
        });
        if (tenant) {
            return {
                message: 'Tenant retrieved successfully',
                data: tenant,
            };
        }
        else {
            return {
                message: 'Tenant with this email does not exist',
            };
        }
    }
    async findOne(id) {
        const getTenantByIdDto = (0, class_transformer_1.plainToClass)(tenant_dto_1.GetTenantByIdDto, { id });
        const errors = await (0, class_validator_1.validate)(getTenantByIdDto);
        if (errors.length > 0) {
            const errorMessage = Object.values(errors[0].constraints).join(', ');
            throw new common_1.BadRequestException({ message: errorMessage });
        }
        const tenant = await this.tenantRepository.findOne({
            where: { id: getTenantByIdDto.id },
        });
        if (tenant) {
            return {
                message: 'Tenant retrieved successfully',
                data: tenant,
            };
        }
        else {
            return {
                message: `Tenant with ID ${id} not found`,
            };
        }
    }
    async create(tenantData) {
        const createTenantDto = (0, class_transformer_1.plainToClass)(tenant_dto_1.CreateTenantDto, tenantData);
        const errors = await (0, class_validator_1.validate)(createTenantDto);
        if (errors.length > 0) {
            const errorMessage = Object.values(errors[0].constraints).join(', ');
            throw new common_1.BadRequestException({ message: errorMessage });
        }
        tenantData.isRegistered = false;
        const result = await this.tenantService.createTenant(tenantData);
        return result;
    }
    async tenantRegister(tenantData) {
        const createTenantDto = (0, class_transformer_1.plainToClass)(tenant_dto_1.CreateRegisteredDto, tenantData);
        const errors = await (0, class_validator_1.validate)(createTenantDto);
        if (errors.length > 0) {
            const errorMessage = Object.values(errors[0].constraints).join(', ');
            throw new common_1.BadRequestException({ message: errorMessage });
        }
        tenantData.isRegistered = true;
        const result = await this.tenantService.createTenant(tenantData);
        return result;
    }
    async update(id, tenantData) {
        const updateTenantDto = (0, class_transformer_1.plainToClass)(tenant_dto_1.UpdateTenantDto, tenantData);
        const errors = await (0, class_validator_1.validate)(updateTenantDto);
        if (errors.length > 0) {
            const errorMessage = Object.values(errors[0].constraints).join(', ');
            throw new common_1.BadRequestException({ message: errorMessage });
        }
        await this.tenantRepository.update(id, tenantData);
        const updatedTenant = await this.tenantRepository.findOne({
            where: { id },
        });
        return {
            message: 'Tenant updated successfully',
            updatedData: updatedTenant,
        };
    }
    async remove(id) {
        const deleteTenantDto = (0, class_transformer_1.plainToClass)(tenant_dto_1.DeleteTenantDto, { id });
        const errors = await (0, class_validator_1.validate)(deleteTenantDto);
        if (errors.length > 0) {
            const errorMessage = Object.values(errors[0].constraints).join(', ');
            throw new common_1.BadRequestException({ message: errorMessage });
        }
        await this.tenantRepository.delete(id);
        return { message: `Tenant with ID ${id} deleted successfully` };
    }
};
exports.TenantController = TenantController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, auth_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'super admin'),
    (0, common_1.Get)(),
    (0, tenant_swagger_1.getAllTenantsSwagger)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TenantController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('email/filter'),
    __param(0, (0, common_1.Query)('tenant_email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TenantController.prototype, "filterByEmail", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, tenant_swagger_1.getAllTenantsSwagger)(),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TenantController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, auth_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'super admin'),
    (0, common_1.Post)(),
    (0, tenant_swagger_1.createTenantSwagger)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tenant_entity_1.Tenant]),
    __metadata("design:returntype", Promise)
], TenantController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('register'),
    (0, tenant_swagger_1.createRegisterSwagger)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tenant_entity_1.Tenant]),
    __metadata("design:returntype", Promise)
], TenantController.prototype, "tenantRegister", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, auth_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'super admin'),
    (0, common_1.Patch)(':id'),
    (0, tenant_swagger_1.updateTenantSwagger)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, tenant_entity_1.Tenant]),
    __metadata("design:returntype", Promise)
], TenantController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, auth_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'super admin'),
    (0, common_1.Delete)(':id'),
    (0, tenant_swagger_1.deleteTenantSwagger)(),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TenantController.prototype, "remove", null);
exports.TenantController = TenantController = __decorate([
    (0, common_1.Controller)('tenant'),
    (0, swagger_1.ApiTags)('tenant'),
    __param(0, (0, typeorm_2.InjectRepository)(tenant_entity_1.Tenant)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        tenant_service_1.TenantService])
], TenantController);
exports.default = TenantController;
//# sourceMappingURL=tenant.controller.js.map