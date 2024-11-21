"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.practiceNameSwagger = exports.deletePracticeSwagger = exports.updatePracticeSwagger = exports.getPracticeByIdSwagger = exports.getPracticeSwagger = exports.createPracticeSwagger = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const createPracticeSwagger = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)('practice'), (0, swagger_1.ApiOperation)({ summary: 'Create a new practice' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiHeader)({
        name: 'token',
        description: 'JWT token for authentication',
        required: false,
    }), (0, swagger_1.ApiHeader)({
        name: 'tenant_code',
        description: 'Code of the tenant',
        required: true,
    }), (0, swagger_1.ApiBody)({
        schema: {
            properties: {
                title: { type: 'string', description: 'Title of the practice' },
                description: {
                    type: 'string',
                    description: 'Description of the practice',
                },
                total_employee: {
                    type: 'number',
                    description: 'Total employees in the practice',
                },
                studio_head: {
                    type: 'string',
                    description: 'Studio head of the practice',
                },
                status: { type: 'string', description: 'Status of the practice' },
                location: {
                    type: 'string',
                    description: 'Image URL of the practice',
                },
            },
            required: [
                'title',
                'description',
                'total_employee',
                'studio_head',
                'status',
                'image',
            ],
        },
    }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input data' }));
};
exports.createPracticeSwagger = createPracticeSwagger;
const getPracticeSwagger = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)('practice'), (0, swagger_1.ApiOperation)({ summary: 'Get all practices' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiHeader)({
        name: 'token',
        description: 'JWT token for authentication',
        required: false,
    }), (0, swagger_1.ApiHeader)({
        name: 'tenant_code',
        description: 'Code of the tenant',
        required: true,
    }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input data' }));
};
exports.getPracticeSwagger = getPracticeSwagger;
const getPracticeByIdSwagger = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)('practice'), (0, swagger_1.ApiOperation)({ summary: 'Get practice by ID' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiHeader)({
        name: 'token',
        description: 'JWT token for authentication',
        required: false,
    }), (0, swagger_1.ApiHeader)({
        name: 'tenant_code',
        description: 'Code of the tenant',
        required: true,
    }), (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'ID of the practice',
        required: true,
    }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input data' }));
};
exports.getPracticeByIdSwagger = getPracticeByIdSwagger;
const updatePracticeSwagger = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)('practice'), (0, swagger_1.ApiOperation)({ summary: 'Update a practice' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiHeader)({
        name: 'token',
        description: 'JWT token for authentication',
        required: false,
    }), (0, swagger_1.ApiHeader)({
        name: 'tenant_code',
        description: 'Code of the tenant',
        required: true,
    }), (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'ID of the practice to update',
        required: true,
    }), (0, swagger_1.ApiBody)({
        schema: {
            properties: {
                title: { type: 'string', description: 'Title of the practice' },
                description: {
                    type: 'string',
                    description: 'Description of the practice',
                },
                total_employee: {
                    type: 'number',
                    description: 'Total employees in the practice',
                },
                studio_head: {
                    type: 'string',
                    description: 'Studio head of the practice',
                },
                status: { type: 'string', description: 'Status of the practice' },
                image: { type: 'string', description: 'Image URL of the practice' },
                location: {
                    type: 'string',
                    description: 'location URL of the practice',
                },
            },
            required: [
                'title',
                'description',
                'total_employee',
                'studio_head',
                'status',
                'image',
            ],
        },
    }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input data' }));
};
exports.updatePracticeSwagger = updatePracticeSwagger;
const deletePracticeSwagger = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)('practice'), (0, swagger_1.ApiOperation)({ summary: 'Delete a practice' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiHeader)({
        name: 'token',
        description: 'JWT token for authentication',
        required: false,
    }), (0, swagger_1.ApiHeader)({
        name: 'tenant_code',
        description: 'Code of the tenant',
        required: true,
    }), (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'ID of the practice to delete',
        required: true,
    }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input data' }));
};
exports.deletePracticeSwagger = deletePracticeSwagger;
const practiceNameSwagger = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)('practice'), (0, swagger_1.ApiOperation)({ summary: 'Get practice by name' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiHeader)({
        name: 'token',
        description: 'JWT token for authentication',
        required: false,
    }), (0, swagger_1.ApiHeader)({
        name: 'tenant_code',
        description: 'Code of the tenant',
        required: true,
    }), (0, swagger_1.ApiBody)({
        schema: {
            properties: {
                title: { type: 'string', description: 'Title of the practice' },
            },
            required: ['title'],
        },
    }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input data' }));
};
exports.practiceNameSwagger = practiceNameSwagger;
//# sourceMappingURL=paractice.swagger.js.map