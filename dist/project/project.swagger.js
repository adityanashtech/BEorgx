"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProjectSwagger = exports.updateProjectSwagger = exports.getProjectByIdSwagger = exports.getAllProjectsSwagger = exports.createProjectSwagger = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const project_dto_1 = require("./project.dto");
const createProjectSwagger = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)('project'), (0, swagger_1.ApiOperation)({ summary: 'Create a new project' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiHeader)({
        name: 'token',
        description: 'JWT token for authentication',
        required: false,
    }), (0, swagger_1.ApiHeader)({
        name: 'tenant_code',
        description: 'Code of the tenant',
        required: true,
    }), (0, swagger_1.ApiConsumes)('multipart/form-data'), (0, swagger_1.ApiBody)({
        type: project_dto_1.CreateProjectDto,
        description: 'Data required to create a new project',
    }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input data' }));
};
exports.createProjectSwagger = createProjectSwagger;
const getAllProjectsSwagger = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)('project'), (0, swagger_1.ApiOperation)({ summary: 'Get all projects' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiHeader)({
        name: 'token',
        description: 'JWT token for authentication',
        required: false,
    }), (0, swagger_1.ApiHeader)({
        name: 'tenant_code',
        description: 'Code of the tenant',
        required: true,
    }));
};
exports.getAllProjectsSwagger = getAllProjectsSwagger;
const getProjectByIdSwagger = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)('project'), (0, swagger_1.ApiOperation)({ summary: 'Get a project by ID' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiHeader)({
        name: 'token',
        description: 'JWT token for authentication',
        required: false,
    }), (0, swagger_1.ApiHeader)({
        name: 'tenant_code',
        description: 'Code of the tenant',
        required: true,
    }), (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'ID of the project to retrieve',
        type: 'string',
    }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input data' }), (0, swagger_1.ApiNotFoundResponse)({ description: 'project not found' }));
};
exports.getProjectByIdSwagger = getProjectByIdSwagger;
const updateProjectSwagger = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)('project'), (0, swagger_1.ApiOperation)({ summary: 'Update a project' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiHeader)({
        name: 'token',
        description: 'JWT token for authentication',
        required: false,
    }), (0, swagger_1.ApiHeader)({
        name: 'tenant_code',
        description: 'Code of the tenant',
        required: true,
    }), (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'ID of the project to update',
        type: 'string',
    }), (0, swagger_1.ApiConsumes)('multipart/form-data'), (0, swagger_1.ApiBody)({
        type: project_dto_1.UpdateProjectDto,
        description: 'Data to update the project',
    }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input data' }), (0, swagger_1.ApiNotFoundResponse)({ description: 'project not found' }));
};
exports.updateProjectSwagger = updateProjectSwagger;
const deleteProjectSwagger = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)('project'), (0, swagger_1.ApiOperation)({ summary: 'Delete a project' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiHeader)({
        name: 'token',
        description: 'JWT token for authentication',
        required: false,
    }), (0, swagger_1.ApiHeader)({
        name: 'tenant_code',
        description: 'Code of the tenant',
        required: true,
    }), (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'ID of the project to delete',
        type: 'string',
    }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input data' }), (0, swagger_1.ApiNotFoundResponse)({ description: 'project not found' }));
};
exports.deleteProjectSwagger = deleteProjectSwagger;
//# sourceMappingURL=project.swagger.js.map