import { employeeSkillService } from './employeeSkill.service';
import { CreateEmployeeSkillDto } from './employeeSKill.dto';
export declare class employeeSkillController {
    private readonly employeeSkillService;
    constructor(employeeSkillService: employeeSkillService);
    createEmployeeSkill(req: any, userData: CreateEmployeeSkillDto): Promise<{
        message?: string;
        data?: any;
    }>;
    getAllEmployeeSkill(req: any): Promise<{
        message: string;
        data: any;
    }>;
    getEmployeeSkillByEmployeeId(employee_id: string, req: any): Promise<{
        message: string;
        data: any;
    }>;
    deleteEmployeeSkill(id: string, req: any): Promise<{
        message: string;
    }>;
}
