import { Strategy } from 'passport-jwt';
import { UsersService } from 'src/users/users.service';
declare const Jwt2faStrategy_base: new (...args: any[]) => InstanceType<typeof Strategy>;
export declare class Jwt2faStrategy extends Jwt2faStrategy_base {
    private readonly userService;
    constructor(userService: UsersService);
    validate(payload: any): Promise<import("../users/user.entity").default>;
}
export {};
