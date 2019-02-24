import { Module,NestModule,RequestMethod, MiddlewareConsumer } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { CrossDomainMiddleware } from './cross-domain.middleware';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule]
})
// export class AppModule {}
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CrossDomainMiddleware)
      .forRoutes(UserController);
  }
}
