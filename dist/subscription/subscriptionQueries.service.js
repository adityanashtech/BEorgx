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
exports.SubscriptionQueriesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const subscription_entity_1 = require("./subscription.entity");
const typeorm_2 = require("typeorm");
let SubscriptionQueriesService = class SubscriptionQueriesService {
    constructor(subscriptionRepository) {
        this.subscriptionRepository = subscriptionRepository;
    }
    async createSubscription(userData) {
        const query = `INSERT INTO public.subscription ("planName", "numberOfEmployees", "planDuration", "planDescription", "price", "status")
        VALUES ($1, $2, $3, $4, $5, $6)`;
        await this.subscriptionRepository.query(query, [
            userData.planName,
            userData.numberOfEmployees,
            userData.planDuration,
            userData.planDescription,
            userData.price,
            userData.status,
        ]);
        const subscriptionData = await this.subscriptionRepository.query(`
                SELECT * FROM public.subscription
                WHERE "planName" = $1
            `, [userData.planName]);
        return subscriptionData;
    }
    async subscriptionName(planName) {
        const subscription = await this.subscriptionRepository.findOne({
            where: { planName },
        });
        return subscription;
    }
    async getSubscriptionById(id) {
        const subscription = await this.subscriptionRepository.findOne({
            where: { id },
        });
        return subscription;
    }
    async getSubscriptions() {
        const result = await this.subscriptionRepository.find();
        return result;
    }
    async updateSubscription(id, updateData) {
        const query = `
          UPDATE public.subscription
          SET "planName" = $1, "numberOfEmployees" = $2, "planDuration" = $3, "planDescription" = $4, "price" = $5, "status" = $6, "updated_at" = CURRENT_TIMESTAMP
          WHERE id = $7
        `;
        await this.subscriptionRepository.query(query, [
            updateData.planName,
            updateData.numberOfEmployees,
            updateData.planDuration,
            updateData.planDescription,
            updateData.price,
            updateData.status,
            id,
        ]);
        const updatedSubscription = await this.subscriptionRepository.findOne({
            where: { id },
        });
        return updatedSubscription;
    }
    async deleteSubscription(id) {
        const query = `
      DELETE FROM public.subscription
      WHERE id = $1
    `;
        await this.subscriptionRepository.query(query, [id]);
        return { message: 'Subscription deleted successfully.' };
    }
};
exports.SubscriptionQueriesService = SubscriptionQueriesService;
exports.SubscriptionQueriesService = SubscriptionQueriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(subscription_entity_1.Subscription)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SubscriptionQueriesService);
//# sourceMappingURL=subscriptionQueries.service.js.map