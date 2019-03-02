import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getManager, getConnection } from 'typeorm';
import { Users } from "../../entities/user.entity";

@Injectable()
export class UserService {
  constructor(@InjectRepository(Users) private readonly userRepository: Repository<Users>) { };

  getHello() {
    // return 'Hello World!';
      let usr = new Users();
      usr.userName = "admin";
      usr.passWord = "123456";
      usr.created_at = Date.now();
      usr.updated_at = 1;
      usr.admin_status = 1;

      return this.userRepository.manager
              .save(usr)
              .then(photo => {
                  console.log("user is saved", photo.id);
                  return 'aaaa';
              });

  }

  findOneByUserName (userName) {
    
  }

  getUserInfo () {
    return {
      roles: ['admin'],
      token: 'admin',
      introduction: '我是超级管理员',
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      name: 'Super Admin'
    }
  }

}
