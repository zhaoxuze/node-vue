import { Controller,Get,Options} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('login')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Options()
  optionRequest(){
    return {}
  }

  @Get()
  getHello() {
    return this.UserService.getHello();
  }
}
