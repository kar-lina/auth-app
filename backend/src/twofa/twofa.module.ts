import { Module } from '@nestjs/common';
import { TwofaService } from './twofa.service';
import { TwofaController } from './twofa.controller';
import { UsersService } from 'src/users/users.service';
import User from '../users/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [TwofaController],
  providers: [TwofaService, UsersService],
})
export class TwofaModule {}
