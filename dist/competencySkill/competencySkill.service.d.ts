import { Repository } from 'typeorm';
import { Tenant } from '../tenant/tenant.entity';
import { employeeSkillQueriesService } from './competencySkillQueries.service';
import { SkillsQueriesService } from '../Skills/skillsQueries.service';
import { EmployeeQueriesService } from '../user/employeeQueries.service';
import { CompetencyService } from './../competency/competency.service';
export declare class employeeSkillService {
    private readonly tenantRepository;
    private readonly employeeSkillQueriesService;
    private readonly skillsQueriesService;
    private readonly UserQueries;
    private readonly CompetencyService;
    constructor(tenantRepository: Repository<Tenant>, employeeSkillQueriesService: employeeSkillQueriesService, skillsQueriesService: SkillsQueriesService, UserQueries: EmployeeQueriesService, CompetencyService: CompetencyService);
    checkEmployeeSkillByName(tenantCode: string, userData: any): Promise<{
        message: string;
        data?: any;
    }>;
    getSkillsBySkillName(skill_name: string, tenantCode: string): Promise<{
        message: string;
        data: any;
    }>;
    getSkillsByLevel(skill_name: string, level: string, tenantCode: string): Promise<{
        message: string;
        data: any;
    }>;
    getSkillsByCompetency(studio_id: string, tenantCode: string): Promise<{
        message: string;
        data: any;
    }>;
}
