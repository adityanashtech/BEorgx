import { Subscription } from './subscription.entity';
import { Repository } from 'typeorm';
export declare class SubscriptionQueriesService {
    private readonly subscriptionRepository;
    constructor(subscriptionRepository: Repository<Subscription>);
    createSubscription(userData: any): Promise<any>;
    subscriptionName(planName: string): Promise<any>;
    getSubscriptionById(id: number): Promise<any>;
    getSubscriptions(): Promise<any>;
    updateSubscription(id: number, updateData: any): Promise<any>;
    deleteSubscription(id: number): Promise<any>;
}
