import { Repository } from 'typeorm';
import { Tenant } from '../tenant/tenant.entity';
import { employeeSkillQueriesService } from './employeeSkillQueries.service';
import { SkillsQueriesService } from './../Skills/skillsQueries.service';
import { EmployeeQueriesService } from './../user/employeeQueries.service';
import { CompetencyService } from './../competency/competency.service';
export declare class employeeSkillService {
    private readonly tenantRepository;
    private readonly employeeSkillQueriesService;
    private readonly skillsQueriesService;
    private readonly UserQueries;
    private readonly CompetencyService;
    constructor(tenantRepository: Repository<Tenant>, employeeSkillQueriesService: employeeSkillQueriesService, skillsQueriesService: SkillsQueriesService, UserQueries: EmployeeQueriesService, CompetencyService: CompetencyService);
    createEmployeeSkill(tenantCode: string, userData: any): Promise<{
        message?: string;
        data?: any;
    }>;
    checkEmployeeSkillByName(tenantCode: string, userData: any): Promise<{
        message: string;
        data?: any;
    }>;
    getAllEmployeeSkills(tenantCode: string): Promise<{
        message: string;
        data: any;
    }>;
    getEmployeeSkillByEmployeeId(employee_id: string, tenantCode: string): Promise<{
        message: string;
        data: any;
    }>;
    deleteEmployeeSkill(id: string, tenantCode: string): Promise<{
        message: string;
    }>;
}
