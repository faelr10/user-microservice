import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { status } from '@grpc/grpc-js';
import { RpcException } from '@nestjs/microservices';

export async function validateParams<T extends object>(
  payload: any,
  dtoClass: new () => T,
): Promise<T> {
  const dtoInstance = plainToInstance(dtoClass, payload);
  const errors = await validate(dtoInstance);

  if (errors.length > 0) {
    const message = errors
      .map((err) => Object.values(err.constraints || {}))
      .flat()
      .join(', ');
    throw new RpcException({
      code: status.INVALID_ARGUMENT,
      message,
    });
  }

  return dtoInstance;
}
