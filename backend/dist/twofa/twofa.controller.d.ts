import { TwofaService } from './twofa.service';
import { UsersService } from 'src/users/users.service';
export declare class TwofaController {
    private readonly twofaService;
    private usersService;
    constructor(twofaService: TwofaService, usersService: UsersService);
    turnOnTwoFactorAuthentication(request: any): Promise<{
        otpauthUrl: string;
    }>;
    turnOffTwoFactorAuthentication(request: any, body: any): Promise<void>;
}
