import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { CreateUserDto } from './dto/create-user.dto';
import { validateParams } from '../validate/params-validate';
import { EmailProducerService } from 'src/kafka/email-producer-kafka/email-producer.service';

@Controller()
export class UserController {
  constructor(
    @Inject(EmailProducerService)
    private readonly emailProducer: EmailProducerService,
  ) {}

  @GrpcMethod('UserService', 'GetUser')
  getUser(data: { id: string }): any {
    return { id: data.id, name: 'Rafael Developer' };
  }

  @GrpcMethod('UserService', 'CreateUser')
  async createUser(params: CreateUserDto) {
    const data = await validateParams(params, CreateUserDto);
    console.log('validData', data);

    await this.emailProducer.sendEmail({
      to: data.email,
      subject: 'Welcome to our service',
      body: `Hello ${data.name}, welcome to our service!`,
    });
    console.log('Email sent successfully');

    return {
      status: 'success',
      message: `User ${data.name} created successfully`,
      userId: 'asd2546',
    };
  }
}
