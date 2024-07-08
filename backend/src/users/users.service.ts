import { InjectRepository } from '@nestjs/typeorm';
import User from './user.entity';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/users.dto';
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async getAllUsers() {
    const users = await this.usersRepository.find();
    return users;
  }
  async getUserById(id: number) {
    const user = await this.usersRepository.findOne({
      where: {
        id: id,
      },
    });
    if (user) return user;
    throw new NotFoundException('Could not find the user');
  }

  async createUser(newUser: CreateUserDto) {
    const user = await this.usersRepository.create(newUser);

    await this.usersRepository.save({
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
    });

    return user;
  }

  async deleteUserById(id: number) {
    const user = await this.usersRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!user) return null;
    await this.usersRepository.remove(user);
    return user;
  }

  // async setTwoFactorAuthenticationSecret(secret: string, userId: number) {
  //   const user = await this.usersRepository.findOne({
  //     where: {
  //       id: userId,
  //     },
  //   });
  //   if (!user) return null;
  //   user.twoFactorAuthenticationSecret = secret;
  //   user.twoFactorAuthenticationSecretEnabledAt = Date();
  //   await this.usersRepository.save(user);
  // }
}
