import {Controller, Get, Param, Post} from "@nestjs/common";
import {UserService} from "./user.service";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @Get(':id')
    async getUserById(@Param('id') id: string) {
        return this.userService.user({id: Number(id)});
    }

    @Get()
    async getUsers() {
        return this.userService.users();
    }
}