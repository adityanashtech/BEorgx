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
exports.CompetencyQueriesService = void 0;
const common_1 = require("@nestjs/common");
const pg_1 = require("pg");
const dbConfig_json_1 = __importDefault(require("../dbConfig.json"));
let CompetencyQueriesService = class CompetencyQueriesService {
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
    async checkCompetencyName(tenantName, competencyName) {
        const query = `
      SELECT * FROM public.competency
      WHERE competency_name = $1
    `;
        return this.executeQuery(tenantName, query, [competencyName]);
    }
    async createCompetency(tenantName, userData, code) {
        const query = `
      INSERT INTO public.competency (
        competency_name,
        competency_code,
        competency_admin_email,
        status,
        total_project,
        total_employee,
        competency_head,
        description,
        created_at,
        updated_at
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, NOW(), NOW()
      )
    `;
        const values = [
            userData.competency_name,
            code,
            userData.competency_admin_email,
            userData.status,
            userData.total_project,
            userData.total_employee,
            userData.competency_head,
            userData.description,
        ];
        return this.executeQuery(tenantName, query, values);
    }
    async getAllCompetencies(tenantName) {
        const query = `
      SELECT * FROM public.competency
    `;
        return this.executeQuery(tenantName, query);
    }
    async getCompetencyById(tenantName, id) {
        const query = `
      SELECT * FROM public.competency
      WHERE id = $1
    `;
        return this.executeQuery(tenantName, query, [id]);
    }
    async updateCompetency(tenantName, id, userData) {
        const query = `
      UPDATE public.competency
      SET
        competency_name = $1,
        competency_code = $2,
        competency_admin_email = $3,
        status = $4,
        total_project = $5,
        total_employee = $6,
        competency_head = $7,
        description = $8,
        image = $9,
        updated_at = NOW()
      WHERE id = $10
    `;
        const values = [
            userData.competency_name,
            userData.competency_code,
            userData.competency_admin_email,
            userData.status,
            userData.total_project,
            userData.total_employee,
            userData.competency_head,
            userData.description,
            userData.image || '',
            id,
        ];
        return this.executeQuery(tenantName, query, values);
    }
    async deleteCompetency(tenantName, id) {
        const query = `
      DELETE FROM public.competency
      WHERE id = $1
    `;
        return this.executeQuery(tenantName, query, [id]);
    }
};
exports.CompetencyQueriesService = CompetencyQueriesService;
exports.CompetencyQueriesService = CompetencyQueriesService = __decorate([
    (0, common_1.Injectable)()
], CompetencyQueriesService);
//# sourceMappingURL=competencyQueries.service.js.map