import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SendEmailModule } from './send-email/send-email.module';

@Module({
  imports: [UsersModule, SendEmailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
