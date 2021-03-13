import { Injectable, Body, Post } from '@nestjs/common';
import { UserDTO } from './user.dto';

@Injectable()
export class UserService {
  userArray: UserDTO[] = [];
  userInfo: UserDTO;

  login(user: UserDTO) {
    this.userInfo = this.userArray.filter(x => x.username === user.username && x.password === user.password)[0];
    return this.userInfo;
  }

  register(user: UserDTO) {
    this.userArray.push(user);
  }
}
