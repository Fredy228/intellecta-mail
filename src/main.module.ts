import { Module } from '@nestjs/common';
import { SupportModule } from './controllers/support/support.module';
import * as process from 'process';
import * as dotenv from 'dotenv';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
import { MailerModule } from '@nestjs-modules/mailer';

dotenv.config();

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: process.env.SMTP_DOMAIN,
        port: Number(process.env.SMTP_PORT),
        secure: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
        tls: {
          rejectUnauthorized: false,
        },
      },
      template: {
        dir: process.cwd() + '/src/templates/',
        adapter: new PugAdapter(),
        options: {
          strict: true,
        },
      },
    }),
    SupportModule,
  ],
})
export class MainModule {}
