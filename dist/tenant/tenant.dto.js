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
exports.DeleteTenantDto = exports.UpdateTenantDto = exports.GetTenantByIdDto = exports.CreateRegisteredDto = exports.CreateTenantDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateTenantDto {
}
exports.CreateTenantDto = CreateTenantDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Name of the tenant' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTenantDto.prototype, "tenant_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email of the tenant' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateTenantDto.prototype, "tenant_email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Password of the tenant',
        minLength: 6,
        pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]+$',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(6),
    (0, class_validator_1.Matches)(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, {
        message: 'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character',
    }),
    __metadata("design:type", String)
], CreateTenantDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Status of the tenant' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTenantDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Role of the tenant', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTenantDto.prototype, "role", void 0);
class CreateRegisteredDto {
}
exports.CreateRegisteredDto = CreateRegisteredDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Name of the tenant' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRegisteredDto.prototype, "tenant_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email of the tenant' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateRegisteredDto.prototype, "tenant_email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Password of the tenant',
        minLength: 6,
        pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]+$',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(6),
    (0, class_validator_1.Matches)(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, {
        message: 'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character',
    }),
    __metadata("design:type", String)
], CreateRegisteredDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Role of the tenant', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRegisteredDto.prototype, "role", void 0);
class GetTenantByIdDto {
}
exports.GetTenantByIdDto = GetTenantByIdDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID of the tenant',
        type: Number,
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetTenantByIdDto.prototype, "id", void 0);
class UpdateTenantDto {
}
exports.UpdateTenantDto = UpdateTenantDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Tenant Name', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateTenantDto.prototype, "tenant_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'tenant@example.com', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UpdateTenantDto.prototype, "tenant_email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'active', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateTenantDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'admin', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateTenantDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1234567890', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateTenantDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'New York', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateTenantDto.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'IT', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateTenantDto.prototype, "company_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'image_url', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateTenantDto.prototype, "image", void 0);
class DeleteTenantDto {
}
exports.DeleteTenantDto = DeleteTenantDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID of the tenant to delete' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], DeleteTenantDto.prototype, "id", void 0);
//# sourceMappingURL=tenant.dto.js.map