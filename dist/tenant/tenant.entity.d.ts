export declare class Tenant {
    id: number;
    tenant_name: string;
    tenant_email: string;
    role: string;
    tenant_code: string;
    password: string;
    status: string;
    phone: string;
    location: string;
    subscription_details: string[];
    company_type: string;
    isRegistered: boolean;
    image: string;
    created_at: Date;
    updated_at: Date;
}
export default Tenant;
