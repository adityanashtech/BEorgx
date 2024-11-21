import { ProjectService } from './project.service';
import { CreateProjectDto, UpdateProjectDto } from './project.dto';
export declare class ProjectController {
    private readonly projectService;
    constructor(projectService: ProjectService);
    createProject(req: any, userData: CreateProjectDto, file: Express.Multer.File): Promise<{
        message: string;
        data?: any;
    }>;
    getAllProjects(req: any): Promise<{
        message: string;
        data: any;
    }>;
    getProjectById(id: string, req: any): Promise<{
        message: string;
        data: any;
    }>;
    updateCompetency(id: string, projectData: UpdateProjectDto, file: Express.Multer.File, req: any): Promise<{
        message: string;
        data: any;
    }>;
    deleteCompetency(id: string, req: any): Promise<{
        message: string;
    }>;
}
