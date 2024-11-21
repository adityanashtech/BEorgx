export declare class CompetencyQueriesService {
    private getTenantDbConfig;
    private executeQuery;
    checkCompetencyName(tenantName: string, competencyName: string): Promise<any>;
    createCompetency(tenantName: string, userData: any, code: number): Promise<any>;
    getAllCompetencies(tenantName: string): Promise<any>;
    getCompetencyById(tenantName: string, id: string): Promise<any>;
    updateCompetency(tenantName: string, id: string, userData: any): Promise<any>;
    deleteCompetency(tenantName: string, id: string): Promise<any>;
}
