"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const project_controller_1 = require("./project.controller");
const project_service_1 = require("./project.service");
const projectQueries_service_1 = require("./projectQueries.service");
const tenant_entity_1 = require("../tenant/tenant.entity");
const user_service_1 = require("../user/user.service");
const employeeQueries_service_1 = require("../user/employeeQueries.service");
const competencyQueries_service_1 = require("../competency/competencyQueries.service");
const access_service_1 = require("../accesslabels/access.service");
const accessQueries_service_1 = require("../accesslabels/accessQueries.service");
const login_module_1 = require("../login/login.module");
let ProjectModule = class ProjectModule {
};
exports.ProjectModule = ProjectModule;
exports.ProjectModule = ProjectModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([tenant_entity_1.Tenant]),
            login_module_1.LoginModule
        ],
        controllers: [project_controller_1.ProjectController],
        providers: [project_service_1.ProjectService, projectQueries_service_1.ProjectQueriesService, user_service_1.UserService, employeeQueries_service_1.EmployeeQueriesService, competencyQueries_service_1.CompetencyQueriesService, access_service_1.accessLabelService, accessQueries_service_1.accessLabelQueriesService],
    })
], ProjectModule);
//# sourceMappingURL=project.module.js.map