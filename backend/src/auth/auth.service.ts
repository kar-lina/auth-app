import {
  ConflictException,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  UnauthorizedException,
  forwardRef,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import User from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { SignUpDto } from './dto/signup.dto';
import * as bcrypt from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
import { TwofaService } from 'src/twofa/twofa.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
    @Inject(forwardRef(() => TwofaService)) private twofaService: TwofaService,
  ) {}

  async signUp(signUpDto: SignUpDto): Promise<{ token: string }> {
    const { name, email, password } = signUpDto;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.usersRepository.findOne({
      where: { email },
    });

    if (user) throw new ConflictException('User with this email alredy exists');

    const newUser = this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    await this.usersRepository.save(newUser);

    const token = this.jwtService.sign({ id: newUser.id });

    return { token };
  }

  async checkPassword(password: string, userPassword: string) {
    const isPasswordMatch = await bcrypt.compare(password, userPassword);
    // if (!isPasswordMatch)
      // throw new UnauthorizedException('Invalid email or password!');
    return isPasswordMatch;
  }

  async login(
    loginDto: LoginDto,
  ): Promise<{ token: string; data: Partial<User> }> {
    const { email, password, twoFactorAuthenticationCode } = loginDto;

    const user = await this.usersRepository.findOne({
      where: { email },
    });
    if (!user) throw new UnauthorizedException('Invalid email or password!');

    this.checkPassword(password, user.password);

    const isTwoFactorAuthenticationEnabled =
      user.isTwoFactorAuthenticationEnabled;
    const { name, twoFactorAuthenticationSecretEnabledAt, id } = user;

    if (isTwoFactorAuthenticationEnabled) {
      if (!twoFactorAuthenticationCode) {
        throw new HttpException(
          'Enter authentication code',
          HttpStatus.FORBIDDEN,
        );
      } else {
        const isCodeValid =
          this.twofaService.isTwoFactorAuthenticationCodeValid(
            twoFactorAuthenticationCode,
            user,
          );
        if (!isCodeValid) {
          throw new UnauthorizedException('Wrong authentication code');
        }
      }
    }

    const token = this.jwtService.sign({ id: user.id });
    return {
      token,
      data: {
        id,
        email,
        name,
        twoFactorAuthenticationSecretEnabledAt,
        isTwoFactorAuthenticationEnabled,
      },
    };
  }
}
