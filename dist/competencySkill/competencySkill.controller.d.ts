import { employeeSkillService } from './competencySkill.service';
export declare class employeeSkillController {
    private readonly employeeSkillService;
    constructor(employeeSkillService: employeeSkillService);
    getSkillsBySkillName(skill_name: string, req: any): Promise<{
        message: string;
        data: any;
    }>;
    getSkillsByLevel(skill_name: string, level: string, req: any): Promise<{
        message: string;
        data: any;
    }>;
    getSkillsByCompetency(studio_id: string, req: any): Promise<{
        message: string;
        data: any;
    }>;
}
