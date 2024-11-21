import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(req: any, userData: any): Promise<{
        message: string;
        data?: any;
    }>;
    filterUsersByName(name: string, req: any): Promise<{
        message?: string;
        data?: any;
    }>;
    filterUsersByLocation(location: string, req: any): Promise<{
        message: string;
        data?: any;
    }>;
    getAllUsers(req: any): Promise<{
        message: string;
        data: any;
    }>;
    getAllDesignations(req: any): Promise<{
        message: string;
        data: any;
    }>;
    getUserById(id: number, req: any): Promise<{
        message: string;
        data: any;
    }>;
    updateUser(id: string, userData: any, req: any): Promise<{
        message: string;
        data?: any;
    }>;
    updateCompetencyAndReporting(id: string, userData: any, req: any): Promise<{
        message: string;
        data?: any;
    }>;
    deleteUser(id: string, req: any): Promise<{
        message: string;
    }>;
    checkUsersByEmail(email: string, req: any): Promise<{
        message?: string;
        data?: any;
    }>;
}
