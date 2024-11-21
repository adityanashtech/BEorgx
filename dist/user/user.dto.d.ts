export declare class CreateUserDto {
    first_name: string;
    designation: string;
    email: string;
    gender: string;
    studio_name: string;
    role: string;
    location?: string;
    image?: string;
    phone?: string;
    password: string;
}
export declare class FilterUsersByNameDto {
    name: string;
}
export declare class FilterUsersByLocationDto {
    location: string;
}
export declare class GetUserByIdDto {
    id: number;
}
export declare class UpdateUserDto {
    id: number;
    first_name?: string;
    last_name?: string;
    designation?: string;
    role?: string;
    gender?: string;
    email?: string;
    image?: string;
    location?: string;
    marital_status?: string;
    blood_group?: string;
    phy_disable?: string;
    pan_card?: string;
    aadhaar_card?: string;
    uan?: string;
    personal_email?: string;
    phone?: string;
    whatsapp?: string;
    wordpress?: string;
    github?: string;
    bitbuket?: string;
    work_phone?: string;
    address?: string;
}
export declare class updateReportingDto {
    competency: string;
    reporting_manager: string;
}
export declare class checkUsersByEmail {
    email: string;
}
export declare class DeleteUserDto {
    id: number;
}
