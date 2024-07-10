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
exports.TwofaService = void 0;
const common_1 = require("@nestjs/common");
const otplib_1 = require("otplib");
const users_service_1 = require("../users/users.service");
const qrcode_1 = require("qrcode");
let TwofaService = class TwofaService {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async generateTwoFactorAuthenticationSecret(user) {
        const secret = otplib_1.authenticator.generateSecret();
        return {
            otpauthUrl: await this.generateQrCodeDataURL(user.email, 'AUTH_APP_NAME', secret),
        };
    }
    async enableTwoFactorAuthenticationSecret(user) {
        if (user.twoFactorAuthenticationSecret) {
            return {
                otpauthUrl: await this.generateQrCodeDataURL(user.email, 'AUTH_APP_NAME', user.twoFactorAuthenticationSecret),
            };
        }
        else {
            return await this.generateTwoFactorAuthenticationSecret(user);
        }
    }
    async generateQrCodeDataURL(userEmail, secret, serviceName = 'AUTH_APP_NAME') {
        const otpauthUrl = otplib_1.authenticator.keyuri(userEmail, serviceName, secret);
        return await (0, qrcode_1.toDataURL)(otpauthUrl);
    }
    isTwoFactorAuthenticationCodeValid(twoFactorAuthenticationCode, user) {
        return otplib_1.authenticator.verify({
            token: twoFactorAuthenticationCode,
            secret: user.twoFactorAuthenticationSecret,
        });
    }
};
exports.TwofaService = TwofaService;
exports.TwofaService = TwofaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)((0, common_1.forwardRef)(() => users_service_1.UsersService))),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], TwofaService);
//# sourceMappingURL=twofa.service.js.map