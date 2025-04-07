import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { EmailProducerService } from './email-producer.service';

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
  controllers: [],
  providers: [EmailProducerService],
})
export class EmailProducerModule {}
