import { SubscriptionService } from './subscription.service';
import { CreatePlanDto, UpdateSubscriptionDto, SubscriptionNameDto } from './subscription.dto';
export declare class SubscriptionController {
    private readonly subscriptionService;
    constructor(subscriptionService: SubscriptionService);
    createSubscription(createPlanDto: CreatePlanDto): Promise<{
        message: string;
        data?: any;
    }>;
    getSubscriptions(): Promise<{
        message: string;
        data?: any;
    }>;
    subscriptionName(subscriptionNameDto: SubscriptionNameDto): Promise<{
        message: string;
        data?: any;
    }>;
    getSubscriptionById(id: number): Promise<{
        message: string;
        data?: any;
    }>;
    updateSubscription(id: number, updateData: UpdateSubscriptionDto): Promise<{
        message: string;
        data?: any;
    }>;
    deleteSubscription(id: number): Promise<{
        message: string;
    }>;
}
