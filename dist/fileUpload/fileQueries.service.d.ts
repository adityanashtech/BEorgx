import { CompetencyQueriesService } from 'src/competency/competencyQueries.service';
export declare class fileQueriesService {
    private readonly competencyQueriesService;
    constructor(competencyQueriesService: CompetencyQueriesService);
    private getTenantDbConfig;
    private executeQuery;
    getAllEmployees(tenantName: string): Promise<{
        message: string;
        data: any[];
    }>;
    checkEmployee(tenantName: string, employeeData: any): Promise<{
        message: string;
        data?: any;
    }>;
}
