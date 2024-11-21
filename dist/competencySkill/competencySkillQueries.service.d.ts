export declare class employeeSkillQueriesService {
    private getTenantDbConfig;
    private executeQuery;
    checkEmployeeSkillByName(tenantName: string, skillName: string, employee_id: string, level: string): Promise<any>;
    getSkillsBySkillName(tenantName: string, skill_name: string): Promise<any>;
    getSkillsByLevel(tenantName: string, skill_name: string, level: string): Promise<any>;
    getSkillsByCompetency(tenantName: string, studio_id: string): Promise<any>;
}
