import { OnWorkerEvent, Processor, WorkerHost, } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import { Job } from 'bullmq';
import { SendEmailService } from '../../send-email.service';

type SendEmailConsumer = {
    name: string;
    email: string;
}; 

@Processor('SEND_EMAIL_QUEUE')
export class SendEmailConsumerService extends WorkerHost{

    
    constructor(private readonly sendEmailService: SendEmailService) {
        super();
    }

    async process({data}: Job<SendEmailConsumer>): Promise<any> {
        const { email, name } = data;
        await this.sendEmailService.handler({ name, email });
    }

    @OnWorkerEvent('active')
    onActive(job: Job) {
      console.log(
        `active Processing job ${job.id} of type ${job.name} with data ${job.data}...`,
      );
    }
    
    @OnWorkerEvent('failed')
    onFailed(job: Job) {
      console.log(
        `failed Processing job ${job.id} of type ${job.name} with data ${job.data}...`,
      );
    }
    
    @OnWorkerEvent('completed')
    onCompleted(job: Job) {
      console.log(
        `completed Processing job ${job.id} of type ${job.name} with data ${job.data}...`,
      );
    }

}
