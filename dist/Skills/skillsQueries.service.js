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
exports.SkillsQueriesService = void 0;
const common_1 = require("@nestjs/common");
const pg_1 = require("pg");
const dbConfig_json_1 = __importDefault(require("../dbConfig.json"));
let SkillsQueriesService = class SkillsQueriesService {
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
    async checkSkillName(tenantName, competencyName) {
        const query = `
      SELECT * FROM public.skills
      WHERE skill_name = $1
    `;
        return this.executeQuery(tenantName, query, [competencyName]);
    }
    async createSkill(tenantName, userData) {
        const query = `
      INSERT INTO public.skills (
        skill_name,
        created_at,
        updated_at
      ) VALUES (
        $1, NOW(), NOW()
      )
    `;
        const values = [
            userData.skill_name,
        ];
        return this.executeQuery(tenantName, query, values);
    }
    async getAllSkills(tenantName) {
        const query = `
      SELECT * FROM public.skills
    `;
        return this.executeQuery(tenantName, query);
    }
    async getSkillById(tenantName, id) {
        const query = `
      SELECT * FROM public.skills
      WHERE id = $1
    `;
        return this.executeQuery(tenantName, query, [id]);
    }
};
exports.SkillsQueriesService = SkillsQueriesService;
exports.SkillsQueriesService = SkillsQueriesService = __decorate([
    (0, common_1.Injectable)()
], SkillsQueriesService);
//# sourceMappingURL=skillsQueries.service.js.map