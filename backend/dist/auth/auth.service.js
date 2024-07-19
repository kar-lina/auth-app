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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../users/user.entity");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcryptjs");
const twofa_service_1 = require("../twofa/twofa.service");
let AuthService = class AuthService {
    constructor(usersRepository, jwtService, twofaService) {
        this.usersRepository = usersRepository;
        this.jwtService = jwtService;
        this.twofaService = twofaService;
    }
    async signUp(signUpDto) {
        const { name, email, password } = signUpDto;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await this.usersRepository.findOne({
            where: { email },
        });
        if (user)
            throw new common_1.ConflictException('User with this email alredy exists');
        const newUser = this.usersRepository.create({
            name,
            email,
            password: hashedPassword,
        });
        await this.usersRepository.save(newUser);
        const token = this.jwtService.sign({ id: newUser.id });
        return { token };
    }
    async isPasswordMatch(password, userPassword) {
        return await bcrypt.compare(password, userPassword);
    }
    async login(loginDto) {
        const { email, password, twoFactorAuthenticationCode } = loginDto;
        const user = await this.usersRepository.findOne({
            where: { email },
        });
        if (!user)
            throw new common_1.UnauthorizedException('Invalid email or password!');
        if (!this.isPasswordMatch(password, user.password))
            throw new common_1.UnauthorizedException('Invalid email or password!');
        const isTwoFactorAuthenticationEnabled = user.isTwoFactorAuthenticationEnabled;
        const { name, twoFactorAuthenticationSecretEnabledAt, id } = user;
        if (isTwoFactorAuthenticationEnabled) {
            if (!twoFactorAuthenticationCode) {
                throw new common_1.HttpException('Enter authentication code', common_1.HttpStatus.FORBIDDEN);
            }
            else {
                const isCodeValid = this.twofaService.isTwoFactorAuthenticationCodeValid(twoFactorAuthenticationCode, user);
                if (!isCodeValid) {
                    throw new common_1.HttpException('Wrong authentication code', common_1.HttpStatus.FORBIDDEN);
                }
            }
        }
        const token = this.jwtService.sign({ id: user.id });
        return {
            token,
            data: {
                id,
                email,
                name,
                twoFactorAuthenticationSecretEnabledAt,
                isTwoFactorAuthenticationEnabled,
            },
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.default)),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => twofa_service_1.TwofaService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService,
        twofa_service_1.TwofaService])
], AuthService);
//# sourceMappingURL=auth.service.js.map