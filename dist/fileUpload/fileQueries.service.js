"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileQueriesService = void 0;
const common_1 = require("@nestjs/common");
const pg_1 = require("pg");
const dbConfig_json_1 = __importDefault(require("../dbConfig.json"));
const competencyQueries_service_1 = require("../competency/competencyQueries.service");
let fileQueriesService = class fileQueriesService {
    constructor(competencyQueriesService) {
        this.competencyQueriesService = competencyQueriesService;
    }
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
    async getAllEmployees(tenantName) {
        const query = `
      SELECT * FROM public.employee
    `;
        const employees = await this.executeQuery(tenantName, query);
        return {
            message: 'Retrieved all employees successfully.',
            data: employees,
        };
    }
    async checkEmployee(tenantName, employeeData) {
        const queryCheck = `
      SELECT * FROM public.employee
      WHERE email = $1
    `;
        const checkResult = await this.executeQuery(tenantName, queryCheck, [
            employeeData.email,
        ]);
        if (checkResult.length > 0) {
            return {
                message: 'User with this email already exists. Please use another email.',
            };
        }
        if (employeeData.studio_name) {
            let studio = await this.competencyQueriesService.checkCompetencyName(tenantName, employeeData.studio_name);
            if (studio.length == 0) {
                return {
                    message: 'Studio does not exist, please use existing studio',
                };
            }
        }
    }
};
exports.fileQueriesService = fileQueriesService;
exports.fileQueriesService = fileQueriesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [competencyQueries_service_1.CompetencyQueriesService])
], fileQueriesService);
//# sourceMappingURL=fileQueries.service.js.map