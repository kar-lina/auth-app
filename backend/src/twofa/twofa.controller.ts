import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { TwofaService } from './twofa.service';
import { AuthGuard } from '@nestjs/passport';
// import User from 'src/users/user.entity';
// import { UsersService } from 'src/users/users.service';

@Controller('2fa')
export class TwofaController {
  constructor(
    private readonly twofaService: TwofaService,
    // private usersService: UsersService,
  ) {}

  @Post('/turn-on')
  @UseGuards(AuthGuard('jwt'))
  async turnOnTwoFactorAuthentication(
    @Req() request,
    // @Body() body,
  ): Promise<{ otpauthUrl: string }> {
    console.log('request.user', request.user);
    return await this.twofaService.enableTwoFactorAuthenticationSecret(
      request.user,
    );
  }
  @Get('/qr-code')
  @UseGuards(AuthGuard('jwt'))
  async getQRCode(
    @Req() request,
  ): Promise<{ otpauthUrl: string; secret: string }> {
    console.log('request.user', request.user);
    return this.twofaService.generateQrCodeDataURL(
      request.user.email,
      request.user.twoFactorAuthenticationSecret,
    );
  }
  @Post('/turn-off')
  @UseGuards(AuthGuard('jwt'))
  async turnOffTwoFactorAuthentication(@Req() request, @Body() body) {
    const isCodeValid = this.twofaService.isTwoFactorAuthenticationCodeValid(
      body.twoFactorAuthenticationCode,
      request.user,
    );
    console.log(body.twoFactorAuthenticationCode, isCodeValid);
    if (!isCodeValid) {
      throw new UnauthorizedException('Wrong authentication code');
    }
    // await this.usersService.turnOffTwoFactorAuthentication(request.user.id);
  }
}
