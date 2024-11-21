export declare class CreateProjectDto {
    title: string;
    description: string;
    timeline: string;
    duration: string;
    status: string;
    start_date?: Date;
    end_date?: Date;
    project_team: {
        employee_id: string;
        role: string;
        billable: string;
        billable_percentage: number;
    }[];
    file: any;
}
export declare class ProjectNameDto {
    competency_name: string;
}
export declare class UpdateProjectDto {
    title: string;
    description: string;
    timeline: string;
    duration: string;
    status: string;
    start_date?: Date;
    end_date?: Date;
    project_team: {
        employee_id: string;
        role: string;
        billable: string;
        billable_percentage: number;
    }[];
    file: any;
}
export declare class ProjectIdDto {
    id: string;
}
export declare class DeleteProjectDto {
    id: string;
}
