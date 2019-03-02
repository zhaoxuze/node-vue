import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Users } from '../../entities/user.entity'
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
    imports: [TypeOrmModule.forFeature([Users])],
    providers: [UserService],
    controllers: [UserController],
})
export class UserModule {}
