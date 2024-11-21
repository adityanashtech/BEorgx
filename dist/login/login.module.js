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
exports.LoginModule = void 0;
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const login_service_1 = require("./login.service");
const jwt_stratergy_1 = require("./strategy/jwt.stratergy");
const login_controller_1 = require("./login.controller");
const accessQueries_service_1 = require("../accesslabels/accessQueries.service");
const access_service_1 = require("../accesslabels/access.service");
const typeorm_1 = require("@nestjs/typeorm");
const tenant_entity_1 = __importDefault(require("../tenant/tenant.entity"));
const user_service_1 = require("../user/user.service");
const employeeQueries_service_1 = require("../user/employeeQueries.service");
const competencyQueries_service_1 = require("../competency/competencyQueries.service");
let LoginModule = class LoginModule {
};
exports.LoginModule = LoginModule;
exports.LoginModule = LoginModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([tenant_entity_1.default]),
            config_1.ConfigModule.forRoot(),
            passport_1.PassportModule,
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => ({
                    secret: configService.get('JWT_SECRET'),
                    signOptions: { expiresIn: '60m' },
                }),
                inject: [config_1.ConfigService],
            }),
        ],
        providers: [login_service_1.LoginService, jwt_stratergy_1.JwtStrategy, accessQueries_service_1.accessLabelQueriesService, access_service_1.accessLabelService, user_service_1.UserService, employeeQueries_service_1.EmployeeQueriesService, competencyQueries_service_1.CompetencyQueriesService],
        exports: [jwt_1.JwtModule],
        controllers: [login_controller_1.LoginController],
    })
], LoginModule);
//# sourceMappingURL=login.module.js.map