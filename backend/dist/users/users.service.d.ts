import User from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/users.dto';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    getAllUsers(): Promise<User[]>;
    getUserById(id: number): Promise<{
        id: number;
        name: string;
        twoFactorAuthenticationSecretEnabledAt: string;
        isTwoFactorAuthenticationEnabled: boolean;
    }>;
    createUser(newUser: CreateUserDto): Promise<{
        name: string;
        twoFactorAuthenticationSecretEnabledAt: string;
        isTwoFactorAuthenticationEnabled: boolean;
    }>;
    deleteUserById(id: number): Promise<number>;
    findUserById(userId: number): Promise<User>;
    findUserByEmail(email: string): Promise<User>;
    setTwoFactorAuthenticationSecret(secret: string, userId: number): Promise<any>;
    turnOnTwoFactorAuthentication(userId: number): Promise<any>;
    turnOffTwoFactorAuthentication(userId: number): Promise<any>;
}
