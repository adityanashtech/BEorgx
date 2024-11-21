"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSubscriptionSwagger = exports.updateSubscriptionSwagger = exports.subscriptionNameSwagger = exports.subscriptionByIdSwagger = exports.getSubscriptionSwagger = exports.createSubscriptionSwagger = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const createSubscriptionSwagger = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)('subscription'), (0, swagger_1.ApiOperation)({ summary: 'Create a new subscription' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiHeader)({
        name: 'token',
        description: 'JWT token for authentication',
        required: false,
    }), (0, swagger_1.ApiBody)({
        schema: {
            properties: {
                planName: {
                    type: 'string',
                    description: 'Name of the plan',
                    example: 'Basic Plan',
                },
                numberOfEmployees: {
                    type: 'number',
                    description: 'Number of employees included in the plan',
                    example: 50,
                },
                planDuration: {
                    type: 'number',
                    description: 'Duration of the plan in months',
                    example: 12,
                },
                planDescription: {
                    type: 'string',
                    description: 'Description of the plan',
                    example: 'This plan includes basic features for up to 50 employees.',
                },
                price: {
                    type: 'number',
                    description: 'Price of the plan',
                    example: 199.99,
                },
                status: {
                    type: 'string',
                    description: 'Status of the plan',
                    example: 'active',
                },
            },
            required: [
                'planName',
                'numberOfEmployees',
                'planDuration',
                'price',
                'status',
            ],
        },
    }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input data' }));
};
exports.createSubscriptionSwagger = createSubscriptionSwagger;
const getSubscriptionSwagger = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)('subscription'), (0, swagger_1.ApiOperation)({ summary: 'Get all subscription' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiHeader)({
        name: 'token',
        description: 'JWT token for authentication',
        required: false,
    }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input data' }));
};
exports.getSubscriptionSwagger = getSubscriptionSwagger;
const subscriptionByIdSwagger = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)('subscription'), (0, swagger_1.ApiOperation)({ summary: 'Get subscription by ID' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiHeader)({
        name: 'token',
        description: 'JWT token for authentication',
        required: false,
    }), (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'ID of the subscription',
        required: true,
    }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input data' }));
};
exports.subscriptionByIdSwagger = subscriptionByIdSwagger;
const subscriptionNameSwagger = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)('subscription'), (0, swagger_1.ApiOperation)({ summary: 'Get all subscription' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiHeader)({
        name: 'token',
        description: 'JWT token for authentication',
        required: false,
    }), (0, swagger_1.ApiBody)({
        schema: {
            properties: {
                planName: { type: 'string' },
            },
            required: ['planName'],
        },
    }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input data' }));
};
exports.subscriptionNameSwagger = subscriptionNameSwagger;
const updateSubscriptionSwagger = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)('subscription'), (0, swagger_1.ApiOperation)({ summary: 'Update a subscription' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiHeader)({
        name: 'token',
        description: 'JWT token for authentication',
        required: false,
    }), (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'ID of the subscription to update',
        required: true,
    }), (0, swagger_1.ApiBody)({
        schema: {
            properties: {
                planName: {
                    type: 'string',
                    description: 'Name of the plan',
                    example: 'Basic Plan',
                },
                numberOfEmployees: {
                    type: 'number',
                    description: 'Number of employees included in the plan',
                    example: 50,
                },
                planDuration: {
                    type: 'number',
                    description: 'Duration of the plan in months',
                    example: 12,
                },
                planDescription: {
                    type: 'string',
                    description: 'Description of the plan',
                    example: 'This plan includes basic features for up to 50 employees.',
                },
                price: {
                    type: 'number',
                    description: 'Price of the plan',
                    example: 199.99,
                },
                status: {
                    type: 'string',
                    description: 'Status of the plan',
                    example: 'active',
                },
            },
            required: [
                'planName',
                'numberOfEmployees',
                'planDuration',
                'price',
                'status',
            ],
        },
    }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input data' }));
};
exports.updateSubscriptionSwagger = updateSubscriptionSwagger;
const deleteSubscriptionSwagger = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)('subscription'), (0, swagger_1.ApiOperation)({ summary: 'Delete a subscription' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiHeader)({
        name: 'token',
        description: 'JWT token for authentication',
        required: false,
    }), (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'ID of the subscription to delete',
        required: true,
    }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input data' }));
};
exports.deleteSubscriptionSwagger = deleteSubscriptionSwagger;
//# sourceMappingURL=subscription.swagger.js.map