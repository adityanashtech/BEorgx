import { LoginService } from './login.service';
interface LoginBody {
    email: string;
    password: string;
    role: string;
    tenant_code?: string;
}
export declare class LoginController {
    private readonly loginService;
    constructor(loginService: LoginService);
    login(body: LoginBody): Promise<any>;
}
export {};
