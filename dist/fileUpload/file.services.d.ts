import { fileQueriesService } from './fileQueries.service';
import { Repository } from 'typeorm';
import { Tenant } from '../tenant/tenant.entity';
import { UserService } from './../user/user.service';
export declare class fileService {
    private readonly tenantRepository;
    private readonly fileQueriesService;
    private readonly userService;
    constructor(tenantRepository: Repository<Tenant>, fileQueriesService: fileQueriesService, userService: UserService);
    uplaodFile(tenantCode: string, results: any): Promise<any>;
}
