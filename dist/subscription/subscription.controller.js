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
exports.SubscriptionController = void 0;
const common_1 = require("@nestjs/common");
const subscription_service_1 = require("./subscription.service");
const subscription_swagger_1 = require("./subscription.swagger");
const subscription_dto_1 = require("./subscription.dto");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../login/guards/jwt-auth.guard");
const auth_guard_1 = require("../login/guards/auth.guard");
const roles_decorator_1 = require("../login/decorators/roles.decorator");
let SubscriptionController = class SubscriptionController {
    constructor(subscriptionService) {
        this.subscriptionService = subscriptionService;
    }
    async createSubscription(createPlanDto) {
        const createPlan = (0, class_transformer_1.plainToClass)(subscription_dto_1.CreatePlanDto, createPlanDto);
        const errors = await (0, class_validator_1.validate)(createPlan);
        if (errors.length > 0) {
            const errorMessage = Object.values(errors[0].constraints).join(', ');
            throw new common_1.BadRequestException({ message: errorMessage });
        }
        return await this.subscriptionService.createSubscription(createPlanDto);
    }
    async getSubscriptions() {
        return await this.subscriptionService.getSubscriptions();
    }
    async subscriptionName(subscriptionNameDto) {
        const subscriptionName = (0, class_transformer_1.plainToClass)(subscription_dto_1.SubscriptionNameDto, subscriptionNameDto);
        const errors = await (0, class_validator_1.validate)(subscriptionName);
        if (errors.length > 0) {
            const errorMessage = Object.values(errors[0].constraints).join(', ');
            throw new common_1.BadRequestException({ message: errorMessage });
        }
        return await this.subscriptionService.subscriptionName(subscriptionNameDto.planName);
    }
    async getSubscriptionById(id) {
        const getSubscriptionById = (0, class_transformer_1.plainToClass)(subscription_dto_1.GetSubscriptionByIdDto, subscription_dto_1.GetSubscriptionByIdDto);
        const errors = await (0, class_validator_1.validate)(getSubscriptionById);
        if (errors.length > 0) {
            const errorMessage = Object.values(errors[0].constraints).join(', ');
            throw new common_1.BadRequestException({ message: errorMessage });
        }
        return await this.subscriptionService.getSubscriptionById(id);
    }
    async updateSubscription(id, updateData) {
        const updateSubscription = (0, class_transformer_1.plainToClass)(subscription_dto_1.UpdateSubscriptionDto, updateData);
        const errors = await (0, class_validator_1.validate)(updateSubscription);
        if (errors.length > 0) {
            const errorMessage = Object.values(errors[0].constraints).join(', ');
            throw new common_1.BadRequestException({ message: errorMessage });
        }
        return await this.subscriptionService.updateSubscription(id, updateData);
    }
    async deleteSubscription(id) {
        const deleteSubscription = (0, class_transformer_1.plainToClass)(subscription_dto_1.DeleteSubscriptionDto, { id });
        const errors = await (0, class_validator_1.validate)(deleteSubscription);
        if (errors.length > 0) {
            const errorMessage = Object.values(errors[0].constraints).join(', ');
            throw new common_1.BadRequestException({ message: errorMessage });
        }
        return await this.subscriptionService.deleteSubscription(id);
    }
};
exports.SubscriptionController = SubscriptionController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, auth_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('super admin', 'admin'),
    (0, common_1.Post)(),
    (0, subscription_swagger_1.createSubscriptionSwagger)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [subscription_dto_1.CreatePlanDto]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "createSubscription", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, auth_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('super admin', 'admin'),
    (0, common_1.Get)(),
    (0, subscription_swagger_1.getSubscriptionSwagger)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "getSubscriptions", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, auth_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('super admin', 'admin'),
    (0, common_1.Post)('planName'),
    (0, subscription_swagger_1.subscriptionNameSwagger)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [subscription_dto_1.SubscriptionNameDto]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "subscriptionName", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, auth_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('super admin', 'admin'),
    (0, common_1.Get)(':id'),
    (0, subscription_swagger_1.subscriptionByIdSwagger)(),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "getSubscriptionById", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, auth_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('super admin', 'admin'),
    (0, common_1.Put)(':id'),
    (0, subscription_swagger_1.updateSubscriptionSwagger)(),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, subscription_dto_1.UpdateSubscriptionDto]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "updateSubscription", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, auth_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('super admin', 'admin'),
    (0, common_1.Delete)(':id'),
    (0, subscription_swagger_1.deleteSubscriptionSwagger)(),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "deleteSubscription", null);
exports.SubscriptionController = SubscriptionController = __decorate([
    (0, common_1.Controller)('subscription'),
    (0, swagger_1.ApiTags)('subscription'),
    __metadata("design:paramtypes", [subscription_service_1.SubscriptionService])
], SubscriptionController);
//# sourceMappingURL=subscription.controller.js.map