export declare function getAllSubscription(tenantName: string): Promise<{
    message: string;
    data: any[];
}>;
export declare function createSubscription(tenantName: string, subscriptionData: any): Promise<{
    message: string;
    data?: any;
}>;
