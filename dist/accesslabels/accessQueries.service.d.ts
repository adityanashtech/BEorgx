export declare class accessLabelQueriesService {
    private getTenantDbConfig;
    private executeQuery;
    createAccess(tenantName: string, accessData: any): Promise<any>;
    getAccessByEmployeeId(tenantName: string, id: string): Promise<any>;
    getAllAccess(tenantName: string): Promise<any>;
    updateAccessByEmployeeId(tenantName: string, id: string, accessData: any): Promise<any>;
}
