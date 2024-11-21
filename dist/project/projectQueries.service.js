"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectQueriesService = void 0;
const common_1 = require("@nestjs/common");
const pg_1 = require("pg");
const dbConfig_json_1 = __importDefault(require("../dbConfig.json"));
let ProjectQueriesService = class ProjectQueriesService {
    getTenantDbConfig(tenantName) {
        for (const tenant of dbConfig_json_1.default.tenants) {
            if (tenant.database.toLowerCase() === tenantName.toLowerCase()) {
                return tenant;
            }
        }
        return undefined;
    }
    async executeQuery(tenantName, queryText, values) {
        const tenantDbConfig = this.getTenantDbConfig(tenantName);
        if (!tenantDbConfig) {
            throw new Error('Tenant database configuration not found.');
        }
        const pool = new pg_1.Pool(tenantDbConfig);
        let client;
        try {
            client = await pool.connect();
            const result = await client.query(queryText, values);
            return result.rows;
        }
        catch (error) {
            throw new Error(`Failed to execute query: ${error.message}`);
        }
        finally {
            if (client) {
                client.release();
            }
            await pool.end();
        }
    }
    async checkProjectName(tenantName, title) {
        const query = `
      SELECT * FROM public.project
      WHERE title = $1
    `;
        return await this.executeQuery(tenantName, query, [title]);
    }
    async createProject(tenantName, userData, file) {
        const query = `
      INSERT INTO public.project (
        title,
        timeline,
        start_date,
        end_date,
        status,
        description,
        duration,
        file,
        created_at,
        updated_at
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8,NOW(), NOW()
      )
    `;
        const values = [
            userData.title,
            userData.timeline,
            userData.start_date,
            userData.end_date,
            userData.status,
            userData.description,
            userData.duration,
            file,
        ];
        let see = await this.executeQuery(tenantName, query, values);
    }
    async createProjectEmployee(tenantName, userData) {
        const query = `
      INSERT INTO public.project_employees (
        project_id,
        employee_id,
        role,
        billable,
        billable_percentage,
        created_at
      ) VALUES (
        $1, $2, $3, $4, $5,NOW()
      )
    `;
        const values = [
            userData.project_id,
            userData.employee_id,
            userData.role,
            userData.billable,
            userData.billable_percentage,
        ];
        return this.executeQuery(tenantName, query, values);
    }
    async addProjectToEmployee(tenantName, id, project) {
        const query = `
        UPDATE public.employees
        SET
          project = $1,
          updated_at = NOW()
        WHERE id = $2
      `;
        const values = [
            project,
            id,
        ];
        return this.executeQuery(tenantName, query, values);
    }
    async getProjectEmployeeByProjectId(tenantName, id) {
        const query = `
      SELECT * FROM public.project_employees
      WHERE project_id = $1 

    `;
        return this.executeQuery(tenantName, query, [id]);
    }
    async getProjectEmployeeByEmployeeId(tenantName, project_id, employee_id) {
        const query = `
      SELECT * FROM public.project_employees
      WHERE project_id = $1 
      AND employee_id = $2

    `;
        return this.executeQuery(tenantName, query, [project_id, employee_id]);
    }
    async getAllProjects(tenantName) {
        const query = `
      SELECT * FROM public.project
    `;
        return this.executeQuery(tenantName, query);
    }
    async getProjectById(tenantName, id) {
        const query = `
      SELECT * FROM public.project
      WHERE id = $1
    `;
        return this.executeQuery(tenantName, query, [id]);
    }
    async updateProject(tenantName, id, userData, file) {
        const query = `
      UPDATE public.project
      SET
        title = $1,
        timeline = $2,
        start_date = $3,
        end_date = $4,
        status = $5,
        description  = $6,
        duration = $7,
        file = $8,
         updated_at = NOW()
      WHERE id = $9
     

    `;
        const values = [
            userData.title,
            userData.timeline,
            userData.start_date,
            userData.end_date,
            userData.status,
            userData.description,
            userData.duration,
            file,
            id,
        ];
        return this.executeQuery(tenantName, query, values);
    }
    async updateProjectEmployee(tenantName, id, userData) {
        const query = `
      UPDATE public.project_employees
      SET
        role = $1,
        billable = $2,
        billable_percentage = $3,
        status = $4,
       
      updated_at = NOW()
       WHERE employee_id = $5

    `;
        const values = [
            userData.role,
            userData.billable,
            userData.billable_percentage,
            userData.status,
            id,
        ];
        return this.executeQuery(tenantName, query, values);
    }
    async deleteProject(tenantName, id) {
        const query = `
    UPDATE public.project
    SET status = $1,
    updated_at = NOW()
    WHERE id = $2

    `;
        const values = [
            "inactive",
            id,
        ];
        return this.executeQuery(tenantName, query, values);
    }
};
exports.ProjectQueriesService = ProjectQueriesService;
exports.ProjectQueriesService = ProjectQueriesService = __decorate([
    (0, common_1.Injectable)()
], ProjectQueriesService);
//# sourceMappingURL=projectQueries.service.js.map