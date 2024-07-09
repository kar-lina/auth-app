import { JwtService } from '@nestjs/jwt';
import User from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';
export declare class TwofaService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    generateTwoFactorAuthenticationSecret(user: User): Promise<{
        otpauthUrl: string;
    }>;
    enableTwoFactorAuthenticationSecret(user: User): Promise<{
        otpauthUrl: string;
    }>;
    generateQrCodeDataURL(userEmail: string, secret: string, serviceName?: string): Promise<string>;
    isTwoFactorAuthenticationCodeValid(twoFactorAuthenticationCode: string, user: User): boolean;
}
