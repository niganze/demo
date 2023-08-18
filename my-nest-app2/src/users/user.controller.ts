// import {
//   Controller,
//   Get,
//   Post,
//   Body,
//   Put,
//   Delete,
//   Param,
// } from '@nestjs/common';
// import { CreateUserDto } from './dtos/Create-user.dto';
// import { UserService } from './user.service';

// @Controller('users')
// export class UsersController {
//   constructor(private readonly userService: UserService) {}

//   @Post()
//   create(@Body() dto: CreateUserDto) {
//     return this.userService.createUser(dto);
//   }

//   @Get()
//   findAll() {
//     return this.userService.findAllUsers();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: number) {
//     return this.userService.findOneUser(id);
//   }

//   @Put(':id')
//   update(@Param('id') id: number, @Body() dto: CreateUserDto) {
//     return this.userService.updateUser(id, dto);
//   }

//   @Delete(':id')
//   delete(@Param('id') id: number) {
//     return this.userService.deleteUser(id);
//   }
// }

import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { ApiTags, ApiCreatedResponse } from '@nestjs/swagger'; // Import ApiTags and ApiCreatedResponse decorators
import { CreateUserDto } from './dtos/Create-user.dto';
import { UserService } from './user.service';

@ApiTags('users') // Apply ApiTags decorator to the controller
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @ApiCreatedResponse({ description: 'User successfully created' }) // Apply ApiCreatedResponse decorator to the create method
  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.userService.createUser(dto);
  }

  @Get()
  findAll() {
    return this.userService.findAllUsers();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findOneUser(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: CreateUserDto) {
    return this.userService.updateUser(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.userService.deleteUser(id);
  }
}
