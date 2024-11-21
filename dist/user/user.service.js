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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tenant_entity_1 = require("../tenant/tenant.entity");
const employeeQueries_service_1 = require("./employeeQueries.service");
const Joi = __importStar(require("joi"));
const bcrypt_1 = __importDefault(require("bcrypt"));
let UserService = class UserService {
    constructor(tenantRepository, employeeQueriesService) {
        this.tenantRepository = tenantRepository;
        this.employeeQueriesService = employeeQueriesService;
    }
    async createUser(tenantCode, userData) {
        const tenant = await this.tenantRepository.findOne({
            where: { tenant_code: tenantCode },
        });
        if (!tenant) {
            throw new Error('Tenant not found');
        }
        const nameTenant = tenant.tenant_name;
        const hashPassword = (password) => {
            try {
                return bcrypt_1.default.hash(password, 10);
            }
            catch (err) {
                throw new Error(`Error in password encryption: ${err.message}`);
            }
        };
        userData.password = await hashPassword(userData.password);
        userData.tenant_id = tenant.id;
        userData.tenant_code = tenant.tenant_code;
        try {
            const result = await this.employeeQueriesService.createEmployee(nameTenant, userData);
            return result;
        }
        catch (error) {
            throw new Error(`Failed to create user: ${error.message}`);
        }
    }
    async getAllUsers(tenantCode) {
        const tenant = await this.tenantRepository.findOne({
            where: { tenant_code: tenantCode },
        });
        if (!tenant) {
            throw new Error('Tenant not found');
        }
        const nameTenant = tenant.tenant_name;
        try {
            const users = await this.employeeQueriesService.getAllEmployees(nameTenant);
            return users;
        }
        catch (error) {
            throw new Error(`Failed to get all users: ${error.message}`);
        }
    }
    async getAllDesignations(tenantCode) {
        const tenant = await this.tenantRepository.findOne({
            where: { tenant_code: tenantCode },
        });
        if (!tenant) {
            throw new Error('Tenant not found');
        }
        const nameTenant = tenant.tenant_name;
        try {
            const designations = await this.employeeQueriesService.getAllDesignations(nameTenant);
            return designations;
        }
        catch (error) {
            throw new Error(`Failed to get all designations: ${error.message}`);
        }
    }
    async getUserById(id, tenantCode) {
        const tenant = await this.tenantRepository.findOne({
            where: { tenant_code: tenantCode },
        });
        if (!tenant) {
            throw new Error('Tenant not found');
        }
        const nameTenant = tenant.tenant_name;
        try {
            const result = await this.employeeQueriesService.getUserById(nameTenant, id);
            return result;
        }
        catch (error) {
            throw new Error(`Failed to get user by ID: ${error.message}`);
        }
    }
    async updateUser(id, tenantCode, userData) {
        const tenant = await this.tenantRepository.findOne({
            where: { tenant_code: tenantCode },
        });
        if (!tenant) {
            throw new common_1.BadRequestException('Tenant not found');
        }
        const nameTenant = tenant.tenant_name;
        try {
            const result = await this.employeeQueriesService.updateEmployee(nameTenant, id, userData);
            return result;
        }
        catch (error) {
            throw new Error(`Failed to update user: ${error.message}`);
        }
    }
    async updateCompetencyandReporting(id, tenantCode, userData) {
        const tenant = await this.tenantRepository.findOne({
            where: { tenant_code: tenantCode },
        });
        if (!tenant) {
            throw new common_1.BadRequestException('Tenant not found');
        }
        const nameTenant = tenant.tenant_name;
        try {
            const result = await this.employeeQueriesService.updateCompetencyAndReporting(nameTenant, id, userData);
            return result;
        }
        catch (error) {
            throw new Error(`Failed to update user: ${error.message}`);
        }
    }
    async deleteUser(id, tenantCode) {
        const tenant = await this.tenantRepository.findOne({
            where: { tenant_code: tenantCode },
        });
        if (!tenant) {
            throw new common_1.BadRequestException('Tenant not found');
        }
        const nameTenant = tenant.tenant_name;
        try {
            const result = await this.employeeQueriesService.deleteEmployee(nameTenant, id);
            return result;
        }
        catch (error) {
            throw new Error(`Failed to delete user: ${error.message}`);
        }
    }
    async filterUsersByLocation(tenantCode, location) {
        const tenant = await this.tenantRepository.findOne({
            where: { tenant_code: tenantCode },
        });
        if (!tenant) {
            throw new common_1.BadRequestException('Tenant not found');
        }
        const schema = Joi.object({
            location: Joi.string().required(),
        });
        const { error } = schema.validate({ location });
        if (error) {
            throw new common_1.BadRequestException(error.details[0].message.replace(/\"(\w+)\"/g, '$1'));
        }
        const nameTenant = tenant.tenant_name;
        try {
            const result = await this.employeeQueriesService.filterUsersByLocation(nameTenant, location);
            return result;
        }
        catch (error) {
            throw new Error(`Failed to filter users: ${error.message}`);
        }
    }
    async filterUsersByName(tenantCode, name) {
        const tenant = await this.tenantRepository.findOne({
            where: { tenant_code: tenantCode },
        });
        if (!tenant) {
            throw new common_1.BadRequestException('Tenant not found');
        }
        const schema = Joi.object({
            name: Joi.string().required(),
        });
        const { error } = schema.validate({ name });
        if (error) {
            throw new common_1.BadRequestException(error.details[0].message.replace(/\"(\w+)\"/g, '$1'));
        }
        const nameTenant = tenant.tenant_name;
        try {
            const result = await this.employeeQueriesService.filterUsersByName(nameTenant, name);
            return result;
        }
        catch (error) {
            throw new Error(`Failed to filter users: ${error.message}`);
        }
    }
    async checkUsersByEmail(email, tenantName) {
        const tenant = await this.tenantRepository.findOne({
            where: { tenant_code: tenantName },
        });
        if (!tenant) {
            throw new common_1.BadRequestException('Tenant not found');
        }
        const nameTenant = tenant.tenant_name;
        try {
            const result = await this.employeeQueriesService.checkUserByEmail(nameTenant, email);
            return result;
        }
        catch (error) {
            throw new Error(`Failed to filter users: ${error.message}`);
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tenant_entity_1.Tenant)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        employeeQueries_service_1.EmployeeQueriesService])
], UserService);
//# sourceMappingURL=user.service.js.map