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
exports.FilesController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const fs = __importStar(require("fs"));
const csv_parser_1 = __importDefault(require("csv-parser"));
const multer_config_1 = require("./multer.config");
const tenant_entity_1 = require("../tenant/tenant.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const file_services_1 = require("./file.services");
const jwt_auth_guard_1 = require("../login/guards/jwt-auth.guard");
const auth_guard_1 = require("../login/guards/auth.guard");
const roles_decorator_1 = require("../login/decorators/roles.decorator");
let FilesController = class FilesController {
    constructor(tenantRepository, fileService) {
        this.tenantRepository = tenantRepository;
        this.fileService = fileService;
    }
    async uploadFile(req, file) {
        const tenantCode = req.headers.tenant_code;
        if (!file) {
            throw new common_1.BadRequestException('No file uploaded');
        }
        const results = [];
        const readStream = fs.createReadStream(file.path);
        const parseStream = readStream.pipe((0, csv_parser_1.default)());
        try {
            for await (const data of parseStream) {
                results.push(data);
            }
            let final = await this.fileService.uplaodFile(tenantCode, results);
            if (final.length > 0) {
                fs.unlinkSync(file.path);
                return { messgae: 'Employees has been updated successfully', data: final };
            }
        }
        catch (error) {
            fs.unlinkSync(file.path);
            throw new common_1.BadRequestException(`Failed to parse csv or upload data in database, ${error.message}`);
        }
    }
};
exports.FilesController = FilesController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, auth_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'employee'),
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', multer_config_1.multerConfig)),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "uploadFile", null);
exports.FilesController = FilesController = __decorate([
    (0, common_1.Controller)('files'),
    __param(0, (0, typeorm_1.InjectRepository)(tenant_entity_1.Tenant)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        file_services_1.fileService])
], FilesController);
//# sourceMappingURL=file.controller.js.map