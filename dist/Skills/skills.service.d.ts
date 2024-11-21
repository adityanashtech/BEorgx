import { Repository } from 'typeorm';
import { Tenant } from '../tenant/tenant.entity';
import { SkillsQueriesService } from './skillsQueries.service';
export declare class SkillService {
    private readonly tenantRepository;
    private readonly skillsQueriesService;
    constructor(tenantRepository: Repository<Tenant>, skillsQueriesService: SkillsQueriesService);
    createSkill(tenantCode: string, userData: any): Promise<{
        message: string;
        data?: any;
    }>;
    skillName(tenantCode: string, userData: any): Promise<{
        message: string;
        data?: any;
    }>;
    getAllSkills(tenantCode: string): Promise<{
        message: string;
        data: any[];
    }>;
    getSkillById(id: string, tenantCode: string): Promise<{
        message: string;
        data: any;
    }>;
}
