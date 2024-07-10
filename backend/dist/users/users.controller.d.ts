import { UsersService } from './users.service';
import User from './user.entity';
import { CreateUserDto } from './dto/users.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAllUsers(): Promise<User[]>;
    getUserById(id: number): Promise<Partial<User>>;
    createUser(createUserDto: CreateUserDto): Promise<Partial<User>>;
    deleteUSerById(id: number): Promise<number>;
}
