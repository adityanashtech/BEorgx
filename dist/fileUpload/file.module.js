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
exports.FileModule = void 0;
const common_1 = require("@nestjs/common");
const file_controller_1 = require("./file.controller");
const user_service_1 = require("./../user/user.service");
const typeorm_1 = require("@nestjs/typeorm");
const tenant_entity_1 = __importDefault(require("../tenant/tenant.entity"));
const employeeQueries_service_1 = require("../user/employeeQueries.service");
const competency_service_1 = require("./../competency/competency.service");
const competencyQueries_service_1 = require("./../competency/competencyQueries.service");
const fileQueries_service_1 = require("./fileQueries.service");
const file_services_1 = require("./file.services");
const access_service_1 = require("../accesslabels/access.service");
const accessQueries_service_1 = require("../accesslabels/accessQueries.service");
const login_module_1 = require("../login/login.module");
let FileModule = class FileModule {
};
exports.FileModule = FileModule;
exports.FileModule = FileModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([tenant_entity_1.default]), login_module_1.LoginModule],
        controllers: [file_controller_1.FilesController],
        providers: [user_service_1.UserService, employeeQueries_service_1.EmployeeQueriesService, competencyQueries_service_1.CompetencyQueriesService, competency_service_1.CompetencyService, fileQueries_service_1.fileQueriesService, file_services_1.fileService, access_service_1.accessLabelService, accessQueries_service_1.accessLabelQueriesService]
    })
], FileModule);
//# sourceMappingURL=file.module.js.map