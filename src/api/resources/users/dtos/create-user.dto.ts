import { UUID } from 'crypto';

export class CreateUserDto {
  name: string;

  id: UUID;
}