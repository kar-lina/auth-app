import { Strategy } from 'passport-jwt';
import { Repository } from 'typeorm';
import User from 'src/users/user.entity';
declare const JwtStrategy_base: new (...args: any[]) => InstanceType<typeof Strategy>;
export declare class JwtStrategy extends JwtStrategy_base {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    validate(payload: any): Promise<User>;
}
export {};
