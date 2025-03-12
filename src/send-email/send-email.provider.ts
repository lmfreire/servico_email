import * as nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'kennith.boyer@ethereal.email',
        pass: 'fxqdrECFQABuGVepmX'
    },
});

export const SendEmailProvider = {
    provide: 'SEND_EMAIL_PROVIDER',
    useValue: transporter,
};
