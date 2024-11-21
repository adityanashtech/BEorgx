import { Repository } from 'typeorm';
import { Subscription } from './subscription.entity';
export declare class SubscriptionService {
    private readonly subscriptionRepository;
    constructor(subscriptionRepository: Repository<Subscription>);
    createSubscription(userData: any): Promise<{
        message: string;
        data?: any;
    }>;
    subscriptionName(planName: string): Promise<{
        message: string;
        data?: any;
    }>;
    getSubscriptions(): Promise<{
        message: string;
        data?: any;
    }>;
    getSubscriptionById(id: number): Promise<{
        message: string;
        data?: any;
    }>;
    updateSubscription(id: number, updateData: any): Promise<{
        message: string;
        data?: any;
    }>;
    deleteSubscription(id: number): Promise<{
        message: string;
    }>;
}
