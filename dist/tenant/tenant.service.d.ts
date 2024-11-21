import { Repository } from 'typeorm';
import { Tenant } from './tenant.entity';
export declare class TenantService {
    private readonly tenantRepository;
    constructor(tenantRepository: Repository<Tenant>);
    createTenant(tenantData: {
        tenant_name: string;
        tenant_email: string;
        role: string;
        tenant_code: string;
        password: string;
        status: string;
        phone?: string;
        location?: string;
        subscription_details?: string[];
        company_type?: string;
        image?: string;
        isRegistered?: boolean;
    }): Promise<{
        message: string;
        data?: Tenant;
    }>;
    private createDatabase;
    private createConnectionToDatabase;
    private addTenantConfig;
}
