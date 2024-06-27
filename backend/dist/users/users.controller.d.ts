import { UsersService } from './users.service';
import User from './user.entity';
import { CreateUserDto } from './dto/users.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAllUsers(): Promise<User[]>;
    getUserById(id: number): Promise<User>;
    createUser(createUserDto: CreateUserDto): Promise<User>;
    deleteUSerById(id: number): Promise<User>;
}
