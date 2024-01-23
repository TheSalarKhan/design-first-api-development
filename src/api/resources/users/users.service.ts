import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { SuccessResponseDto } from '../../dtos/success-response.dto';

@Injectable()
export abstract class UsersService {
  abstract createUser(input: CreateUserDto) : Promise<SuccessResponseDto>;
}