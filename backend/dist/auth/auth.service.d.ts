import { JwtService } from '@nestjs/jwt';
import User from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { TwofaService } from 'src/twofa/twofa.service';
export declare class AuthService {
    private usersRepository;
    private jwtService;
    private twofaService;
    constructor(usersRepository: Repository<User>, jwtService: JwtService, twofaService: TwofaService);
    signUp(signUpDto: SignUpDto): Promise<{
        token: string;
    }>;
    isPasswordMatch(password: string, userPassword: string): Promise<any>;
    login(loginDto: LoginDto): Promise<{
        token: string;
        data: Partial<User>;
    }>;
}
