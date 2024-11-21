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
exports.SkillController = void 0;
const common_1 = require("@nestjs/common");
const skills_service_1 = require("./skills.service");
const skills_swagger_1 = require("./skills.swagger");
const skills_dto_1 = require("./skills.dto");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const jwt_auth_guard_1 = require("../login/guards/jwt-auth.guard");
const auth_guard_1 = require("../login/guards/auth.guard");
const roles_decorator_1 = require("../login/decorators/roles.decorator");
let SkillController = class SkillController {
    constructor(SkillService) {
        this.SkillService = SkillService;
    }
    async createSkill(req, userData) {
        const tenantCode = req.headers.tenant_code;
        const competencyData = (0, class_transformer_1.plainToClass)(skills_dto_1.CreateSkillDto, userData);
        const errors = await (0, class_validator_1.validate)(competencyData);
        if (errors.length > 0) {
            const errorMessage = Object.values(errors[0].constraints).join(', ');
            throw new common_1.BadRequestException({ message: errorMessage });
        }
        return await this.SkillService.createSkill(tenantCode, userData);
    }
    async skillName(req, data) {
        const tenantCode = req.headers.tenant_code;
        const competencyData = (0, class_transformer_1.plainToClass)(skills_dto_1.SkillNameDto, data);
        const errors = await (0, class_validator_1.validate)(competencyData);
        if (errors.length > 0) {
            const errorMessage = Object.values(errors[0].constraints).join(', ');
            throw new common_1.BadRequestException({ message: errorMessage });
        }
        return await this.SkillService.skillName(tenantCode, data);
    }
    async getAllSkills(req) {
        const tenantCode = req.headers.tenant_code;
        return await this.SkillService.getAllSkills(tenantCode);
    }
    async getSkillById(id, req) {
        const tenantCode = req.headers.tenant_code;
        const competencyIdDto = (0, class_transformer_1.plainToClass)(skills_dto_1.SkillIdDto, { id });
        const errors = await (0, class_validator_1.validate)(competencyIdDto);
        if (errors.length > 0) {
            const errorMessage = Object.values(errors[0].constraints).join(', ');
            throw new common_1.BadRequestException({ message: errorMessage });
        }
        return await this.SkillService.getSkillById(id, tenantCode);
    }
};
exports.SkillController = SkillController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, auth_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'employee'),
    (0, common_1.Post)(),
    (0, skills_swagger_1.createSkillSwagger)(),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, skills_dto_1.CreateSkillDto]),
    __metadata("design:returntype", Promise)
], SkillController.prototype, "createSkill", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, auth_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'employee'),
    (0, common_1.Post)('skillName'),
    (0, skills_swagger_1.skillNameSwagger)(),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, skills_dto_1.SkillNameDto]),
    __metadata("design:returntype", Promise)
], SkillController.prototype, "skillName", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, auth_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'employee'),
    (0, common_1.Get)(),
    (0, skills_swagger_1.getAllSkillsSwagger)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SkillController.prototype, "getAllSkills", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, auth_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'employee'),
    (0, common_1.Get)(':id'),
    (0, skills_swagger_1.getSkillByIdSwagger)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], SkillController.prototype, "getSkillById", null);
exports.SkillController = SkillController = __decorate([
    (0, common_1.Controller)('skill'),
    __metadata("design:paramtypes", [skills_service_1.SkillService])
], SkillController);
//# sourceMappingURL=skills.controller.js.map