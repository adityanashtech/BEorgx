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
exports.employeeSkillController = void 0;
const common_1 = require("@nestjs/common");
const competencySkill_service_1 = require("./competencySkill.service");
const competencySkill_swagger_1 = require("./competencySkill.swagger");
const competencySKill_dto_1 = require("./competencySKill.dto");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const jwt_auth_guard_1 = require("../login/guards/jwt-auth.guard");
const auth_guard_1 = require("../login/guards/auth.guard");
const roles_decorator_1 = require("../login/decorators/roles.decorator");
let employeeSkillController = class employeeSkillController {
    constructor(employeeSkillService) {
        this.employeeSkillService = employeeSkillService;
    }
    async getSkillsBySkillName(skill_name, req) {
        const tenantCode = req.headers.tenant_code;
        const employeeSkillData = (0, class_transformer_1.plainToClass)(competencySKill_dto_1.EmployeeBySkillDto, { skill_name });
        const errors = await (0, class_validator_1.validate)(employeeSkillData);
        if (errors.length > 0) {
            const errorMessage = Object.values(errors[0].constraints).join(', ');
            throw new common_1.BadRequestException({ message: errorMessage });
        }
        return await this.employeeSkillService.getSkillsBySkillName(skill_name, tenantCode);
    }
    async getSkillsByLevel(skill_name, level, req) {
        const tenantCode = req.headers.tenant_code;
        const employeeSkillData = (0, class_transformer_1.plainToClass)(competencySKill_dto_1.EmployeeByLevelDto, {
            skill_name,
            level,
        });
        const errors = await (0, class_validator_1.validate)(employeeSkillData);
        if (errors.length > 0) {
            const errorMessage = Object.values(errors[0].constraints).join(', ');
            throw new common_1.BadRequestException({ message: errorMessage });
        }
        return await this.employeeSkillService.getSkillsByLevel(skill_name, level, tenantCode);
    }
    async getSkillsByCompetency(studio_id, req) {
        const tenantCode = req.headers.tenant_code;
        const employeeSkillData = (0, class_transformer_1.plainToClass)(competencySKill_dto_1.EmployeeByStudioDto, {
            studio_id,
        });
        const errors = await (0, class_validator_1.validate)(employeeSkillData);
        if (errors.length > 0) {
            const errorMessage = Object.values(errors[0].constraints).join(', ');
            throw new common_1.BadRequestException({ message: errorMessage });
        }
        return await this.employeeSkillService.getSkillsByCompetency(studio_id, tenantCode);
    }
};
exports.employeeSkillController = employeeSkillController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, auth_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.Get)(':skill_name'),
    (0, competencySkill_swagger_1.getSkillsBySkillNameSwagger)(),
    __param(0, (0, common_1.Param)('skill_name')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], employeeSkillController.prototype, "getSkillsBySkillName", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, auth_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.Get)(':skill_name/:level'),
    (0, competencySkill_swagger_1.getSkillsByLevelSwagger)(),
    __param(0, (0, common_1.Param)('skill_name')),
    __param(1, (0, common_1.Param)('level')),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], employeeSkillController.prototype, "getSkillsByLevel", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, auth_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.Post)(':studio_id'),
    (0, competencySkill_swagger_1.getSkillsByCompetencySwagger)(),
    __param(0, (0, common_1.Body)('studio_id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], employeeSkillController.prototype, "getSkillsByCompetency", null);
exports.employeeSkillController = employeeSkillController = __decorate([
    (0, common_1.Controller)('competencySkill'),
    __metadata("design:paramtypes", [competencySkill_service_1.employeeSkillService])
], employeeSkillController);
//# sourceMappingURL=competencySkill.controller.js.map