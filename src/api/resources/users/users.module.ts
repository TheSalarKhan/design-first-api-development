import { Module, NotImplementedException } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UnImplemented } from '../../un-implemented';
import { UsersModuleImplementation } from '../../../lib/modules/users/user.module';
import { Implemented } from '../../implemented';
import { UsersServiceImpl } from '../../../lib/modules/users/user.service';

@Module({
  imports: [UsersModuleImplementation],
  controllers: [UsersController],
  providers: [
    Implemented(UsersService, UsersServiceImpl)
  ]
})
export class UsersModule {}
