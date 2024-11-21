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
exports.employeeSkillQueriesService = void 0;
const common_1 = require("@nestjs/common");
const pg_1 = require("pg");
const dbConfig_json_1 = __importDefault(require("../dbConfig.json"));
let employeeSkillQueriesService = class employeeSkillQueriesService {
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
    async checkEmployeeSkillByName(tenantName, skillName, employee_id, level) {
        const query = `
      SELECT * FROM public.employee_skills WHERE skill_name = $1
      AND employee_id = $2
      AND level= $3
    `;
        return this.executeQuery(tenantName, query, [
            skillName,
            employee_id,
            level,
        ]);
    }
    async getSkillsBySkillName(tenantName, skill_name) {
        let query = `SELECT * FROM public.employee_skills
    WHERE skill_name = $1`;
        let data = await this.executeQuery(tenantName, query, [skill_name]);
        return data;
    }
    async getSkillsByLevel(tenantName, skill_name, level) {
        let query = `SELECT * FROM public.employee_skills
    WHERE skill_name = $1 AND level = $2`;
        let data = await this.executeQuery(tenantName, query, [skill_name, level]);
        return data;
    }
    async getSkillsByCompetency(tenantName, studio_id) {
        let query = `SELECT * FROM public.employee_skills
    WHERE studio_id = $1`;
        let data = await this.executeQuery(tenantName, query, [studio_id]);
        return data;
    }
};
exports.employeeSkillQueriesService = employeeSkillQueriesService;
exports.employeeSkillQueriesService = employeeSkillQueriesService = __decorate([
    (0, common_1.Injectable)()
], employeeSkillQueriesService);
//# sourceMappingURL=competencySkillQueries.service.js.map