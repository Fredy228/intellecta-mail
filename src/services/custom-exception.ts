import { HttpStatus } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

export function CustomHTTPException(
  status: HttpStatus | number,
  message: string,
) {
  throw new RpcException({ statusCode: status, message: message });
}
