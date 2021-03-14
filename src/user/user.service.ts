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

  changePassword() {
    if (this.userInfo === undefined || this.userInfo === null) {
      console.log("You need to be logged in to change the password");
      return;
    }

    const reader = require("readline-sync");
    let oldPw = reader.question("Enter your current password: ", { hideEchoBack: true });
    
    while (this.userInfo.password !== oldPw) {
      oldPw = reader.question("Wrong password, try again: ", { hideEchoBack: true });
    }

    this.userInfo.password = reader.question("New password: ", { hideEchoBack: true });
    console.log("You have successfully changed your password");
  }
}
