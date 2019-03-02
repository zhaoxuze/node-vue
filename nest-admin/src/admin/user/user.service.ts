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
      usr.admin_name = "John";
      usr.admin_passwd = "123456";
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
}
