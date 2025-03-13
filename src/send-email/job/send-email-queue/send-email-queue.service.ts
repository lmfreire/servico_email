import { InjectQueue } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';

type SendEmailQueue = {
    name: string;
    email: string;
}; 

@Injectable()
export class SendEmailQueueService {
    constructor(
        @InjectQueue('SEND_EMAIL_QUEUE')
        private sendEmailQueue: Queue
    ){}

    async execute({name, email}: SendEmailQueue){
        await this.sendEmailQueue.add('SEND_EMAIL_QUEUE', {name,email})
    }
}
