import { TwofaService } from './twofa.service';
export declare class TwofaController {
    private readonly twofaService;
    constructor(twofaService: TwofaService);
    turnOnTwoFactorAuthentication(request: any): Promise<{
        otpauthUrl: string;
    }>;
    getQRCode(request: any): Promise<{
        otpauthUrl: string;
        secret: string;
    }>;
    turnOffTwoFactorAuthentication(request: any, body: any): Promise<void>;
}
