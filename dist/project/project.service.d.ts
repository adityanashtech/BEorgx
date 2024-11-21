import { Repository } from 'typeorm';
import { Tenant } from '../tenant/tenant.entity';
import { ProjectQueriesService } from './projectQueries.service';
import { UserService } from '../user/user.service';
export declare class ProjectService {
    private readonly tenantRepository;
    private readonly projectQueriesService;
    private readonly userService;
    constructor(tenantRepository: Repository<Tenant>, projectQueriesService: ProjectQueriesService, userService: UserService);
    getEmployees(tenantCode: string, developer: Array<any>): Promise<any>;
    checkEmployeeExist(tenantCode: string, developer: Array<any>): Promise<any>;
    createProject(tenantCode: string, userData: any, file: any): Promise<{
        message: string;
        data?: any;
    }>;
    getAllProjects(tenantCode: string): Promise<{
        message: string;
        data: any;
    }>;
    getProjectById(id: string, tenantCode: string): Promise<{
        message: string;
        data: any;
    }>;
    updateProject(id: string, tenantCode: string, userData: any, file: any): Promise<{
        message: string;
        data: any;
    }>;
    deleteProject(id: string, tenantCode: string): Promise<{
        message: string;
    }>;
}
