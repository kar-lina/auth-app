import { Inject, Injectable, forwardRef } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
import { authenticator } from 'otplib';
import User from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';
import { toDataURL } from 'qrcode';

@Injectable()
export class TwofaService {
  constructor(
    @Inject(forwardRef(() => UsersService)) private usersService: UsersService,
    // private jwtService: JwtService,
  ) {}
  async generateTwoFactorAuthenticationSecret(user: User) {
    const secret = authenticator.generateSecret();

    // await this.usersService.setTwoFactorAuthenticationSecret(secret, user.id);

    return {
      otpauthUrl: await this.generateQrCodeDataURL(
        user.email,
        'AUTH_APP_NAME',
        secret,
      ),
    };
  }

  async enableTwoFactorAuthenticationSecret(user: User) {
    if (user.twoFactorAuthenticationSecret) {
      // await this.usersService.turnOnTwoFactorAuthentication(user.id);
      return {
        otpauthUrl: await this.generateQrCodeDataURL(
          user.email,
          'AUTH_APP_NAME',
          user.twoFactorAuthenticationSecret,
        ),
      };
    } else {
      return await this.generateTwoFactorAuthenticationSecret(user);
    }
  }

  async generateQrCodeDataURL(
    userEmail: string,
    secret: string,
    serviceName = 'AUTH_APP_NAME',
  ) {
    const otpauthUrl = authenticator.keyuri(userEmail, serviceName, secret);
    return await toDataURL(otpauthUrl);
  }
  isTwoFactorAuthenticationCodeValid(
    twoFactorAuthenticationCode: string,
    user: User,
  ) {
    return authenticator.verify({
      token: twoFactorAuthenticationCode,
      secret: user.twoFactorAuthenticationSecret,
    });
  }
}
