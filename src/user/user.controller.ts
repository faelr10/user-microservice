import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { CreateUserDto } from './dto/create-user.dto';
import { validateParams } from '../validate/params-validate';

@Controller()
export class UserController {
  @GrpcMethod('UserService', 'GetUser')
  getUser(data: { id: string }): any {
    return { id: data.id, name: 'Rafael Developer' };
  }

  @GrpcMethod('UserService', 'CreateUser')
  async createUser(params: CreateUserDto) {
    const data = await validateParams(params, CreateUserDto);
    console.log('validData', data);

    return {
      status: 'success',
      message: `User ${data.name} created successfully`,
      userId: 'asd2546',
    };
  }
}
