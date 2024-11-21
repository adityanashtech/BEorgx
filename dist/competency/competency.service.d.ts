import { Repository } from 'typeorm';
import { Tenant } from '../tenant/tenant.entity';
import { CompetencyQueriesService } from './competencyQueries.service';
import { UserService } from 'src/user/user.service';
import { EmployeeQueriesService } from 'src/user/employeeQueries.service';
import { accessLabelService } from 'src/accesslabels/access.service';
export declare class CompetencyService {
    private readonly tenantRepository;
    private readonly competencyQueriesService;
    private readonly UserService;
    private readonly EmployeeQueriesService;
    private readonly accesslabelsService;
    constructor(tenantRepository: Repository<Tenant>, competencyQueriesService: CompetencyQueriesService, UserService: UserService, EmployeeQueriesService: EmployeeQueriesService, accesslabelsService: accessLabelService);
    createCompetency(tenantCode: string, userData: any): Promise<{
        message: string;
        data?: any;
    }>;
    competencyName(tenantCode: string, userData: any): Promise<{
        message: string;
        data?: any;
    }>;
    getAllCompetencies(tenantCode: string): Promise<{
        message: string;
        data: any[];
    }>;
    getCompetencyById(id: string, tenantCode: string): Promise<{
        message: string;
        data: any;
    }>;
    updateCompetency(id: string, tenantCode: string, userData: any): Promise<{
        message: string;
        data: any;
    }>;
    deleteCompetency(id: string, tenantCode: string): Promise<{
        message: string;
    }>;
}
