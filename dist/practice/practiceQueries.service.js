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
exports.PracticeQueriesService = void 0;
const common_1 = require("@nestjs/common");
const pg_1 = require("pg");
const dbConfig_json_1 = __importDefault(require("../dbConfig.json"));
let PracticeQueriesService = class PracticeQueriesService {
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
            console.error('Error executing query:', error);
            throw new Error(`Failed to execute query: ${error.message}`);
        }
        finally {
            if (client) {
                client.release();
            }
            await pool.end();
        }
    }
    async createPractice(tenantName, practiceData) {
        const query = `
      INSERT INTO public.practice (title, description, total_employee, studio_head, code, location, created_at, updated_at)
      VALUES ($1, $2, $3, $4, $5, $6, NOW(), NOW())
      RETURNING *;
    `;
        const code = Math.floor(Math.random() * 9000) + 1000;
        const values = [
            practiceData.title,
            practiceData.description,
            practiceData.total_employee,
            practiceData.studio_head,
            code,
            practiceData.location,
        ];
        return this.executeQuery(tenantName, query, values);
    }
    async getPracticeById(tenantName, id) {
        const query = `
      SELECT * FROM public.practice
      WHERE id = $1;
    `;
        const values = [id];
        return this.executeQuery(tenantName, query, values);
    }
    async getAllPractices(tenantName) {
        const query = `
      SELECT * FROM public.practice;
    `;
        return this.executeQuery(tenantName, query);
    }
    async updatePractice(tenantName, id, practiceData) {
        const query = `
      UPDATE public.practice
      SET title = $1, description = $2, total_employee = $3, studio_head = $4, image = $5,location = $6, updated_at = NOW()
      WHERE id = $7
      RETURNING *;
    `;
        const values = [
            practiceData.title,
            practiceData.description,
            practiceData.total_employee,
            practiceData.studio_head,
            practiceData.image || '',
            practiceData.location,
            id,
        ];
        return this.executeQuery(tenantName, query, values);
    }
    async deletePractice(tenantName, id) {
        const query = `
      DELETE FROM public.practice
      WHERE id = $1;
    `;
        const values = [id];
        return this.executeQuery(tenantName, query, values);
    }
    async checkPracticeName(tenantName, title) {
        const query = `
    SELECT * FROM public.practice
    WHERE title ILIKE $1;
    
    `;
        const values = [title];
        return this.executeQuery(tenantName, query, values);
    }
};
exports.PracticeQueriesService = PracticeQueriesService;
exports.PracticeQueriesService = PracticeQueriesService = __decorate([
    (0, common_1.Injectable)()
], PracticeQueriesService);
//# sourceMappingURL=practiceQueries.service.js.map