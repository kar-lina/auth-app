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
exports.TwofaController = void 0;
const common_1 = require("@nestjs/common");
const twofa_service_1 = require("./twofa.service");
const passport_1 = require("@nestjs/passport");
let TwofaController = class TwofaController {
    constructor(twofaService) {
        this.twofaService = twofaService;
    }
    async turnOnTwoFactorAuthentication(request) {
        return await this.twofaService.enableTwoFactorAuthenticationSecret(request.user);
    }
    async getQRCode(request) {
        console.log('request.user', request.user);
        return this.twofaService.generateQrCodeDataURL(request.user.email, request.user.twoFactorAuthenticationSecret);
    }
    async turnOffTwoFactorAuthentication(request, body) {
        const isCodeValid = this.twofaService.isTwoFactorAuthenticationCodeValid(body.twoFactorAuthenticationCode, request.user);
        console.log(body.twoFactorAuthenticationCode, isCodeValid);
        if (!isCodeValid) {
            throw new common_1.HttpException('Wrong authentication code', common_1.HttpStatus.FORBIDDEN);
        }
        return await this.twofaService.disableTwoFactorAuthenticationSecret(request.user);
    }
};
exports.TwofaController = TwofaController;
__decorate([
    (0, common_1.Post)('/turn-on'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TwofaController.prototype, "turnOnTwoFactorAuthentication", null);
__decorate([
    (0, common_1.Get)('/qr-code'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TwofaController.prototype, "getQRCode", null);
__decorate([
    (0, common_1.Post)('/turn-off'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TwofaController.prototype, "turnOffTwoFactorAuthentication", null);
exports.TwofaController = TwofaController = __decorate([
    (0, common_1.Controller)('2fa'),
    __metadata("design:paramtypes", [twofa_service_1.TwofaService])
], TwofaController);
//# sourceMappingURL=twofa.controller.js.map