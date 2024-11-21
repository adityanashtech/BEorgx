"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tenant_entity_1 = require("./tenant.entity");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const bcrypt = __importStar(require("bcrypt"));
let TenantService = class TenantService {
    constructor(tenantRepository) {
        this.tenantRepository = tenantRepository;
    }
    async createTenant(tenantData) {
        const existingTenantName = await this.tenantRepository.findOne({
            where: { tenant_name: tenantData.tenant_name },
        });
        if (existingTenantName) {
            return {
                message: `Tenant with name '${tenantData.tenant_name}' already exists.`,
                data: undefined,
            };
        }
        const existingTenantEmail = await this.tenantRepository.findOne({
            where: { tenant_email: tenantData.tenant_email },
        });
        if (existingTenantEmail) {
            return {
                message: `Tenant with email '${tenantData.tenant_email}' already exists.`,
                data: undefined,
            };
        }
        const hashPassword = (password) => {
            try {
                return bcrypt.hash(password, 10);
            }
            catch (err) {
                throw new Error(`Error in password encryption: ${err.message}`);
            }
        };
        if (tenantData.isRegistered) {
            tenantData.status = 'pending';
        }
        let tenantCode;
        let existingTenantCode;
        do {
            tenantCode = Math.floor(1000 + Math.random() * 9000).toString();
            existingTenantCode = await this.tenantRepository.findOne({
                where: { tenant_code: tenantCode },
            });
        } while (existingTenantCode);
        const tenant = new tenant_entity_1.Tenant();
        tenant.tenant_name = tenantData.tenant_name.toLocaleLowerCase();
        tenant.tenant_email = tenantData.tenant_email;
        tenant.role = tenantData.role;
        tenant.tenant_code = tenantCode;
        tenant.password = tenantData.password;
        tenant.status = tenantData.status;
        tenant.location = tenantData.location;
        tenant.subscription_details = tenantData.subscription_details;
        tenant.company_type = tenantData.company_type;
        tenant.image = tenantData.image;
        tenant.isRegistered = tenantData.isRegistered;
        await this.tenantRepository.save(tenant);
        await this.createDatabase(tenant.tenant_name);
        await this.addTenantConfig(tenant.tenant_name);
        return { message: 'Tenant created successfully.', data: tenant };
    }
    async createDatabase(databaseName) {
        const queryRunner = this.tenantRepository.manager.connection.createQueryRunner();
        let connection;
        try {
            await queryRunner.connect();
            connection = this.tenantRepository.manager.connection;
            await queryRunner.query(`CREATE DATABASE "${databaseName}";`);
            const newConnection = await this.createConnectionToDatabase(databaseName);
            const newQueryRunner = newConnection.createQueryRunner();
            await newQueryRunner.connect();
            await newQueryRunner.query(`
        CREATE TABLE IF NOT EXISTS public.employee (
          id SERIAL PRIMARY KEY,
          first_name VARCHAR(255) NOT NULL,
          last_name VARCHAR(255),
          designation VARCHAR(255),
          role VARCHAR(255),
          gender VARCHAR(255),
          email VARCHAR(255) NOT NULL,
          password VARCHAR(255) NOT NULL,
          image VARCHAR(255),
          location VARCHAR(255),
          marital_status VARCHAR(255),
          blood_group VARCHAR(255),
          phy_disable VARCHAR(255),
          pan_card VARCHAR(255),
          aadhaar_card VARCHAR(255),
          uan VARCHAR(255),
          personal_email VARCHAR(255),
          phone VARCHAR(255),
          whatsapp VARCHAR(255),
          wordpress VARCHAR(255),
          github VARCHAR(255),
          bitbucket VARCHAR(255),
          work_phone VARCHAR(255),
          address VARCHAR(255),
          tenant_id INTEGER NOT NULL,
          studio_name VARCHAR(255),
          project INTEGER,
          status VARCHAR(255) DEFAULT 'active',
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
        ALTER TABLE IF EXISTS public.employee OWNER TO postgres;
      `);
            await newQueryRunner.query(`
        CREATE TABLE IF NOT EXISTS public.practice (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        total_employee INTEGER,
        status VARCHAR(255) DEFAULT 'active',
        studio_head VARCHAR(255),
        location VARCHAR(255),
        code VARCHAR(255),
        image TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP );
      `);
            await newQueryRunner.query(`
        CREATE TABLE IF NOT EXISTS public.competency (
          id SERIAL PRIMARY KEY,
          competency_name VARCHAR(255) NOT NULL, 
          competency_code VARCHAR(255) NOT NULL,
          competency_admin_email VARCHAR(255) NOT NULL, 
          status VARCHAR(255), 
          total_project INTEGER,
          competency_head INTEGER,
          description TEXT,
          image TEXT, 
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `);
            await newQueryRunner.query(`CREATE TABLE IF NOT EXISTS public.competency_skills (
         id SERIAL PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          technology VARCHAR(255),
          role VARCHAR(255),
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
           updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);
        `);
            await newQueryRunner.query(`
        CREATE TABLE IF NOT EXISTS public.employee_skills(
        id SERIAL PRIMARY KEY,
        employee_id INTEGER NOT NULL,
        skill_id INTEGER,
        skill_name VARCHAR(255) NOT NULL,
        level INTEGER NOT NULL,
        studio_id INTEGER NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
        ALTER TABLE IF EXISTS public.employee_skills
        OWNER TO postgres;
      `);
            await newQueryRunner.query(`CREATE TABLE IF NOT EXISTS public.project(
        id SERIAL PRIMARY KEY,
        title VARCHAR(255),
        description TEXT,
        timeline VARCHAR(255),
        project_manager INTEGER,
        team_lead INTEGER,
        developers INTEGER[],
        project_date VARCHAR(255),
        status VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
        );
        `);
            await newQueryRunner.query(`CREATE TABLE IF NOT EXISTS public.skill (
         id SERIAL PRIMARY KEY,
         skill_name VARCHAR(255) NOT NULL, 
         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
         updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP );
        `);
            await newQueryRunner.query(`CREATE TABLE IF NOT EXISTS public.designation(
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL, 
        description TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP );
        `);
            await newQueryRunner.query(`CREATE TABLE iF NOT EXISTS public.project_employees(
        id SERIAL PRIMARY KEY,
        project_id INTEGER NOT NULL,
        employee_id INTEGER NOT NULL,
        role VARCHAR(255),
        billable BOOLEAN,
        billable_percentage VARCHAR (255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
        `);
            await newQueryRunner.query(`
        CREATE TABLE IF NOT EXISTS public.access_labels (
          id SERIAL PRIMARY KEY,
          employee_id INTEGER NOT NULL,
           isEmployeeCreate BOOLEAN,
           isEmployeeUpdate BOOLEAN,
           isEmployeeRead BOOLEAN,
           isEmployeeDelete BOOLEAN,
           isProjectCreate BOOLEAN,
           isProjectUpdate BOOLEAN,
           isProjectRead BOOLEAN,
           isProjectDelete BOOLEAN,
           isCompetencyCreate BOOLEAN,
           isCompetencyRead BOOLEAN,
           isCompetencyUpdate BOOLEAN,
           isCompetencyDelete BOOLEAN,
           isPracticeCreate BOOLEAN,
           isPracticeRead BOOLEAN,
           isPracticeUpdate BOOLEAN,
           isPracticeDelete BOOLEAN,
           isCsvUpload BOOLEAN,
           isProfileUpdate BOOLEAN,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `);
            console.log(`Database '${databaseName}' created successfully.`);
        }
        catch (err) {
            console.error('Error creating database or table:', err);
        }
        finally {
            if (queryRunner) {
                await queryRunner.release();
            }
            if (connection && connection.isConnected) {
                await connection.close();
            }
        }
    }
    async createConnectionToDatabase(databaseName) {
        const newDataSource = new typeorm_2.DataSource({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'root',
            database: databaseName,
        });
        await newDataSource.initialize();
        return newDataSource;
    }
    async addTenantConfig(databaseName) {
        const dbConfigPath = path.join(__dirname, '../../src/dbConfig.json');
        try {
            const data = fs.readFileSync(dbConfigPath, 'utf8');
            let config;
            try {
                config = JSON.parse(data);
                if (!config.tenants || !Array.isArray(config.tenants)) {
                    config.tenants = [];
                }
            }
            catch (err) {
                config = { tenants: [] };
            }
            const newTenantConfig = {
                host: 'localhost',
                port: 5432,
                user: 'postgres',
                password: 'root',
                database: databaseName,
            };
            config.tenants.push(newTenantConfig);
            fs.writeFileSync(dbConfigPath, JSON.stringify(config, null, 2), 'utf8');
            console.log('Tenant configuration added successfully');
        }
        catch (err) {
            console.error('Error adding tenant configuration:', err);
            throw new Error('Failed to add tenant configuration');
        }
    }
};
exports.TenantService = TenantService;
exports.TenantService = TenantService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tenant_entity_1.Tenant)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TenantService);
//# sourceMappingURL=tenant.service.js.map