import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import User from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { SignUpDto } from './dto/signup.dto';
import * as bcrypt from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async signUp(signUpDto: SignUpDto): Promise<{ token: string }> {
    const { name, email, password } = signUpDto;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.usersRepository.findOne({
      where: { email },
    });

    if (user) throw new ConflictException('User with this email alredy exists');

    const newUser = await this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    await this.usersRepository.save(newUser);

    const token = this.jwtService.sign({ id: newUser.id });

    return { token };
  }

  async login(signUpDto: LoginDto): Promise<{ token: string; data: User }> {
    const { email, password } = signUpDto;

    const user = await this.usersRepository.findOne({
      where: { email },
    });

    if (!user) throw new UnauthorizedException('Invalid email or password!');

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch)
      throw new UnauthorizedException('Invalid email or password!');

    const token = this.jwtService.sign({ id: user.id });
    return { token, data: user };
  }
}
