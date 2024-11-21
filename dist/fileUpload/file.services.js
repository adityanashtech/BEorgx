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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileService = void 0;
const common_1 = require("@nestjs/common");
const fileQueries_service_1 = require("./fileQueries.service");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tenant_entity_1 = require("../tenant/tenant.entity");
const user_service_1 = require("./../user/user.service");
let fileService = class fileService {
    constructor(tenantRepository, fileQueriesService, userService) {
        this.tenantRepository = tenantRepository;
        this.fileQueriesService = fileQueriesService;
        this.userService = userService;
    }
    async uplaodFile(tenantCode, results) {
        const tenant = await this.tenantRepository.findOne({
            where: { tenant_code: tenantCode },
        });
        if (!tenant) {
            throw new common_1.NotFoundException('Tenant not found');
        }
        let nameTenant = tenant.tenant_name;
        let datas = [];
        let emp = [];
        if (results.length > 0) {
            for (let item = 0; item < results.length; item++) {
                let finalResult = await this.fileQueriesService.checkEmployee(nameTenant, results[item]);
                if (finalResult && finalResult.message) {
                    datas.push({
                        name: results[item].first_name,
                        message: finalResult.message,
                        email: finalResult.message == "User with this email already exists. Please use another email." ? results[item].email : ""
                    });
                }
            }
            if (datas.length > 0) {
                let errors = { datas };
                throw new common_1.BadRequestException(`Incorrect data for ${JSON.stringify(errors)} `);
            }
            else {
                for (let item = 0; item < results.length; item++) {
                    emp.push(await this.userService.createUser(tenantCode, results[item]));
                }
            }
            if (emp.length > 0) {
                return emp;
            }
        }
    }
};
exports.fileService = fileService;
exports.fileService = fileService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tenant_entity_1.Tenant)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        fileQueries_service_1.fileQueriesService,
        user_service_1.UserService])
], fileService);
//# sourceMappingURL=file.services.js.map