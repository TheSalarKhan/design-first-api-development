import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { SuccessResponseDto } from '../../dtos/success-response.dto';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
  ) {}

  @Post()
  public async createUser(@Body() input: CreateUserDto): Promise<SuccessResponseDto> {
    return this.usersService.createUser(input);
  }
}