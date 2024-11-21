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
exports.ProjectController = void 0;
const common_1 = require("@nestjs/common");
const project_service_1 = require("./project.service");
const project_swagger_1 = require("./project.swagger");
const project_dto_1 = require("./project.dto");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const jwt_auth_guard_1 = require("../login/guards/jwt-auth.guard");
const auth_guard_1 = require("../login/guards/auth.guard");
const roles_decorator_1 = require("../login/decorators/roles.decorator");
const platform_express_1 = require("@nestjs/platform-express");
let ProjectController = class ProjectController {
    constructor(projectService) {
        this.projectService = projectService;
    }
    async createProject(req, userData, file) {
        const tenantCode = req.headers.tenant_code;
        const projectData = (0, class_transformer_1.plainToClass)(project_dto_1.CreateProjectDto, userData);
        const errors = await (0, class_validator_1.validate)(projectData);
        if (errors.length > 0) {
            const errorMessage = Object.values(errors[0].constraints).join(', ');
            throw new common_1.BadRequestException({ message: errorMessage });
        }
        return await this.projectService.createProject(tenantCode, userData, file);
    }
    async getAllProjects(req) {
        const tenantCode = req.headers.tenant_code;
        return await this.projectService.getAllProjects(tenantCode);
    }
    async getProjectById(id, req) {
        const tenantCode = req.headers.tenant_code;
        const competencyIdDto = (0, class_transformer_1.plainToClass)(project_dto_1.ProjectIdDto, { id });
        const errors = await (0, class_validator_1.validate)(project_dto_1.ProjectIdDto);
        if (errors.length > 0) {
            const errorMessage = Object.values(errors[0].constraints).join(', ');
            throw new common_1.BadRequestException({ message: errorMessage });
        }
        return await this.projectService.getProjectById(id, tenantCode);
    }
    async updateCompetency(id, projectData, file, req) {
        const tenantCode = req.headers.tenant_code;
        const competencyData = (0, class_transformer_1.plainToClass)(project_dto_1.UpdateProjectDto, projectData);
        const errors = await (0, class_validator_1.validate)(competencyData);
        if (errors.length > 0) {
            const errorMessage = Object.values(errors[0].constraints).join(', ');
            throw new common_1.BadRequestException({ message: errorMessage });
        }
        return await this.projectService.updateProject(id, tenantCode, projectData, file);
    }
    async deleteCompetency(id, req) {
        const tenantCode = req.headers.tenant_code;
        const competencyIdDto = (0, class_transformer_1.plainToClass)(project_dto_1.ProjectIdDto, { id });
        const errors = await (0, class_validator_1.validate)(project_dto_1.ProjectIdDto);
        if (errors.length > 0) {
            const errorMessage = Object.values(errors[0].constraints).join(', ');
            throw new common_1.BadRequestException({ message: errorMessage });
        }
        return await this.projectService.deleteProject(id, tenantCode);
    }
};
exports.ProjectController = ProjectController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, auth_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'employee'),
    (0, common_1.Post)(),
    (0, project_swagger_1.createProjectSwagger)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, project_dto_1.CreateProjectDto, Object]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "createProject", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, auth_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'employee'),
    (0, common_1.Get)(),
    (0, project_swagger_1.getAllProjectsSwagger)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "getAllProjects", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, auth_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'employee'),
    (0, common_1.Get)(':id'),
    (0, project_swagger_1.getProjectByIdSwagger)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "getProjectById", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, auth_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'employee'),
    (0, common_1.Put)(':id'),
    (0, project_swagger_1.updateProjectSwagger)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __param(3, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, project_dto_1.UpdateProjectDto, Object, Object]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "updateCompetency", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, auth_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'employee'),
    (0, common_1.Delete)(':id'),
    (0, project_swagger_1.deleteProjectSwagger)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "deleteCompetency", null);
exports.ProjectController = ProjectController = __decorate([
    (0, common_1.Controller)('project'),
    __metadata("design:paramtypes", [project_service_1.ProjectService])
], ProjectController);
//# sourceMappingURL=project.controller.js.map