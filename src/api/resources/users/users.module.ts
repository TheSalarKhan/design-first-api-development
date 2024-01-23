import { Module, NotImplementedException } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UnImplemented } from '../../un-implemented';

@Module({
  controllers: [UsersController],
  providers: [
    UnImplemented(UsersService)
  ]
})
export class UsersModule {}
