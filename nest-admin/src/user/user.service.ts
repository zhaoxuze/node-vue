import { Injectable } from '@nestjs/common';
import {createConnection} from "typeorm";
import { Users } from "../entities/user.entity";

@Injectable()
export class UserService {
  getHello() {
    // return 'Hello World!';
      createConnection(/*...*/).then(connection => {

      let usr = new Users();
      usr.admin_name = "John";
      usr.admin_passwd = "123456";
      usr.created_at = Date.now();
      usr.updated_at = 1;
      usr.admin_status = 1;

      return connection.manager
              .save(usr)
              .then(photo => {
                  console.log("user is saved", photo.id);
                  return 'aaaa';
              });

    }).catch(error => console.log(error));
  }
}
