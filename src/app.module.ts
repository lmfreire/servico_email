import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { SendEmailModule } from './send-email/send-email.module';
import { BullModule } from '@nestjs/bullmq';

@Module({
  imports: [BullModule.forRoot({
    connection: {
      host: 'localhost',
      port: 6379,
    }
  }),UsersModule, SendEmailModule],
})
export class AppModule {}
