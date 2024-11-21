export declare function getAllEmployees(tenantName: string): Promise<{
    message: string;
    data: any[];
}>;
export declare function getAllDesignations(tenantName: string): Promise<{
    message: string;
    data: any[];
}>;
export declare function createEmployee(tenantName: string, employeeData: any): Promise<{
    message: string;
    data?: any;
}>;
export declare function filterUsersByName(tenantName: string, name: string): Promise<{
    message: string;
    data?: any[];
}>;
export declare function getEmployeeByEmail(tenantName: string, email: string): Promise<any[]>;
