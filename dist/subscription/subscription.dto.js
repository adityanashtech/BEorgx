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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionNameDto = exports.DeleteSubscriptionDto = exports.UpdateSubscriptionDto = exports.GetSubscriptionByIdDto = exports.CreatePlanDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreatePlanDto {
}
exports.CreatePlanDto = CreatePlanDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Name of the plan',
        example: 'Basic Plan',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePlanDto.prototype, "planName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Number of employees included in the plan',
        example: 50,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreatePlanDto.prototype, "numberOfEmployees", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Duration of the plan in months',
        example: 12,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreatePlanDto.prototype, "planDuration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Description of the plan',
        example: 'This plan includes basic features for up to 50 employees.',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePlanDto.prototype, "planDescription", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Price of the plan',
        example: 199.99,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreatePlanDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Status of the plan',
        example: 'active',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePlanDto.prototype, "status", void 0);
class GetSubscriptionByIdDto {
}
exports.GetSubscriptionByIdDto = GetSubscriptionByIdDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID of the subscription',
        example: 1,
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], GetSubscriptionByIdDto.prototype, "id", void 0);
class UpdateSubscriptionDto {
}
exports.UpdateSubscriptionDto = UpdateSubscriptionDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Name of the plan',
        example: 'Basic Plan',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateSubscriptionDto.prototype, "planName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Number of employees included in the plan',
        example: 50,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], UpdateSubscriptionDto.prototype, "numberOfEmployees", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Duration of the plan in months',
        example: 12,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], UpdateSubscriptionDto.prototype, "planDuration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Description of the plan',
        example: 'This plan includes basic features for up to 50 employees.',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateSubscriptionDto.prototype, "planDescription", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Price of the plan',
        example: 199.99,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], UpdateSubscriptionDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Status of the plan',
        example: 'active',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateSubscriptionDto.prototype, "status", void 0);
class DeleteSubscriptionDto {
}
exports.DeleteSubscriptionDto = DeleteSubscriptionDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID of the subscription',
        example: 1,
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], DeleteSubscriptionDto.prototype, "id", void 0);
class SubscriptionNameDto {
}
exports.SubscriptionNameDto = SubscriptionNameDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Plane Name',
        example: 1,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SubscriptionNameDto.prototype, "planName", void 0);
//# sourceMappingURL=subscription.dto.js.map