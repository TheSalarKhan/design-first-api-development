import { Injectable } from '@nestjs/common';
import { SuccessResponseDto } from '../../../api/dtos/success-response.dto';
import { CreateUserDto } from '../../../api/resources/users/dtos/create-user.dto';
import { UsersService } from '../../../api/resources/users/users.service';

@Injectable()
export class UsersServiceImpl extends UsersService {
  async createUser(input: CreateUserDto): Promise<SuccessResponseDto> {
    const returnValue = new SuccessResponseDto();
    returnValue.message = `User (name: ${input.name}, email: ${input.email}) created Successfully`;
    return returnValue;
  }

}