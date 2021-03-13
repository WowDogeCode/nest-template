import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('login')
  login(@Body() user: UserDTO): boolean {
    return this.userService.login(user) != undefined ? (this.userService.login(user) ? true: false) : false;
  }

  @Post('register')
  register(@Body() user: UserDTO): void {
    this.userService.register(user);
  }
}
