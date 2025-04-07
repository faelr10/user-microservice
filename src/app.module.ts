import { Module } from '@nestjs/common';
import { EmailProducerModule } from './kafka/email-producer-kafka/email-producer.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [EmailProducerModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
