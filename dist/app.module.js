"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tenant_module_1 = require("./tenant/tenant.module");
const login_module_1 = require("./login/login.module");
const admin_module_1 = require("./admin/admin.module");
const user_module_1 = require("./user/user.module");
const competency_module_1 = require("./competency/competency.module");
const practice_module_1 = require("./practice/practice.module");
const skills_module_1 = require("./Skills/skills.module");
const employeeSkill_module_1 = require("./employeeSkill/employeeSkill.module");
const subscription_module_1 = require("./subscription/subscription.module");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const competencySkill_module_1 = require("./competencySkill/competencySkill.module");
const project_module_1 = require("./project/project.module");
const file_module_1 = require("./fileUpload/file.module");
const access_module_1 = require("./accesslabels/access.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'eventx.c7uswg62u6zg.eu-north-1.rds.amazonaws.com',
                port: 5432,
                username: 'postgres',
                password: 'india0192',
                database: 'eventxbe',
                synchronize: true,
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                ssl: {
                    rejectUnauthorized: false,
                },
            }),
            tenant_module_1.TenantModule,
            login_module_1.LoginModule,
            admin_module_1.AdminModule,
            user_module_1.UserModule,
            competency_module_1.CompetencyModule,
            practice_module_1.PracticeModule,
            subscription_module_1.SubscriptionModule,
            skills_module_1.SkillModule,
            employeeSkill_module_1.employeeSkillModule,
            competencySkill_module_1.competencySkillModule,
            file_module_1.FileModule,
            project_module_1.ProjectModule,
            access_module_1.AccessLabelsModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map