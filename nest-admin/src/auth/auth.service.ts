import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { Users } from "../entities/user.entity";

@Injectable()
export class AuthService {
  user: Users
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(Users)
    private readonly employeeRepository: Repository<Users>
  ) {}

  async signIn(userName: string, passWord: string): Promise<string> {
    // In the real-world app you shouldn't expose this method publicly
    // instead, return a token once you verify user credentials
    const user: JwtPayload = { userName: userName, passWord: passWord };
    return this.jwtService.sign(user);
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    // return await this.employeeRepository.findOne(payload.userName);
  }

  async login(userName: string, passWord: string): Promise<any> {
    this.user = await this.employeeRepository.findOne({ userName: userName });
    if (this.user != undefined && this.user.passWord == passWord) {
        return this.signIn(this.user.userName, this.user.passWord);
    } else {
        return 'login failed !'
    }
  }
}