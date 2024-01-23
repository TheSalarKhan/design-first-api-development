import { Module } from '@nestjs/common';
import { UsersModule } from './api/resources/users/users.module';

@Module({
  imports: [
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
