import { BadRequestException, Controller, HttpStatus } from '@nestjs/common';
import { MessagePattern, Payload, RpcException } from '@nestjs/microservices';
import { SupportService } from './support.service';
// import { CustomException } from '../../services/custom-exception';

@Controller('support')
export class SupportController {
  constructor(private readonly supportService: SupportService) {}

  @MessagePattern({ cmd: 'restore-pass' })
  async handleForgetPass(@Payload() event: { task: string }) {
    console.log('Received event: ', event);

    return 'Answer on Hello word';
  }
}
