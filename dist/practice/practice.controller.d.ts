import { PracticeService } from './practice.service';
import { CreatePracticeDto, PracticeNameDto, UpdatePracticeDto } from './practice.dto';
export declare class PracticeController {
    private readonly practiceService;
    constructor(practiceService: PracticeService);
    createPractice(req: any, practiceData: CreatePracticeDto): Promise<{
        message: string;
        data?: any;
    }>;
    practiceName(req: any, data: PracticeNameDto): Promise<{
        message: string;
    }>;
    getAllPractices(req: any): Promise<{
        message: string;
        data: any[];
    }>;
    getPracticeById(id: number, req: any): Promise<{
        message: string;
        data: any;
    }>;
    updatePractice(id: string, practiceData: UpdatePracticeDto, req: any): Promise<{
        message: string;
        data?: any;
    }>;
    deletePractice(id: string, req: any): Promise<{
        message: string;
    }>;
}
