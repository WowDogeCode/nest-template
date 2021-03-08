import { Injectable, Body, Post } from '@nestjs/common';
import { UserDTO } from './user.dto';

@Injectable()
export class UserService {
  login(user: UserDTO) {
    if (user.username == "root" && user.password == "12345") {
      return true;
    }
    return false;
  }
}
