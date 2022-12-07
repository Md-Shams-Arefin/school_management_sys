import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }

    @Get()
    findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }


    @Post()
    async createUser(@Body() data: object): Promise<User> {
        const user = await this.usersService.createUser(data);
        return user;
    }


    @Get('/:id')
    async findOne(@Param('id') id: number): Promise<User> {
        const user = this.usersService.findOne(id);
        return user;
    }


    @Delete('/:id')
    async remove(@Param('id') id: number): Promise<void> {
        await this.usersService.remove(id);
    }
}