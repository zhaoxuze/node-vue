import { Injectable, MiddlewareFunction, NestMiddleware,HttpStatus, RequestMethod } from '@nestjs/common';

@Injectable()
export class CrossDomainMiddleware implements NestMiddleware {
  resolve(...args: any[]): MiddlewareFunction {
    return (request, response, next) => {
      const getMethod = method => RequestMethod[method];
      // Headers
      response.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, Cache-Control, token");
      response.header('Access-Control-Allow-Methods',  "POST, GET, PUT, OPTIONS, DELETE");
      response.header('Access-Control-Max-Age', '1728000');
      response.header('Content-Type', 'application/json; charset=utf-8');
      response.header('Access-Control-Allow-Origin','*');
      // response.header('X-Powered-By', `Nodepress ${APP_CONFIG.INFO.version}`);

      // OPTIONS Request
      console.log(request.method)
      if (request.method === getMethod(RequestMethod.OPTIONS)) {
        return response.sendStatus(HttpStatus.NO_CONTENT);
        // return next();
      } else {
        return next();
      }
    }
  }
}
