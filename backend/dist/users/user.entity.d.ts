declare class User {
    id: number;
    name: string;
    email: string;
    password: string;
    twoFactorAuthenticationSecret: string | null;
    isTwoFactorAuthenticationEnabled: boolean;
    twoFactorAuthenticationSecretEnabledAt: string | null;
}
export default User;
