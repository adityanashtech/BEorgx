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
exports.LoginBodys = void 0;
const swagger_1 = require("@nestjs/swagger");
class LoginBodys {
}
exports.LoginBodys = LoginBodys;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'test112@gmail.com',
        description: 'Email of the user',
    }),
    __metadata("design:type", String)
], LoginBodys.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'password123', description: 'Password of the user' }),
    __metadata("design:type", String)
], LoginBodys.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'employee', description: 'Role of the user' }),
    __metadata("design:type", String)
], LoginBodys.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '8756', description: 'Tenant code' }),
    __metadata("design:type", String)
], LoginBodys.prototype, "tenant_code", void 0);
//# sourceMappingURL=login.dto.js.map