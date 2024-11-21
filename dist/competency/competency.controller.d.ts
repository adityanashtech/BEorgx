import { CompetencyService } from './competency.service';
import { CreateCompetencyDto, CompetencyNameDto, UpdateCompetencyDto } from './competency.dto';
export declare class CompetencyController {
    private readonly competencyService;
    constructor(competencyService: CompetencyService);
    createCompetency(req: any, userData: CreateCompetencyDto): Promise<{
        message: string;
        data?: any;
    }>;
    competencyName(req: any, data: CompetencyNameDto): Promise<{
        message: string;
        data?: any;
    }>;
    getAllCompetencies(req: any): Promise<{
        message: string;
        data: any[];
    }>;
    getCompetencyById(id: string, req: any): Promise<{
        message: string;
        data: any;
    }>;
    updateCompetency(id: string, compentencyData: UpdateCompetencyDto, req: any): Promise<{
        message: string;
        data: any;
    }>;
    deleteCompetency(id: string, req: any): Promise<{
        message: string;
    }>;
}
