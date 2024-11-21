import { Tenant } from '../tenant/tenant.entity';
import { Repository } from 'typeorm';
import { PracticeQueriesService } from './practiceQueries.service';
export declare class PracticeService {
    private readonly tenantRepository;
    private readonly practiceQueriesService;
    constructor(tenantRepository: Repository<Tenant>, practiceQueriesService: PracticeQueriesService);
    createPractice(tenantName: string, userData: any): Promise<{
        message: string;
        data?: any;
    }>;
    practiceName(tenantName: string, data: any): Promise<{
        message: string;
    }>;
    getAllPractices(tenantName: string): Promise<{
        message: string;
        data: any[];
    }>;
    getPracticeById(id: string, tenantName: string): Promise<{
        message: string;
        data: any;
    }>;
    updatePractice(id: string, tenantName: string, userData: any): Promise<{
        message: string;
        data?: any;
    }>;
    deletePractice(id: string, tenantName: string): Promise<{
        message: string;
    }>;
}
