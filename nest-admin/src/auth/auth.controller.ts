import { Controller,Post,Options,UseGuards,HttpStatus,HttpCode,Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly AuthService: AuthService) {}

  @Options()
  optionRequest(){
    return {}
  }
  
  @UseGuards(AuthGuard())
  getHello() {
    return "hello world";
  }

  @Post()
  async login(@Body() reqParamsObject): Promise<any> {
    let data = await this.AuthService.login(reqParamsObject.userName, reqParamsObject.passWord)
    return {
      code: 200,
      data: data,
      msg:'success'
    }
  }
}
