import { RolesGuard } from '../auth/guards/roles.guard';
import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards, Req, Query, ParseBoolPipe, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthenticationGuard } from '../auth/guards/jwt-auth.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '.prisma/client';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @UseGuards(JwtAuthenticationGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Post()
  create(@Body() createUserData: any) {
    return this.usersService.create(createUserData);
  }

  @UseGuards(JwtAuthenticationGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Get()
  findMany(@Query('skip', ParseIntPipe) skip: number, @Query('limit', ParseIntPipe) limit: number) {
    return this.usersService.findMany(skip, limit);
  }

  @UseGuards(JwtAuthenticationGuard)
  @Get(':id/certificates')
  findCertificates(@Param('id') id: string) {
    return this.usersService.findCertificates(id);
  }

  @UseGuards(JwtAuthenticationGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findById(id);
  }

  @Get('email/:email')
  existsByEmail(@Param('email') email: string) {
    return this.usersService.existsByEmail(email)
  }

  @UseGuards(JwtAuthenticationGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.usersService.updateById(id, data);
  }

  @UseGuards(JwtAuthenticationGuard)
  @Put(':id/change-password')
  changePassword(@Param('id') id: string, @Body() data: any) {
    return this.usersService.changePassword(id, data);
  }

  @UseGuards(JwtAuthenticationGuard)
  @Delete(':id')
  remove(@Param('id') id: string, @Req() req) {
    return this.usersService.removeById(id);
  }
}
