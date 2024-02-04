import { Request, Response } from 'express';
import { Error as MongooseError } from 'mongoose';
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const { getRequest, getResponse } = host.switchToHttp();
    const response = getResponse<Response>();
    const request = getRequest<Request>();

    let status: HttpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
    let message: string | string[] = 'Unknown Server Error';

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      message = exception.getResponse() as string | string[];
    }

    if (exception instanceof MongooseError) {
      status = HttpStatus.UNPROCESSABLE_ENTITY;
      message = exception.message;

      if (exception instanceof MongooseError.ValidationError) {
        const errors = exception.errors;
        message = Object.values(errors).map((err) => err.message);
      }
    }

    response.status(status).json({
      statusCode: status,
      message,
      timestamp: new Date().toISOString(),
      path: request.url,
      method: request.method,
    });
  }
}
