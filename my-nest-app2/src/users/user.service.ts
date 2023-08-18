import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dtos/Create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async createUser(dto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const user = this.userRepository.create({
      ...dto,
      password: hashedPassword,
    });

    return await this.userRepository.save(user);
  }

  findAllUsers() {
    return this.userRepository.find();
  }

  async findOneUser(id: number) {
    return await this.userRepository.findOne({ where: { id } });
  }

  async updateUser(id: number, dto: CreateUserDto) {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      return null;
    }

    Object.assign(user, dto);
    return await this.userRepository.save(user);
  }

  async deleteUser(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      return null;
    }

    return await this.userRepository.remove(user);
  }
}
