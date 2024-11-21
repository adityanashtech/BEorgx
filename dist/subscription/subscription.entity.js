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
exports.Subscription = void 0;
const typeorm_1 = require("typeorm");
let Subscription = class Subscription {
};
exports.Subscription = Subscription;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Subscription.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'planName' }),
    __metadata("design:type", String)
], Subscription.prototype, "planName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'numberOfEmployees' }),
    __metadata("design:type", Number)
], Subscription.prototype, "numberOfEmployees", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'planDuration', type: 'float' }),
    __metadata("design:type", Number)
], Subscription.prototype, "planDuration", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'planDescription' }),
    __metadata("design:type", String)
], Subscription.prototype, "planDescription", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'price', type: 'float' }),
    __metadata("design:type", Number)
], Subscription.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'status' }),
    __metadata("design:type", String)
], Subscription.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Subscription.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Subscription.prototype, "updated_at", void 0);
exports.Subscription = Subscription = __decorate([
    (0, typeorm_1.Entity)('subscription')
], Subscription);
exports.default = Subscription;
//# sourceMappingURL=subscription.entity.js.map