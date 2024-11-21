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
exports.accessLabelQueriesService = void 0;
const common_1 = require("@nestjs/common");
const pg_1 = require("pg");
const dbConfig_json_1 = __importDefault(require("../dbConfig.json"));
let accessLabelQueriesService = class accessLabelQueriesService {
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
    async createAccess(tenantName, accessData) {
        const query = `
      INSERT INTO public.access_labels (employee_id,
      isemployeecreate,
      isemployeeupdate,
      isemployeeread,
      isemployeedelete, 
      isprojectcreate,
      isprojectupdate,
      isprojectread, 
      isprojectdelete,
      iscompetencycreate,
      iscompetencyread,
      iscompetencyupdate,
      iscompetencydelete,
      ispracticecreate,
      ispracticeread,
      ispracticeupdate,
      ispracticedelete,
      iscsvupload,
      isprofileupdate, 
      created_at,
      updated_at)
      VALUES ($1, $2, $3, $4, $5, $6,$7, $8,$9, $10, $11, $12, $13, $14, $15, $16, $17,$18,$19, NOW(), NOW())
      RETURNING *;
    `;
        const values = [
            accessData.employee_id,
            accessData.isemployeecreate,
            accessData.isemployeeupdate,
            accessData.isemployeeread,
            accessData.isemployeedelete,
            accessData.isprojectcreate,
            accessData.isprojectupdate,
            accessData.isprojectread,
            accessData.isprojectdelete,
            accessData.iscompetencycreate,
            accessData.iscompetencyread,
            accessData.iscompetencyupdate,
            accessData.iscompetencydelete,
            accessData.ispracticecreate,
            accessData.ispracticeread,
            accessData.ispracticeupdate,
            accessData.ispracticedelete,
            accessData.iscsvupload,
            accessData.isprofileupdate,
        ];
        return this.executeQuery(tenantName, query, values);
    }
    async getAccessByEmployeeId(tenantName, id) {
        const query = `
      SELECT * FROM public.access_labels
      WHERE employee_id = $1;
    `;
        const values = [id];
        return this.executeQuery(tenantName, query, values);
    }
    async getAllAccess(tenantName) {
        const query = `
      SELECT * FROM public.access_labels;
    `;
        return this.executeQuery(tenantName, query);
    }
    async updateAccessByEmployeeId(tenantName, id, accessData) {
        const query = `
      UPDATE public.access_labels
      SET 

      isemployeecreate = $1,
      isemployeeupdate  = $2,
      isemployeeread  = $3,
      isemployeedelete  = $4, 
      isprojectcreate = $5,
      isprojectupdate  = $6,
      isprojectread  = $7, 
      isprojectdelete  = $8,
      iscompetencycreate =$9,
      iscompetencyread =$10 ,
      iscompetencyupdate =$11,
      iscompetencydelete=$12,
      ispracticecreate=$13,
      ispracticeread=$14,
      ispracticeupdate=$15,
      ispracticedelete =$16,
      iscsvupload=$17,
      isprofileupdate=$18, 
       updated_at = NOW()
      WHERE employee_id = $19
      RETURNING *;
    `;
        const values = [
            accessData.isemployeecreate,
            accessData.isemployeeupdate,
            accessData.isemployeeread,
            accessData.isemployeedelete,
            accessData.isprojectcreate,
            accessData.isprojectupdate,
            accessData.isprojectread,
            accessData.isprojectdelete,
            accessData.iscompetencycreate,
            accessData.iscompetencyread,
            accessData.iscompetencyupdate,
            accessData.iscompetencydelete,
            accessData.ispracticecreate,
            accessData.ispracticeread,
            accessData.ispracticeupdate,
            accessData.ispracticedelete,
            accessData.iscsvupload,
            accessData.isprofileupdate,
            id
        ];
        return await this.executeQuery(tenantName, query, values);
    }
};
exports.accessLabelQueriesService = accessLabelQueriesService;
exports.accessLabelQueriesService = accessLabelQueriesService = __decorate([
    (0, common_1.Injectable)()
], accessLabelQueriesService);
//# sourceMappingURL=accessQueries.service.js.map