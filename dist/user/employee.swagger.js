"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterUsersByLocationSwagger = exports.deleteUserSwagger = exports.updateReportingSwagger = exports.updateUserSwagger = exports.getUserByIdSwagger = exports.getAllDesignationsSwagger = exports.getAllUsersSwagger = exports.checkUsersByEmailSwagger = exports.filterUsersByNameSwagger = exports.createUserSwagger = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_dto_1 = require("./user.dto");
const createUserSwagger = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)('employee'), (0, swagger_1.ApiOperation)({ summary: 'Create a new user' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiHeader)({
        name: 'token',
        description: 'JWT token for authentication',
        required: false,
    }), (0, swagger_1.ApiHeader)({
        name: 'tenant_code',
        description: 'Code of the tenant',
        required: true,
    }), (0, swagger_1.ApiBody)({
        type: user_dto_1.CreateUserDto,
        description: 'User data to create a new user',
    }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input data' }));
};
exports.createUserSwagger = createUserSwagger;
const filterUsersByNameSwagger = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)('employee'), (0, swagger_1.ApiOperation)({ summary: 'Filter users by name' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiHeader)({
        name: 'token',
        description: 'JWT token for authentication',
        required: false,
    }), (0, swagger_1.ApiHeader)({
        name: 'tenant_code',
        description: 'Code of the tenant',
        required: true,
    }), (0, swagger_1.ApiQuery)({
        name: 'name',
        description: 'Name of the user to filter by',
        required: true,
    }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input data' }));
};
exports.filterUsersByNameSwagger = filterUsersByNameSwagger;
const checkUsersByEmailSwagger = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)('employee'), (0, swagger_1.ApiOperation)({ summary: 'Filter users by email' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiHeader)({
        name: 'token',
        description: 'JWT token for authentication',
        required: false,
    }), (0, swagger_1.ApiHeader)({
        name: 'tenant_code',
        description: 'Code of the tenant',
        required: true,
    }), (0, swagger_1.ApiQuery)({
        name: 'email',
        description: 'email of the user to filter by',
        required: true,
    }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input data' }));
};
exports.checkUsersByEmailSwagger = checkUsersByEmailSwagger;
const getAllUsersSwagger = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)('employee'), (0, swagger_1.ApiOperation)({ summary: 'Get all users' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiHeader)({
        name: 'token',
        description: 'JWT token for authentication',
        required: false,
    }), (0, swagger_1.ApiHeader)({
        name: 'tenant_code',
        description: 'Code of the tenant',
        required: true,
    }));
};
exports.getAllUsersSwagger = getAllUsersSwagger;
const getAllDesignationsSwagger = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)('employee'), (0, swagger_1.ApiOperation)({ summary: 'Get all designations' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiHeader)({
        name: 'token',
        description: 'JWT token for authentication',
        required: false,
    }), (0, swagger_1.ApiHeader)({
        name: 'tenant_code',
        description: 'Code of the tenant',
        required: true,
    }));
};
exports.getAllDesignationsSwagger = getAllDesignationsSwagger;
const getUserByIdSwagger = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)('employee'), (0, swagger_1.ApiOperation)({ summary: 'Get user by ID' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiHeader)({
        name: 'token',
        description: 'JWT token for authentication',
        required: false,
    }), (0, swagger_1.ApiHeader)({
        name: 'tenant_code',
        description: 'Code of the tenant',
        required: true,
    }), (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'ID of the user',
        required: true,
    }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input data' }));
};
exports.getUserByIdSwagger = getUserByIdSwagger;
const updateUserSwagger = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)('employee'), (0, swagger_1.ApiOperation)({ summary: 'Update user' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiHeader)({
        name: 'token',
        description: 'JWT token for authentication',
        required: false,
    }), (0, swagger_1.ApiHeader)({
        name: 'tenant_code',
        description: 'Code of the tenant',
        required: true,
    }), (0, swagger_1.ApiBody)({
        type: user_dto_1.UpdateUserDto,
        description: 'User data to update',
    }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input data' }));
};
exports.updateUserSwagger = updateUserSwagger;
const updateReportingSwagger = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)('employee'), (0, swagger_1.ApiOperation)({ summary: 'Update user' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiHeader)({
        name: 'token',
        description: 'JWT token for authentication',
        required: false,
    }), (0, swagger_1.ApiHeader)({
        name: 'tenant_code',
        description: 'Code of the tenant',
        required: true,
    }), (0, swagger_1.ApiBody)({
        type: user_dto_1.updateReportingDto,
        description: 'User data to update',
    }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input data' }));
};
exports.updateReportingSwagger = updateReportingSwagger;
const deleteUserSwagger = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)('employee'), (0, swagger_1.ApiOperation)({ summary: 'Delete user' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiHeader)({
        name: 'token',
        description: 'JWT token for authentication',
        required: false,
    }), (0, swagger_1.ApiHeader)({
        name: 'tenant_code',
        description: 'Code of the tenant',
        required: true,
    }), (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'ID of the user',
        required: true,
    }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input data' }));
};
exports.deleteUserSwagger = deleteUserSwagger;
const filterUsersByLocationSwagger = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)('employee'), (0, swagger_1.ApiOperation)({ summary: 'Filter users by location' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiHeader)({
        name: 'token',
        description: 'JWT token for authentication',
        required: false,
    }), (0, swagger_1.ApiHeader)({
        name: 'tenant_code',
        description: 'Code of the tenant',
        required: true,
    }), (0, swagger_1.ApiQuery)({
        name: 'location',
        description: 'Location to filter users by',
        required: true,
    }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input data' }));
};
exports.filterUsersByLocationSwagger = filterUsersByLocationSwagger;
//# sourceMappingURL=employee.swagger.js.map