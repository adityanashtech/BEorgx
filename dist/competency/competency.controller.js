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
exports.CompetencyController = void 0;
const common_1 = require("@nestjs/common");
const competency_service_1 = require("./competency.service");
const competency_swagger_1 = require("./competency.swagger");
const competency_dto_1 = require("./competency.dto");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const jwt_auth_guard_1 = require("../login/guards/jwt-auth.guard");
const auth_guard_1 = require("../login/guards/auth.guard");
const roles_decorator_1 = require("../login/decorators/roles.decorator");
let CompetencyController = class CompetencyController {
    constructor(competencyService) {
        this.competencyService = competencyService;
    }
    async createCompetency(req, userData) {
        const tenantCode = req.headers.tenant_code;
        const competencyData = (0, class_transformer_1.plainToClass)(competency_dto_1.CreateCompetencyDto, userData);
        const errors = await (0, class_validator_1.validate)(competencyData);
        if (errors.length > 0) {
            const errorMessage = Object.values(errors[0].constraints).join(', ');
            throw new common_1.BadRequestException({ message: errorMessage });
        }
        return await this.competencyService.createCompetency(tenantCode, userData);
    }
    async competencyName(req, data) {
        const tenantCode = req.headers.tenant_code;
        const competencyData = (0, class_transformer_1.plainToClass)(competency_dto_1.CompetencyNameDto, data);
        const errors = await (0, class_validator_1.validate)(competencyData);
        if (errors.length > 0) {
            const errorMessage = Object.values(errors[0].constraints).join(', ');
            throw new common_1.BadRequestException({ message: errorMessage });
        }
        return await this.competencyService.competencyName(tenantCode, data);
    }
    async getAllCompetencies(req) {
        const tenantCode = req.headers.tenant_code;
        return await this.competencyService.getAllCompetencies(tenantCode);
    }
    async getCompetencyById(id, req) {
        const tenantCode = req.headers.tenant_code;
        const competencyIdDto = (0, class_transformer_1.plainToClass)(competency_dto_1.CompetencyIdDto, { id });
        const errors = await (0, class_validator_1.validate)(competencyIdDto);
        if (errors.length > 0) {
            const errorMessage = Object.values(errors[0].constraints).join(', ');
            throw new common_1.BadRequestException({ message: errorMessage });
        }
        return await this.competencyService.getCompetencyById(id, tenantCode);
    }
    async updateCompetency(id, compentencyData, req) {
        const tenantCode = req.headers.tenant_code;
        const competencyData = (0, class_transformer_1.plainToClass)(competency_dto_1.UpdateCompetencyDto, compentencyData);
        const errors = await (0, class_validator_1.validate)(competencyData);
        if (errors.length > 0) {
            const errorMessage = Object.values(errors[0].constraints).join(', ');
            throw new common_1.BadRequestException({ message: errorMessage });
        }
        return await this.competencyService.updateCompetency(id, tenantCode, compentencyData);
    }
    async deleteCompetency(id, req) {
        const tenantCode = req.headers.tenant_code;
        const competencyIdDto = (0, class_transformer_1.plainToClass)(competency_dto_1.CompetencyIdDto, { id });
        const errors = await (0, class_validator_1.validate)(competencyIdDto);
        if (errors.length > 0) {
            const errorMessage = Object.values(errors[0].constraints).join(', ');
            throw new common_1.BadRequestException({ message: errorMessage });
        }
        return await this.competencyService.deleteCompetency(id, tenantCode);
    }
};
exports.CompetencyController = CompetencyController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, auth_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'employee'),
    (0, common_1.Post)(),
    (0, competency_swagger_1.createCompetencySwagger)(),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, competency_dto_1.CreateCompetencyDto]),
    __metadata("design:returntype", Promise)
], CompetencyController.prototype, "createCompetency", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, auth_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'employee'),
    (0, common_1.Post)('competencyName'),
    (0, competency_swagger_1.competencyNameSwagger)(),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, competency_dto_1.CompetencyNameDto]),
    __metadata("design:returntype", Promise)
], CompetencyController.prototype, "competencyName", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, auth_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'employee'),
    (0, common_1.Get)(),
    (0, competency_swagger_1.getAllCompetenciesSwagger)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CompetencyController.prototype, "getAllCompetencies", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, auth_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'employee'),
    (0, common_1.Get)(':id'),
    (0, competency_swagger_1.getCompetencyByIdSwagger)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CompetencyController.prototype, "getCompetencyById", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, auth_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'employee'),
    (0, common_1.Put)(':id'),
    (0, competency_swagger_1.updateCompetencySwagger)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, competency_dto_1.UpdateCompetencyDto, Object]),
    __metadata("design:returntype", Promise)
], CompetencyController.prototype, "updateCompetency", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, auth_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'employee'),
    (0, common_1.Delete)(':id'),
    (0, competency_swagger_1.deleteCompetencySwagger)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CompetencyController.prototype, "deleteCompetency", null);
exports.CompetencyController = CompetencyController = __decorate([
    (0, common_1.Controller)('competency'),
    __metadata("design:paramtypes", [competency_service_1.CompetencyService])
], CompetencyController);
//# sourceMappingURL=competency.controller.js.map