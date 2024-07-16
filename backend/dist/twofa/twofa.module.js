"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwofaModule = void 0;
const common_1 = require("@nestjs/common");
const twofa_service_1 = require("./twofa.service");
const twofa_controller_1 = require("./twofa.controller");
const user_entity_1 = require("../users/user.entity");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const users_module_1 = require("../users/users.module");
let TwofaModule = class TwofaModule {
};
exports.TwofaModule = TwofaModule;
exports.TwofaModule = TwofaModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.default]), config_1.ConfigModule, users_module_1.UsersModule],
        controllers: [twofa_controller_1.TwofaController],
        providers: [twofa_service_1.TwofaService],
        exports: [twofa_service_1.TwofaService],
    })
], TwofaModule);
//# sourceMappingURL=twofa.module.js.map