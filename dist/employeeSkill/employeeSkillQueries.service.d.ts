export declare class employeeSkillQueriesService {
    private getTenantDbConfig;
    private executeQuery;
    checkEmployeeSkillByNameAndLevel(tenantName: string, skillName: string, employee_id: string, level: string): Promise<any>;
    checkEmployeeSkillByNameAndEmployeeAndStudio(tenantName: string, skillName: string, employee_id: string, studio_id: string): Promise<any>;
    createEmployeeSkill(tenantName: string, userData: any): Promise<any>;
    getEmployeeSkillByEmployeeId(tenantName: string, employee_id: string): Promise<any>;
    getAllEmployeeSkills(tenantName: string): Promise<any>;
    deleteEmployeeSkill(tenantName: string, id: string): Promise<any>;
}
