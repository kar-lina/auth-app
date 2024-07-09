import {
  Body,
  Controller,
  Post,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { TwofaService } from './twofa.service';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from 'src/users/users.service';

@Controller('twofa')
export class TwofaController {
  constructor(
    private readonly twofaService: TwofaService,
    private usersService: UsersService,
  ) {}

  @Post('/turn-on')
  @UseGuards(AuthGuard('jwt'))
  async turnOnTwoFactorAuthentication(
    @Req() request,
    // @Body() body,
  ): Promise<{ otpauthUrl: string }> {
    return await this.twofaService.enableTwoFactorAuthenticationSecret(
      request.user,
    );
  }
  @Post('/turn-off')
  @UseGuards(AuthGuard('jwt'))
  async turnOffTwoFactorAuthentication(@Req() request, @Body() body) {
    const isCodeValid = this.twofaService.isTwoFactorAuthenticationCodeValid(
      body.twoFactorAuthenticationCode,
      request.user,
    );
    if (!isCodeValid) {
      throw new UnauthorizedException('Wrong authentication code');
    }
    await this.usersService.turnOffTwoFactorAuthentication(request.user.id);
  }
}
