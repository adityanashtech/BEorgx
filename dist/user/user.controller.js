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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const user_service_1 = require("./user.service");
const user_dto_1 = require("./user.dto");
const swagger_1 = require("@nestjs/swagger");
const employee_swagger_1 = require("./employee.swagger");
const jwt_auth_guard_1 = require("../login/guards/jwt-auth.guard");
const auth_guard_1 = require("../login/guards/auth.guard");
const roles_decorator_1 = require("../login/decorators/roles.decorator");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async createUser(req, userData) {
        const tenantCode = req.headers.tenant_code;
        const createUserDto = (0, class_transformer_1.plainToClass)(user_dto_1.CreateUserDto, userData);
        const errors = await (0, class_validator_1.validate)(createUserDto);
        if (errors.length > 0) {
            const errorMessage = Object.values(errors[0].constraints).join(', ');
            throw new common_1.BadRequestException({ message: errorMessage });
        }
        return await this.userService.createUser(tenantCode, userData);
    }
    async filterUsersByName(name, req) {
        const tenantCode = req.headers.tenant_code;
        const filterUsersByNameDto = (0, class_transformer_1.plainToClass)(user_dto_1.FilterUsersByNameDto, { name });
        const errors = await (0, class_validator_1.validate)(filterUsersByNameDto);
        if (errors.length > 0) {
            const errorMessage = Object.values(errors[0].constraints).join(', ');
            throw new common_1.BadRequestException({ message: errorMessage });
        }
        return await this.userService.filterUsersByName(tenantCode, name);
    }
    async filterUsersByLocation(location, req) {
        const tenantCode = req.headers.tenant_code;
        const filterUsersByLocationDto = (0, class_transformer_1.plainToClass)(user_dto_1.FilterUsersByLocationDto, {
            location,
        });
        const errors = await (0, class_validator_1.validate)(filterUsersByLocationDto);
        if (errors.length > 0) {
            const errorMessage = Object.values(errors[0].constraints).join(', ');
            throw new common_1.BadRequestException({ message: errorMessage });
        }
        return await this.userService.filterUsersByLocation(tenantCode, location);
    }
    async getAllUsers(req) {
        const tenantCode = req.headers.tenant_code;
        return await this.userService.getAllUsers(tenantCode);
    }
    async getAllDesignations(req) {
        const tenantCode = req.headers.tenant_code;
        return await this.userService.getAllDesignations(tenantCode);
    }
    async getUserById(id, req) {
        const tenantCode = req.headers.tenant_code;
        const getUserByIdDto = (0, class_transformer_1.plainToClass)(user_dto_1.GetUserByIdDto, { id });
        const errors = await (0, class_validator_1.validate)(getUserByIdDto);
        if (errors.length > 0) {
            const errorMessage = Object.values(errors[0].constraints).join(', ');
            throw new common_1.BadRequestException({ message: errorMessage });
        }
        return await this.userService.getUserById(id.toString(), tenantCode);
    }
    async updateUser(id, userData, req) {
        const tenantCode = req.headers.tenant_code;
        const updateUserDto = (0, class_transformer_1.plainToClass)(user_dto_1.UpdateUserDto, { id, ...userData });
        const errors = await (0, class_validator_1.validate)(updateUserDto);
        if (errors.length > 0) {
            const errorMessage = Object.values(errors[0].constraints).join(', ');
            throw new common_1.BadRequestException({ message: errorMessage });
        }
        return await this.userService.updateUser(id, tenantCode, userData);
    }
    async updateCompetencyAndReporting(id, userData, req) {
        const tenantCode = req.headers.tenant_code;
        const updateUserDto = (0, class_transformer_1.plainToClass)(user_dto_1.updateReportingDto, { id, ...userData });
        const errors = await (0, class_validator_1.validate)(updateUserDto);
        if (errors.length > 0) {
            const errorMessage = Object.values(errors[0].constraints).join(', ');
            throw new common_1.BadRequestException({ message: errorMessage });
        }
        return await this.userService.updateCompetencyandReporting(id, tenantCode, userData);
    }
    async deleteUser(id, req) {
        const tenantCode = req.headers.tenant_code;
        const errors = await (0, class_validator_1.validate)(user_dto_1.DeleteUserDto);
        if (errors.length > 0) {
            const errorMessage = Object.values(errors[0].constraints).join(', ');
            throw new common_1.BadRequestException({ message: errorMessage });
        }
        return await this.userService.deleteUser(id, tenantCode);
    }
    async checkUsersByEmail(email, req) {
        const tenantCode = req.headers.tenant_code;
        const errors = await (0, class_validator_1.validate)(user_dto_1.checkUsersByEmail);
        if (errors.length > 0) {
            const errorMessage = Object.values(errors[0].constraints).join(', ');
            throw new common_1.BadRequestException({ message: errorMessage });
        }
        return await this.userService.checkUsersByEmail(email, tenantCode);
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, auth_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'employee'),
    (0, common_1.Post)(),
    (0, employee_swagger_1.createUserSwagger)(),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, auth_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'employee'),
    (0, common_1.Get)('filterByName'),
    (0, employee_swagger_1.filterUsersByNameSwagger)(),
    __param(0, (0, common_1.Query)('name')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "filterUsersByName", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, auth_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'employee'),
    (0, common_1.Get)('filterByLocation'),
    (0, employee_swagger_1.filterUsersByLocationSwagger)(),
    __param(0, (0, common_1.Query)('location')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "filterUsersByLocation", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, auth_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'employee'),
    (0, common_1.Get)(),
    (0, employee_swagger_1.getAllUsersSwagger)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, auth_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'employee'),
    (0, common_1.Get)('designation'),
    (0, employee_swagger_1.getAllDesignationsSwagger)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAllDesignations", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, auth_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'employee'),
    (0, common_1.Get)(':id'),
    (0, employee_swagger_1.getUserByIdSwagger)(),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserById", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, auth_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'employee'),
    (0, common_1.Put)(':id'),
    (0, employee_swagger_1.updateUserSwagger)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, auth_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'employee'),
    (0, common_1.Patch)('reporting/:id'),
    (0, employee_swagger_1.updateReportingSwagger)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateCompetencyAndReporting", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, auth_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'employee'),
    (0, common_1.Delete)(':id'),
    (0, employee_swagger_1.deleteUserSwagger)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUser", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, auth_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'employee'),
    (0, common_1.Get)('email/check'),
    (0, employee_swagger_1.checkUsersByEmailSwagger)(),
    __param(0, (0, common_1.Query)('email')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "checkUsersByEmail", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('employee'),
    (0, swagger_1.ApiTags)('employee'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map