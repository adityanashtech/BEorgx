import { Tenant } from '../tenant/tenant.entity';
import { Repository } from 'typeorm';
import { fileService } from './file.services';
export declare class FilesController {
    private readonly tenantRepository;
    private readonly fileService;
    constructor(tenantRepository: Repository<Tenant>, fileService: fileService);
    uploadFile(req: any, file: any): Promise<{
        messgae: string;
        data: any;
    }>;
}
