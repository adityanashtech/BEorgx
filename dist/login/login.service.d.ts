import { JwtService } from '@nestjs/jwt';
import { accessLabelService } from 'src/accesslabels/access.service';
import { UserService } from 'src/user/user.service';
export declare class LoginService {
    private readonly jwtService;
    private readonly accessLabelService;
    private readonly UserService;
    private readonly pool;
    constructor(jwtService: JwtService, accessLabelService: accessLabelService, UserService: UserService);
    login(body: {
        email: string;
        password: string;
        role: string;
        tenant_code?: string;
        domain?: string;
    }): Promise<any>;
    tenantLogin(body: {
        email: string;
        password: string;
    }): Promise<any>;
    employeeLogin(body: {
        email: string;
        password: string;
        tenant_code?: string;
    }): Promise<any>;
    adminLogin(body: {
        email: string;
        password: string;
    }): Promise<any>;
}
