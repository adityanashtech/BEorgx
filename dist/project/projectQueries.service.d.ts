export declare class ProjectQueriesService {
    private getTenantDbConfig;
    private executeQuery;
    checkProjectName(tenantName: string, title: string): Promise<any>;
    createProject(tenantName: string, userData: any, file: string): Promise<any>;
    createProjectEmployee(tenantName: string, userData: any): Promise<any>;
    addProjectToEmployee(tenantName: string, id: string, project: any): Promise<any>;
    getProjectEmployeeByProjectId(tenantName: string, id: string): Promise<any>;
    getProjectEmployeeByEmployeeId(tenantName: string, project_id: string, employee_id: string): Promise<any>;
    getAllProjects(tenantName: string): Promise<any>;
    getProjectById(tenantName: string, id: string): Promise<any>;
    updateProject(tenantName: string, id: string, userData: any, file: any): Promise<any>;
    updateProjectEmployee(tenantName: string, id: string, userData: any): Promise<any>;
    deleteProject(tenantName: string, id: string): Promise<any>;
}
