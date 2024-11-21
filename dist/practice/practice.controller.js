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
exports.PracticeController = void 0;
const common_1 = require("@nestjs/common");
const practice_service_1 = require("./practice.service");
const paractice_swagger_1 = require("./paractice.swagger");
const practice_dto_1 = require("./practice.dto");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const jwt_auth_guard_1 = require("../login/guards/jwt-auth.guard");
const auth_guard_1 = require("../login/guards/auth.guard");
const roles_decorator_1 = require("../login/decorators/roles.decorator");
let PracticeController = class PracticeController {
    constructor(practiceService) {
        this.practiceService = practiceService;
    }
    async createPractice(req, practiceData) {
        const tenantName = req.headers.tenant_code;
        const practiceDto = (0, class_transformer_1.plainToClass)(practice_dto_1.CreatePracticeDto, practiceData);
        const errors = await (0, class_validator_1.validate)(practiceDto);
        if (errors.length > 0) {
            const errorMessage = Object.values(errors[0].constraints).join(', ');
            throw new common_1.BadRequestException({ message: errorMessage });
        }
        return await this.practiceService.createPractice(tenantName, practiceDto);
    }
    async practiceName(req, data) {
        const tenantName = req.headers.tenant_code;
        const practiceNameDto = (0, class_transformer_1.plainToClass)(practice_dto_1.PracticeNameDto, data);
        const errors = await (0, class_validator_1.validate)(practiceNameDto);
        if (errors.length > 0) {
            const errorMessage = Object.values(errors[0].constraints).join(', ');
            throw new common_1.BadRequestException({ message: errorMessage });
        }
        return await this.practiceService.practiceName(tenantName, practiceNameDto);
    }
    async getAllPractices(req) {
        const tenantName = req.headers.tenant_code;
        return await this.practiceService.getAllPractices(tenantName);
    }
    async getPracticeById(id, req) {
        const tenantName = req.headers.tenant_code;
        const getIdDto = (0, class_transformer_1.plainToClass)(practice_dto_1.PracticeGetIdDto, { id });
        const errors = await (0, class_validator_1.validate)(getIdDto);
        if (errors.length > 0) {
            const errorMessage = Object.values(errors[0].constraints).join(', ');
            throw new common_1.BadRequestException({ message: errorMessage });
        }
        return await this.practiceService.getPracticeById(id.toString(), tenantName);
    }
    async updatePractice(id, practiceData, req) {
        const tenantName = req.headers.tenant_code;
        const updateDto = (0, class_transformer_1.plainToClass)(practice_dto_1.UpdatePracticeDto, practiceData);
        const errors = await (0, class_validator_1.validate)(updateDto);
        if (errors.length > 0) {
            const errorMessage = Object.values(errors[0].constraints).join(', ');
            throw new common_1.BadRequestException({ message: errorMessage });
        }
        return await this.practiceService.updatePractice(id, tenantName, updateDto);
    }
    async deletePractice(id, req) {
        const tenantName = req.headers.tenant_code;
        const deleteDto = (0, class_transformer_1.plainToClass)(practice_dto_1.PracticeDeleteIdDto, { id });
        const errors = await (0, class_validator_1.validate)(deleteDto);
        if (errors.length > 0) {
            const errorMessage = Object.values(errors[0].constraints).join(', ');
            throw new common_1.BadRequestException({ message: errorMessage });
        }
        return await this.practiceService.deletePractice(id, tenantName);
    }
};
exports.PracticeController = PracticeController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, auth_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'employee'),
    (0, common_1.Post)(),
    (0, paractice_swagger_1.createPracticeSwagger)(),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, practice_dto_1.CreatePracticeDto]),
    __metadata("design:returntype", Promise)
], PracticeController.prototype, "createPractice", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, auth_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'employee'),
    (0, common_1.Post)('practiceName'),
    (0, paractice_swagger_1.practiceNameSwagger)(),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, practice_dto_1.PracticeNameDto]),
    __metadata("design:returntype", Promise)
], PracticeController.prototype, "practiceName", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, auth_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'employee'),
    (0, common_1.Get)(),
    (0, paractice_swagger_1.getPracticeSwagger)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PracticeController.prototype, "getAllPractices", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, auth_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'employee'),
    (0, common_1.Get)(':id'),
    (0, paractice_swagger_1.getPracticeByIdSwagger)(),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], PracticeController.prototype, "getPracticeById", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, auth_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'employee'),
    (0, common_1.Put)(':id'),
    (0, paractice_swagger_1.updatePracticeSwagger)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, practice_dto_1.UpdatePracticeDto, Object]),
    __metadata("design:returntype", Promise)
], PracticeController.prototype, "updatePractice", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, auth_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'employee'),
    (0, common_1.Delete)(':id'),
    (0, paractice_swagger_1.deletePracticeSwagger)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PracticeController.prototype, "deletePractice", null);
exports.PracticeController = PracticeController = __decorate([
    (0, common_1.Controller)('practice'),
    __metadata("design:paramtypes", [practice_service_1.PracticeService])
], PracticeController);
//# sourceMappingURL=practice.controller.js.map