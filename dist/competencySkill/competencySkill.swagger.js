"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSkillsByCompetencySwagger = exports.getSkillsByLevelSwagger = exports.getSkillsBySkillNameSwagger = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const competencySKill_dto_1 = require("./competencySKill.dto");
const getSkillsBySkillNameSwagger = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)('competencySkills'), (0, swagger_1.ApiOperation)({
        summary: 'Check if employee is available of following skill',
    }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiHeader)({
        name: 'token',
        description: 'JWT token for authentication',
        required: false,
    }), (0, swagger_1.ApiHeader)({
        name: 'tenant_code',
        description: 'Code of the tenant',
        required: true,
    }), (0, swagger_1.ApiParam)({
        name: 'skill_name',
        description: 'Employee of skill_name has to retrieve',
        type: 'string',
    }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input data' }));
};
exports.getSkillsBySkillNameSwagger = getSkillsBySkillNameSwagger;
const getSkillsByLevelSwagger = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)('competencySkills'), (0, swagger_1.ApiOperation)({
        summary: 'Check if employee is available of following skill',
    }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiHeader)({
        name: 'token',
        description: 'JWT token for authentication',
        required: false,
    }), (0, swagger_1.ApiHeader)({
        name: 'tenant_code',
        description: 'Code of the tenant',
        required: true,
    }), (0, swagger_1.ApiParam)({
        name: 'level',
        description: 'Employee of level has to retrieve',
        type: 'string',
    }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input data' }));
};
exports.getSkillsByLevelSwagger = getSkillsByLevelSwagger;
const getSkillsByCompetencySwagger = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)('competencySkills'), (0, swagger_1.ApiOperation)({
        summary: 'Check if skills is available of following skill',
    }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiHeader)({
        name: 'token',
        description: 'JWT token for authentication',
        required: false,
    }), (0, swagger_1.ApiHeader)({
        name: 'tenant_code',
        description: 'Code of the tenant',
        required: true,
    }), (0, swagger_1.ApiBody)({
        type: competencySKill_dto_1.EmployeeByStudioDto,
        description: 'Data required to create a new employeeSkill',
    }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input data' }));
};
exports.getSkillsByCompetencySwagger = getSkillsByCompetencySwagger;
//# sourceMappingURL=competencySkill.swagger.js.map