"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTenantSwagger = exports.updateTenantSwagger = exports.getTenantByIdSwagger = exports.getAllTenantsSwagger = exports.createRegisterSwagger = exports.createTenantSwagger = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const tenant_dto_1 = require("./tenant.dto");
const createTenantSwagger = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)('tenant'), (0, swagger_1.ApiOperation)({ summary: 'Create a new tenant' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiHeader)({
        name: 'token',
        description: 'JWT token for authentication',
        required: false,
    }), (0, swagger_1.ApiBody)({
        type: tenant_dto_1.CreateTenantDto,
        description: 'Tenant data to create a new tenant',
    }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input data' }));
};
exports.createTenantSwagger = createTenantSwagger;
const createRegisterSwagger = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)('tenant'), (0, swagger_1.ApiOperation)({ summary: 'Create a new tenant' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiHeader)({
        name: 'token',
        description: 'JWT token for authentication',
        required: false,
    }), (0, swagger_1.ApiBody)({
        type: tenant_dto_1.CreateRegisteredDto,
        description: 'Tenant data to create a new tenant',
    }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input data' }));
};
exports.createRegisterSwagger = createRegisterSwagger;
const getAllTenantsSwagger = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)('tenant'), (0, swagger_1.ApiOperation)({ summary: 'Get all tenants' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiHeader)({
        name: 'token',
        description: 'JWT token for authentication',
        required: false,
    }));
};
exports.getAllTenantsSwagger = getAllTenantsSwagger;
const getTenantByIdSwagger = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)('tenant'), (0, swagger_1.ApiOperation)({ summary: 'Get tenant by ID' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiHeader)({
        name: 'token',
        description: 'JWT token for authentication',
        required: false,
    }), (0, swagger_1.ApiQuery)({
        name: 'id',
        description: 'ID of the tenant',
        required: true,
    }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input data' }));
};
exports.getTenantByIdSwagger = getTenantByIdSwagger;
const updateTenantSwagger = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)('tenant'), (0, swagger_1.ApiOperation)({ summary: 'Update tenant' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiHeader)({
        name: 'token',
        description: 'JWT token for authentication',
        required: false,
    }), (0, swagger_1.ApiBody)({
        type: tenant_dto_1.UpdateTenantDto,
        description: 'Tenant data to update',
    }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input data' }));
};
exports.updateTenantSwagger = updateTenantSwagger;
const deleteTenantSwagger = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)('tenant'), (0, swagger_1.ApiOperation)({ summary: 'Delete tenant' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiHeader)({
        name: 'token',
        description: 'JWT token for authentication',
        required: false,
    }), (0, swagger_1.ApiBody)({
        type: tenant_dto_1.DeleteTenantDto,
        description: 'Tenant data to delete',
    }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input data' }));
};
exports.deleteTenantSwagger = deleteTenantSwagger;
//# sourceMappingURL=tenant.swagger.js.map