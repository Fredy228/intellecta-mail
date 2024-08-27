import { HttpStatus, Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import * as process from 'process';
import * as dotenv from 'dotenv';

import { CustomRMQException } from '../../services/custom-exception';

dotenv.config();

@Injectable()
export class SupportService {
  constructor(private readonly mailerService: MailerService) {}

  async sendForgotPass(event: { email: string; key: string }) {
    try {
      await this.mailerService.sendMail({
        from: process.env.SMTP_USER,
        to: event.email,
        subject: 'Відновлення паролю Intellecta.',
        template: 'forgot-pass',
        context: {
          url: `${process.env.CLIENT_URL}/auth/forgot/${event.key}`,
        },
      });
    } catch (error) {
      console.error(error);
      throw new CustomRMQException(HttpStatus.BAD_REQUEST, 'Dispatch error');
    }

    return { status: 200, message: 'OK' };
  }
}
