import { Controller,Get,Options} from '@nestjs/common';
import { AppService } from '../app.service';
import { get } from 'http';

@Controller('login')
export class UserController {
  constructor(private readonly appService: AppService) {}

  @Options()
  optionRequest(){
    return {}
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
