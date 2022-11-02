import { UsersRepository } from './users.repository';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import * as bcryptjs from 'bcryptjs'


@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) { }

  async create(data: any) {
    const hashedPassword = await bcryptjs.hash(data.password, 10);

    return this.usersRepository.create({ ...data, password: hashedPassword });
  }

  findAll() {
    return this.usersRepository.findAll();
  }

  findMany(skip: number, take: number) {
    return this.usersRepository.findMany(skip, take);
  }

  findCertificates(id: string) {
    return this.usersRepository.findCertificates(id);
  }

  findById(id: string) {
    return this.usersRepository.findById(id)
  }

  existsByEmail(email: string) {
    return this.usersRepository.existsByEmail(email)
  }

  updateById(id: string, data: any) {
    return this.usersRepository.updateById(id, data)
  }

  async changePassword(id: string, data: any) {
    const user = await this.usersRepository.findById(id)
    const isPasswordMatching = await bcryptjs.compare(
      data.oldPassword,
      user.password
    );


    if (!isPasswordMatching) {
      throw new HttpException('Old password mismatch!', HttpStatus.BAD_REQUEST)
    }

    const newPassword = await bcryptjs.hash(data.newPassword, 10)


    return this.usersRepository.updateById(id, { password: newPassword })
  }

  removeById(id: string) {
    return this.usersRepository.deleteById(id)
  }
}
