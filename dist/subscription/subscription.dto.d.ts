export declare class CreatePlanDto {
    planName: string;
    numberOfEmployees: number;
    planDuration: number;
    planDescription?: string;
    price: number;
    status: string;
}
export declare class GetSubscriptionByIdDto {
    id: number;
}
export declare class UpdateSubscriptionDto {
    planName: string;
    numberOfEmployees: number;
    planDuration: number;
    planDescription?: string;
    price: number;
    status: string;
}
export declare class DeleteSubscriptionDto {
    id: number;
}
export declare class SubscriptionNameDto {
    planName: string;
}
