import { Controller, Get, Post, Redirect } from '@nestjs/common';
import { get } from 'https';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor (private userService: UserService) {}
    @Get()
    @Redirect('http://localhost:3000/user/new', 302)
getUser(){
    return this.userService.getUser();
}

@Get()
getUserV2(){
    return 'Redirected succesfully!';
}

@Post()
saveUser(){
    return 'Created';
}
}

