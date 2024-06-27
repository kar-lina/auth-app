import User from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/users.dto';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    getAllUsers(): Promise<User[]>;
    getUserById(id: number): Promise<User>;
    createUser(newUser: CreateUserDto): Promise<User>;
    deleteUserById(id: number): Promise<User>;
}
