"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEmployeeSkillSwagger = exports.getEmployeeSkillByEmployeeIdSwagger = exports.getAllEmployeeSkillsSwagger = exports.checkEmployeeSkillByNameSwagger = exports.createEmployeeSkillSwagger = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const employeeSKill_dto_1 = require("./employeeSKill.dto");
const createEmployeeSkillSwagger = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)('employeeSkill'), (0, swagger_1.ApiOperation)({ summary: 'Create a new employeeSkill' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiHeader)({
        name: 'token',
        description: 'JWT token for authentication',
        required: false,
    }), (0, swagger_1.ApiHeader)({
        name: 'tenant_code',
        description: 'Code of the tenant',
        required: true,
    }), (0, swagger_1.ApiBody)({
        type: employeeSKill_dto_1.CreateEmployeeSkillDto,
        description: 'Data required to create a new employeeSkill',
    }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input data' }));
};
exports.createEmployeeSkillSwagger = createEmployeeSkillSwagger;
const checkEmployeeSkillByNameSwagger = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)('employeeSkill'), (0, swagger_1.ApiOperation)({ summary: 'Check if employeeSkill name is available' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiHeader)({
        name: 'token',
        description: 'JWT token for authentication',
        required: false,
    }), (0, swagger_1.ApiHeader)({
        name: 'tenant_code',
        description: 'Code of the tenant',
        required: true,
    }), (0, swagger_1.ApiBody)({
        type: employeeSKill_dto_1.EmployeeSkillNameDto,
        description: 'employeeSkill name to check availability',
    }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input data' }));
};
exports.checkEmployeeSkillByNameSwagger = checkEmployeeSkillByNameSwagger;
const getAllEmployeeSkillsSwagger = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)('employeeSkill'), (0, swagger_1.ApiOperation)({ summary: 'Get all skills' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiHeader)({
        name: 'token',
        description: 'JWT token for authentication',
        required: false,
    }), (0, swagger_1.ApiHeader)({
        name: 'tenant_code',
        description: 'Code of the tenant',
        required: true,
    }));
};
exports.getAllEmployeeSkillsSwagger = getAllEmployeeSkillsSwagger;
const getEmployeeSkillByEmployeeIdSwagger = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)('employeeSkill'), (0, swagger_1.ApiOperation)({ summary: 'Get a employeeSkill by employee ID' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiHeader)({
        name: 'token',
        description: 'JWT token for authentication',
        required: false,
    }), (0, swagger_1.ApiHeader)({
        name: 'tenant_code',
        description: 'Code of the tenant',
        required: true,
    }), (0, swagger_1.ApiParam)({
        name: 'employee_id',
        description: 'ID of the employee id to retrieve skills',
        type: 'string',
    }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input data' }), (0, swagger_1.ApiNotFoundResponse)({
        description: 'employeeSkill with employee Id not found',
    }));
};
exports.getEmployeeSkillByEmployeeIdSwagger = getEmployeeSkillByEmployeeIdSwagger;
const deleteEmployeeSkillSwagger = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)('employeeSkill'), (0, swagger_1.ApiOperation)({ summary: 'Delete a employeeSkill' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiHeader)({
        name: 'token',
        description: 'JWT token for authentication',
        required: false,
    }), (0, swagger_1.ApiHeader)({
        name: 'tenant_code',
        description: 'Code of the tenant',
        required: true,
    }), (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'ID of the skill to delete',
        type: 'string',
    }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input data' }), (0, swagger_1.ApiNotFoundResponse)({ description: 'employeeSkill not found' }));
};
exports.deleteEmployeeSkillSwagger = deleteEmployeeSkillSwagger;
//# sourceMappingURL=employeeSkill.swagger.js.map