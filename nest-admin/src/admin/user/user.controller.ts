import { Controller,Get,Options,UseGuards} from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('login')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Options()
  optionRequest(){
    return {}
  }
  
  @Get()
  @UseGuards(AuthGuard())
  getHello() {
    return this.UserService.getHello();
  }
}
