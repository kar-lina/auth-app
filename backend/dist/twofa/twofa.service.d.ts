import User from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';
import { ConfigService } from '@nestjs/config';
export declare class TwofaService {
    private usersService;
    private readonly configService;
    constructor(usersService: UsersService, configService: ConfigService);
    generateTwoFactorAuthenticationSecret(user: User): Promise<{
        otpauthUrl: string;
        secret: string;
    }>;
    enableTwoFactorAuthenticationSecret(user: User): Promise<{
        otpauthUrl: string;
        secret: string;
    }>;
    generateQrCodeDataURL(userEmail: string, secret: string, serviceName?: any): Promise<{
        otpauthUrl: string;
        secret: string;
    }>;
    isTwoFactorAuthenticationCodeValid(twoFactorAuthenticationCode: string, user: User): boolean;
}
