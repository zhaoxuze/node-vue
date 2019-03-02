import { Controller,Get,Options, Post } from '@nestjs/common';
import { UserService } from './user.service';


@Controller('user')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Options()
  optionRequest(){
    return {}
  }
  
  @Post()
  getHello() {
    return this.UserService.getHello();
  }

  @Get()
  getUserInfo() {
    let data = this.UserService.getUserInfo();
    return {
      data: data,
      code: 200,
      msg: 'success'
    }
  }


}
