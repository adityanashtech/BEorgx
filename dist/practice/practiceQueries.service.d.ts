export declare class PracticeQueriesService {
    private getTenantDbConfig;
    private executeQuery;
    createPractice(tenantName: string, practiceData: any): Promise<any>;
    getPracticeById(tenantName: string, id: string): Promise<any>;
    getAllPractices(tenantName: string): Promise<any>;
    updatePractice(tenantName: string, id: string, practiceData: any): Promise<any>;
    deletePractice(tenantName: string, id: string): Promise<any>;
    checkPracticeName(tenantName: string, title: string): Promise<any>;
}
