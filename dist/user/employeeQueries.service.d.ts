import { CompetencyQueriesService } from 'src/competency/competencyQueries.service';
import { accessLabelQueriesService } from 'src/accesslabels/accessQueries.service';
export declare class EmployeeQueriesService {
    private readonly competencyQueriesService;
    private readonly accessLabelQueriesService;
    constructor(competencyQueriesService: CompetencyQueriesService, accessLabelQueriesService: accessLabelQueriesService);
    private getTenantDbConfig;
    private executeQuery;
    getAllEmployees(tenantName: string): Promise<{
        message: string;
        data: any[];
    }>;
    createEmployee(tenantName: string, employeeData: any): Promise<{
        message: string;
        data?: any;
    }>;
    filterUsersByName(tenantName: string, name: string): Promise<{
        message: string;
        data?: any[];
    }>;
    checkUserByEmail(tenantName: string, email: string): Promise<{
        message: string;
        data?: any[];
    }>;
    getUserById(tenantName: string, id: string): Promise<{
        message: string;
        data: any;
    }>;
    updateEmployee(tenantName: string, id: string, userData: any): Promise<{
        message: string;
        data?: any;
    }>;
    updateCompetencyAndReporting(tenantName: string, id: string, userData: any): Promise<{
        message: string;
        data?: any;
    }>;
    updateCompetencyHead(tenantName: string, id: string, data: boolean, studio: string): Promise<{
        message: string;
        data: any;
    }>;
    deleteEmployee(tenantName: string, id: string): Promise<{
        message: string;
    }>;
    filterUsersByLocation(tenantName: string, location: string): Promise<{
        message: string;
        data: any;
    }>;
    getAllDesignations(tenantName: string): Promise<{
        message: string;
        data: any[];
    }>;
}
