import { Catch, ExceptionFilter, ArgumentsHost, HttpException, HttpStatus, BadRequestException } from "@nestjs/common";
import { HttpAdapterHost } from "@nestjs/core";

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: any, host: ArgumentsHost): void {
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();

    const httpStatus = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR

    if(!exception.response) exception = new BadRequestException(exception)

    const responseBody = {
        status_code: exception.getResponse().statusCode ?? httpStatus,
        message: exception.getResponse().message ?? exception.message,
        error: exception.getResponse().error,
        timestamp: new Date().toISOString(),
        service_name: "Statish's server",
        path: httpAdapter.getRequestUrl(ctx.getRequest())
    }
    console.log(responseBody);
    httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus)
}
}
