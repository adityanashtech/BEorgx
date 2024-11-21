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
const employeeSkill_service_1 = require("./employeeSkill.service");
const employeeSkill_swagger_1 = require("./employeeSkill.swagger");
const employeeSKill_dto_1 = require("./employeeSKill.dto");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const auth_guard_1 = require("../login/guards/auth.guard");
const jwt_auth_guard_1 = require("../login/guards/jwt-auth.guard");
const roles_decorator_1 = require("../login/decorators/roles.decorator");
let employeeSkillController = class employeeSkillController {
    constructor(employeeSkillService) {
        this.employeeSkillService = employeeSkillService;
    }
    async createEmployeeSkill(req, userData) {
        const tenantCode = req.headers.tenant_code;
        const employeeSkillData = (0, class_transformer_1.plainToClass)(employeeSKill_dto_1.CreateEmployeeSkillDto, userData);
        const errors = await (0, class_validator_1.validate)(employeeSkillData);
        if (errors.length > 0) {
            const errorMessage = Object.values(errors[0].constraints).join(', ');
            throw new common_1.BadRequestException({ message: errorMessage });
        }
        return await this.employeeSkillService.createEmployeeSkill(tenantCode, userData);
    }
    async getAllEmployeeSkill(req) {
        const tenantCode = req.headers.tenant_code;
        return await this.employeeSkillService.getAllEmployeeSkills(tenantCode);
    }
    async getEmployeeSkillByEmployeeId(employee_id, req) {
        const tenantCode = req.headers.tenant_code;
        const employeeSkillIdDto = (0, class_transformer_1.plainToClass)(employeeSKill_dto_1.EmployeeSkillIdDto, {
            employee_id,
        });
        const errors = await (0, class_validator_1.validate)(employeeSkillIdDto);
        if (errors.length > 0) {
            const errorMessage = Object.values(errors[0].constraints).join(', ');
            throw new common_1.BadRequestException({ message: errorMessage });
        }
        return await this.employeeSkillService.getEmployeeSkillByEmployeeId(employee_id, tenantCode);
    }
    async deleteEmployeeSkill(id, req) {
        const tenantCode = req.headers.tenant_code;
        const employeeSkillIdDto = (0, class_transformer_1.plainToClass)(employeeSKill_dto_1.DeleteEmployeeSkillDto, {
            id,
        });
        const errors = await (0, class_validator_1.validate)(employeeSkillIdDto);
        if (errors.length > 0) {
            const errorMessage = Object.values(errors[0].constraints).join(', ');
            throw new common_1.BadRequestException({ message: errorMessage });
        }
        return await this.employeeSkillService.deleteEmployeeSkill(id, tenantCode);
    }
};
exports.employeeSkillController = employeeSkillController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, auth_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'employee'),
    (0, common_1.Post)(),
    (0, employeeSkill_swagger_1.createEmployeeSkillSwagger)(),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, employeeSKill_dto_1.CreateEmployeeSkillDto]),
    __metadata("design:returntype", Promise)
], employeeSkillController.prototype, "createEmployeeSkill", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, auth_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'employee'),
    (0, common_1.Get)(),
    (0, employeeSkill_swagger_1.getAllEmployeeSkillsSwagger)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], employeeSkillController.prototype, "getAllEmployeeSkill", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, auth_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'employee'),
    (0, common_1.Get)(':employee_id'),
    (0, employeeSkill_swagger_1.getEmployeeSkillByEmployeeIdSwagger)(),
    __param(0, (0, common_1.Param)('employee_id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], employeeSkillController.prototype, "getEmployeeSkillByEmployeeId", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, auth_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'employee'),
    (0, common_1.Delete)(':id'),
    (0, employeeSkill_swagger_1.deleteEmployeeSkillSwagger)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], employeeSkillController.prototype, "deleteEmployeeSkill", null);
exports.employeeSkillController = employeeSkillController = __decorate([
    (0, common_1.Controller)('employeeSkill'),
    __metadata("design:paramtypes", [employeeSkill_service_1.employeeSkillService])
], employeeSkillController);
//# sourceMappingURL=employeeSkill.controller.js.map