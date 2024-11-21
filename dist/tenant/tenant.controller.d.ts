import { Repository } from 'typeorm';
import { Tenant } from './tenant.entity';
import { TenantService } from './tenant.service';
export declare class TenantController {
    private readonly tenantRepository;
    private readonly tenantService;
    constructor(tenantRepository: Repository<Tenant>, tenantService: TenantService);
    findAll(): Promise<{
        message: string;
        data: Tenant[];
    }>;
    filterByEmail(tenant_email: string): Promise<{
        message: string;
        data?: Tenant;
    }>;
    findOne(id: number): Promise<{
        message: string;
        data?: Tenant;
    }>;
    create(tenantData: Tenant): Promise<{
        message: string;
        data?: Tenant;
    }>;
    tenantRegister(tenantData: Tenant): Promise<{
        message: string;
        data?: Tenant;
    }>;
    update(id: number, tenantData: Tenant): Promise<{
        message: string;
        updatedData: Tenant;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
export default TenantController;
