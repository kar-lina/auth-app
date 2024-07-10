import User from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';
export declare class TwofaService {
    private usersService;
    constructor(usersService: UsersService);
    generateTwoFactorAuthenticationSecret(user: User): Promise<{
        otpauthUrl: string;
    }>;
    enableTwoFactorAuthenticationSecret(user: User): Promise<{
        otpauthUrl: string;
    }>;
    generateQrCodeDataURL(userEmail: string, secret: string, serviceName?: string): Promise<string>;
    isTwoFactorAuthenticationCodeValid(twoFactorAuthenticationCode: string, user: User): boolean;
}
