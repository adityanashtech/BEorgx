"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const subscription_controller_1 = require("./subscription.controller");
const subscription_service_1 = require("./subscription.service");
const tenant_entity_1 = require("../tenant/tenant.entity");
const subscription_entity_1 = require("./subscription.entity");
const subscriptionQueries_service_1 = require("./subscriptionQueries.service");
const accessQueries_service_1 = require("../accesslabels/accessQueries.service");
const access_service_1 = require("../accesslabels/access.service");
const login_module_1 = require("../login/login.module");
let SubscriptionModule = class SubscriptionModule {
};
exports.SubscriptionModule = SubscriptionModule;
exports.SubscriptionModule = SubscriptionModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([tenant_entity_1.Tenant, subscription_entity_1.Subscription]),
            login_module_1.LoginModule
        ],
        controllers: [subscription_controller_1.SubscriptionController],
        providers: [subscription_service_1.SubscriptionService, subscriptionQueries_service_1.SubscriptionQueriesService, accessQueries_service_1.accessLabelQueriesService, access_service_1.accessLabelService],
    })
], SubscriptionModule);
//# sourceMappingURL=subscription.module.js.map