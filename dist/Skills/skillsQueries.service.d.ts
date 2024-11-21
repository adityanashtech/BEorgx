export declare class SkillsQueriesService {
    private getTenantDbConfig;
    private executeQuery;
    checkSkillName(tenantName: string, competencyName: string): Promise<any>;
    createSkill(tenantName: string, userData: any): Promise<any>;
    getAllSkills(tenantName: string): Promise<any>;
    getSkillById(tenantName: string, id: string): Promise<any>;
}
