import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class EmailProducerService {
  constructor(
    @Inject('USERS_SERVICE') private readonly kafkaClient: ClientKafka,
  ) {}

  async sendEmail(data: any): Promise<void> {
    await lastValueFrom(this.kafkaClient.emit('emails', data));

    console.log(data);
    return;
  }
}
