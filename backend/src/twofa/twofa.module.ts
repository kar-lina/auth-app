import { Module } from '@nestjs/common';
import { TwofaService } from './twofa.service';
import { TwofaController } from './twofa.controller';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [UsersService],
  controllers: [TwofaController],
  providers: [TwofaService],
})
export class TwofaModule {}
