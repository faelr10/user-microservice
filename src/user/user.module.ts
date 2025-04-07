import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { EmailProducerService } from 'src/kafka/email-producer-kafka/email-producer.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USERS_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'user_service',
            brokers: ['kafka:9092'],
          },
        },
      },
    ]),
  ],
  controllers: [UserController],
  providers: [EmailProducerService],
})
export class UserModule {}
