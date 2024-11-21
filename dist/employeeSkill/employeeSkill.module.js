"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeSkillModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const employeeSkill_controller_1 = require("./employeeSkill.controller");
const employeeSkill_service_1 = require("./employeeSkill.service");
const employeeSkillQueries_service_1 = require("./employeeSkillQueries.service");
const tenant_entity_1 = require("../tenant/tenant.entity");
const skillsQueries_service_1 = require("./../Skills/skillsQueries.service");
const employeeQueries_service_1 = require("./../user/employeeQueries.service");
const competency_service_1 = require("./../competency/competency.service");
const competencyQueries_service_1 = require("./../competency/competencyQueries.service");
const accessQueries_service_1 = require("../accesslabels/accessQueries.service");
const access_service_1 = require("../accesslabels/access.service");
const user_service_1 = require("../user/user.service");
const login_module_1 = require("../login/login.module");
let employeeSkillModule = class employeeSkillModule {
};
exports.employeeSkillModule = employeeSkillModule;
exports.employeeSkillModule = employeeSkillModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([tenant_entity_1.Tenant]),
            login_module_1.LoginModule
        ],
        controllers: [employeeSkill_controller_1.employeeSkillController],
        providers: [employeeSkill_service_1.employeeSkillService, employeeSkillQueries_service_1.employeeSkillQueriesService, skillsQueries_service_1.SkillsQueriesService, employeeQueries_service_1.EmployeeQueriesService, user_service_1.UserService, competency_service_1.CompetencyService, competencyQueries_service_1.CompetencyQueriesService, accessQueries_service_1.accessLabelQueriesService, access_service_1.accessLabelService],
    })
], employeeSkillModule);
//# sourceMappingURL=employeeSkill.module.js.map