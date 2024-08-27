import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { SupportService } from './support.service';

@Controller()
export class SupportController {
  constructor(private readonly supportService: SupportService) {}

  @EventPattern('restore-pass')
  async handleForgetPass(@Payload() event: { email: string; key: string }) {
    return this.supportService.sendForgotPass(event);
  }
}
