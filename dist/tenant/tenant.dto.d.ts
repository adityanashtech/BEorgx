export declare class CreateTenantDto {
    tenant_name: string;
    tenant_email: string;
    password: string;
    status: string;
    role?: string;
}
export declare class CreateRegisteredDto {
    tenant_name: string;
    tenant_email: string;
    password: string;
    role?: string;
}
export declare class GetTenantByIdDto {
    id: number;
}
export declare class UpdateTenantDto {
    tenant_name?: string;
    tenant_email?: string;
    status?: string;
    role?: string;
    phone?: string;
    location?: string;
    company_type?: string;
    image?: string;
}
export declare class DeleteTenantDto {
    id: number;
}
