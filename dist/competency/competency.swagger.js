"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCompetencySwagger = exports.updateCompetencySwagger = exports.getCompetencyByIdSwagger = exports.getAllCompetenciesSwagger = exports.competencyNameSwagger = exports.createCompetencySwagger = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const competency_dto_1 = require("./competency.dto");
const createCompetencySwagger = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)('competency'), (0, swagger_1.ApiOperation)({ summary: 'Create a new competency' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiHeader)({
        name: 'token',
        description: 'JWT token for authentication',
        required: false,
    }), (0, swagger_1.ApiHeader)({
        name: 'tenant_code',
        description: 'Code of the tenant',
        required: true,
    }), (0, swagger_1.ApiBody)({
        type: competency_dto_1.CreateCompetencyDto,
        description: 'Data required to create a new competency',
    }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input data' }));
};
exports.createCompetencySwagger = createCompetencySwagger;
const competencyNameSwagger = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)('competency'), (0, swagger_1.ApiOperation)({ summary: 'Check if competency name is available' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiHeader)({
        name: 'token',
        description: 'JWT token for authentication',
        required: false,
    }), (0, swagger_1.ApiHeader)({
        name: 'tenant_code',
        description: 'Code of the tenant',
        required: true,
    }), (0, swagger_1.ApiBody)({
        type: competency_dto_1.CompetencyNameDto,
        description: 'Competency name to check availability',
    }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input data' }));
};
exports.competencyNameSwagger = competencyNameSwagger;
const getAllCompetenciesSwagger = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)('competency'), (0, swagger_1.ApiOperation)({ summary: 'Get all competencies' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiHeader)({
        name: 'token',
        description: 'JWT token for authentication',
        required: false,
    }), (0, swagger_1.ApiHeader)({
        name: 'tenant_code',
        description: 'Code of the tenant',
        required: true,
    }));
};
exports.getAllCompetenciesSwagger = getAllCompetenciesSwagger;
const getCompetencyByIdSwagger = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)('competency'), (0, swagger_1.ApiOperation)({ summary: 'Get a competency by ID' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiHeader)({
        name: 'token',
        description: 'JWT token for authentication',
        required: false,
    }), (0, swagger_1.ApiHeader)({
        name: 'tenant_code',
        description: 'Code of the tenant',
        required: true,
    }), (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'ID of the competency to retrieve',
        type: 'string',
    }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input data' }), (0, swagger_1.ApiNotFoundResponse)({ description: 'Competency not found' }));
};
exports.getCompetencyByIdSwagger = getCompetencyByIdSwagger;
const updateCompetencySwagger = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)('competency'), (0, swagger_1.ApiOperation)({ summary: 'Update a competency' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiHeader)({
        name: 'token',
        description: 'JWT token for authentication',
        required: false,
    }), (0, swagger_1.ApiHeader)({
        name: 'tenant_code',
        description: 'Code of the tenant',
        required: true,
    }), (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'ID of the competency to update',
        type: 'string',
    }), (0, swagger_1.ApiBody)({
        type: competency_dto_1.UpdateCompetencyDto,
        description: 'Data to update the competency',
    }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input data' }), (0, swagger_1.ApiNotFoundResponse)({ description: 'Competency not found' }));
};
exports.updateCompetencySwagger = updateCompetencySwagger;
const deleteCompetencySwagger = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)('competency'), (0, swagger_1.ApiOperation)({ summary: 'Delete a competency' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiHeader)({
        name: 'token',
        description: 'JWT token for authentication',
        required: false,
    }), (0, swagger_1.ApiHeader)({
        name: 'tenant_code',
        description: 'Code of the tenant',
        required: true,
    }), (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'ID of the competency to delete',
        type: 'string',
    }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input data' }), (0, swagger_1.ApiNotFoundResponse)({ description: 'Competency not found' }));
};
exports.deleteCompetencySwagger = deleteCompetencySwagger;
//# sourceMappingURL=competency.swagger.js.map