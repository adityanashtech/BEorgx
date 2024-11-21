import { Tenant } from '../tenant/tenant.entity';
import { Repository } from 'typeorm';
import { accessLabelQueriesService } from './accessQueries.service';
export declare class accessLabelService {
    private readonly tenantRepository;
    private readonly accessLabelQueriesService;
    constructor(tenantRepository: Repository<Tenant>, accessLabelQueriesService: accessLabelQueriesService);
    checkTenant(tenantName: string): Promise<any>;
    createAccess(tenantName: string, userData: any): Promise<{
        message: string;
        data?: any;
    }>;
    getAllAccess(tenantName: string): Promise<{
        message: string;
        data: any[];
    }>;
    getAccessByEmployeeId(id: string, tenantName: string): Promise<{
        message: string;
        data: any;
    }>;
    updateAccessByEmployeeId(id: string, tenantName: string, userData: any): Promise<{
        message: string;
        data?: any;
    }>;
}
