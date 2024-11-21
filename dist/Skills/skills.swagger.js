"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllSkillsSwagger = exports.getSkillByIdSwagger = exports.skillNameSwagger = exports.createSkillSwagger = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const skills_dto_1 = require("./skills.dto");
const createSkillSwagger = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)('skill'), (0, swagger_1.ApiOperation)({ summary: 'Create a new skill' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiHeader)({
        name: 'token',
        description: 'JWT token for authentication',
        required: false,
    }), (0, swagger_1.ApiHeader)({
        name: 'tenant_code',
        description: 'Code of the tenant',
        required: true,
    }), (0, swagger_1.ApiBody)({
        type: skills_dto_1.CreateSkillDto,
        description: 'Data required to create a new skill',
    }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input data' }));
};
exports.createSkillSwagger = createSkillSwagger;
const skillNameSwagger = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)('skill'), (0, swagger_1.ApiOperation)({ summary: 'Check if skill name is available' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiHeader)({
        name: 'token',
        description: 'JWT token for authentication',
        required: false,
    }), (0, swagger_1.ApiHeader)({
        name: 'tenant_code',
        description: 'Code of the tenant',
        required: true,
    }), (0, swagger_1.ApiBody)({
        type: skills_dto_1.SkillNameDto,
        description: 'Competency skill to check availability',
    }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input data' }));
};
exports.skillNameSwagger = skillNameSwagger;
const getSkillByIdSwagger = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)('skill'), (0, swagger_1.ApiOperation)({ summary: 'Get a skill by ID' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiHeader)({
        name: 'token',
        description: 'JWT token for authentication',
        required: false,
    }), (0, swagger_1.ApiHeader)({
        name: 'tenant_code',
        description: 'Code of the tenant',
        required: true,
    }), (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'ID of the skill to retrieve',
        type: 'string',
    }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input data' }), (0, swagger_1.ApiNotFoundResponse)({ description: 'skill not found' }));
};
exports.getSkillByIdSwagger = getSkillByIdSwagger;
const getAllSkillsSwagger = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)('skill'), (0, swagger_1.ApiOperation)({ summary: 'Get all skills' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiHeader)({
        name: 'token',
        description: 'JWT token for authentication',
        required: false,
    }), (0, swagger_1.ApiHeader)({
        name: 'tenant_code',
        description: 'Code of the tenant',
        required: true,
    }));
};
exports.getAllSkillsSwagger = getAllSkillsSwagger;
//# sourceMappingURL=skills.swagger.js.map