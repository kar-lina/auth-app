export interface LoginUserPayloadInterface {
  email: string;
  password: string;
  twoFactorAuthenticationCode?: string;
}
export interface SignUpUserPayloadInterface extends LoginUserPayloadInterface {
  name: string;
}
export interface User {
  id: number;
  name: string;
  email: string;
  isTwoFactorAuthenticationEnabled: boolean;
  twoFactorAuthenticationSecretEnabledAt: Date | null;
}
