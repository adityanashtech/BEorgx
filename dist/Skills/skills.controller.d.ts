import { SkillService } from './skills.service';
import { CreateSkillDto, SkillNameDto } from './skills.dto';
export declare class SkillController {
    private readonly SkillService;
    constructor(SkillService: SkillService);
    createSkill(req: any, userData: CreateSkillDto): Promise<{
        message: string;
        data?: any;
    }>;
    skillName(req: any, data: SkillNameDto): Promise<{
        message: string;
        data?: any;
    }>;
    getAllSkills(req: any): Promise<{
        message: string;
        data: any[];
    }>;
    getSkillById(id: string, req: any): Promise<{
        message: string;
        data: any;
    }>;
}
