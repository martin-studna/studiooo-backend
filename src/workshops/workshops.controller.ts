import { RolesGuard } from '../auth/guards/roles.guard';
import { JwtAuthenticationGuard } from '../auth/guards/jwt-auth.guard';
import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards, ParseIntPipe, Query } from '@nestjs/common';
import { WorkshopsService } from './workshops.service';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role, Workshop } from '.prisma/client';


@Controller('workshops')
export class WorkshopsController {
  constructor(private readonly workshopsService: WorkshopsService) { }

  @UseGuards(JwtAuthenticationGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Post()
  create(@Body() data: Workshop) {
    return this.workshopsService.create(data);
  }

  @Get()
  findMany(@Query('skip', ParseIntPipe) skip: number, @Query('limit', ParseIntPipe) limit: number) {
    return this.workshopsService.findMany(skip, limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workshopsService.findById(id);
  }

  @Get(':workshopid/certificates')
  findCertificates(@Param('workshopid') workshopId: string) {
    return this.workshopsService.findCertificates(workshopId);
  }

  @UseGuards(JwtAuthenticationGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Put(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.workshopsService.updateById(id, data);
  }

  @UseGuards(JwtAuthenticationGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.workshopsService.deleteById(id);
  }
}
