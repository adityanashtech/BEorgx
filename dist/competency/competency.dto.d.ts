export declare class CreateCompetencyDto {
    competency_name: string;
    competency_admin_email: string;
    status: string;
    total_project: number;
    total_employee: number;
    competency_head: number;
    description: string;
}
export declare class CompetencyNameDto {
    competency_name: string;
}
export declare class UpdateCompetencyDto {
    competency_name: string;
    competency_code: string;
    competency_admin_email: string;
    status: string;
    total_project: number;
    total_employee: number;
    competency_head: number;
    description: string;
}
export declare class CompetencyIdDto {
    id: string;
}
export declare class DeleteCompetencyDto {
    id: string;
}
