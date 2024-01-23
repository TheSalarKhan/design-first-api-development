import { Module } from '@nestjs/common';
import { UsersServiceImpl } from './user.service';

@Module({
  providers: [UsersServiceImpl],
  exports: [UsersServiceImpl]
})
export class UsersModuleImplementation {}