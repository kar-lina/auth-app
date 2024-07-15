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
exports.UsersService = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./user.entity");
const typeorm_2 = require("typeorm");
const common_1 = require("@nestjs/common");
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async getAllUsers() {
        const users = await this.usersRepository.find();
        return users;
    }
    async getUserById(id) {
        const user = await this.usersRepository.findOne({
            where: {
                id: id,
            },
        });
        if (user) {
            const { name, twoFactorAuthenticationSecretEnabledAt, isTwoFactorAuthenticationEnabled, id, } = user;
            return {
                id,
                name,
                twoFactorAuthenticationSecretEnabledAt,
                isTwoFactorAuthenticationEnabled,
            };
        }
        throw new common_1.NotFoundException('Could not find the user');
    }
    async createUser(newUser) {
        const user = this.usersRepository.create(newUser);
        await this.usersRepository.save({
            name: newUser.name,
            email: newUser.email,
            password: newUser.password,
        });
        const { name, twoFactorAuthenticationSecretEnabledAt, isTwoFactorAuthenticationEnabled, } = user;
        return {
            name,
            twoFactorAuthenticationSecretEnabledAt,
            isTwoFactorAuthenticationEnabled,
        };
    }
    async deleteUserById(id) {
        const user = await this.usersRepository.findOne({
            where: {
                id: id,
            },
        });
        if (!user)
            return null;
        await this.usersRepository.remove(user);
        return id;
    }
    async findUserById(userId) {
        return await this.usersRepository.findOne({
            where: {
                id: userId,
            },
        });
    }
    async findUserByEmail(email) {
        return await this.usersRepository.findOne({
            where: {
                email: email,
            },
        });
    }
    async setTwoFactorAuthenticationSecret(secret, userId) {
        const user = await this.findUserById(userId);
        if (!user)
            return null;
        user.twoFactorAuthenticationSecret = secret;
        user.isTwoFactorAuthenticationEnabled = true;
        user.twoFactorAuthenticationSecretEnabledAt = Date();
        await this.usersRepository.save(user);
    }
    async turnOnTwoFactorAuthentication(userId) {
        const user = await this.findUserById(userId);
        if (!user)
            return null;
        user.isTwoFactorAuthenticationEnabled = true;
        user.twoFactorAuthenticationSecretEnabledAt = Date();
        await this.usersRepository.save(user);
    }
    async turnOffTwoFactorAuthentication(userId) {
        const user = await this.findUserById(userId);
        if (!user)
            return null;
        user.isTwoFactorAuthenticationEnabled = false;
        user.twoFactorAuthenticationSecretEnabledAt = null;
        await this.usersRepository.save(user);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.default)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map