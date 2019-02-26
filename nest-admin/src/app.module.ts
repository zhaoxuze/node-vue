import { Module,NestModule,RequestMethod, MiddlewareConsumer } from '@nestjs/common';
// 数据库ORM
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user/user.controller';
import { CrossDomainMiddleware } from './cross-domain.middleware';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'abc@123',
      database: 'admin',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UserModule
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
