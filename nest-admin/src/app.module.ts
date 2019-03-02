import { Module,NestModule,RequestMethod, MiddlewareConsumer } from '@nestjs/common';
// 数据库ORM
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './admin/user/user.controller';
import { CrossDomainMiddleware } from './cross-domain.middleware';
import { UserModule } from './admin/user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UserModule,
    AuthModule
  ]
})
// export class AppModule {}
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CrossDomainMiddleware)
      .forRoutes(UserController);
  }
}
