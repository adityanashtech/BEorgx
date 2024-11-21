import { Repository } from 'typeorm';
import { Tenant } from '../tenant/tenant.entity';
import { EmployeeQueriesService } from './employeeQueries.service';
export declare class UserService {
    private readonly tenantRepository;
    private readonly employeeQueriesService;
    constructor(tenantRepository: Repository<Tenant>, employeeQueriesService: EmployeeQueriesService);
    createUser(tenantCode: string, userData: any): Promise<{
        message: string;
        data?: any;
    }>;
    getAllUsers(tenantCode: string): Promise<{
        message: string;
        data: any;
    }>;
    getAllDesignations(tenantCode: string): Promise<{
        message: string;
        data: any;
    }>;
    getUserById(id: string, tenantCode: string): Promise<{
        message: string;
        data: any;
    }>;
    updateUser(id: string, tenantCode: string, userData: any): Promise<{
        message: string;
        data?: any;
    }>;
    updateCompetencyandReporting(id: string, tenantCode: string, userData: any): Promise<{
        message: string;
        data?: any;
    }>;
    deleteUser(id: string, tenantCode: string): Promise<{
        message: string;
    }>;
    filterUsersByLocation(tenantCode: string, location: string): Promise<{
        message: string;
        data?: any;
    }>;
    filterUsersByName(tenantCode: string, name: string): Promise<{
        message?: string;
        data?: any;
    }>;
    checkUsersByEmail(email: string, tenantName: string): Promise<{
        message?: string;
        data?: any;
    }>;
}
