import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { SendEmailService } from '../send-email/send-email.service';
import { SendEmailQueueService } from '../send-email/job/send-email-queue/send-email-queue.service';

@Injectable()
export class UsersService {

    constructor(private readonly sendEmailQueueService: SendEmailQueueService) {}
    // constructor(private readonly sendEmailQueueService: SendEmailService) {}

    async create(createUserDto: CreateUserDto) {
        const { name, email } = createUserDto;


        await this.sendEmailQueueService.execute({ name, email });
        return { name, email };
    }
}
