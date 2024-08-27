import { HttpStatus } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

export function CustomRMQException(
  status: HttpStatus | number,
  message: string,
) {
  throw new RpcException({ statusCode: status, message: message });
}
