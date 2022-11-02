import { RolesGuard } from '../auth/guards/roles.guard';
import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards, Req, Query, ParseIntPipe } from '@nestjs/common';
import { WorkshopResultsService } from './workshop-results.service';
import { JwtAuthenticationGuard } from '../auth/guards/jwt-auth.guard';
import { WorkshopResult } from '.prisma/client';

@UseGuards(JwtAuthenticationGuard, RolesGuard)
@Controller('workshop-results')
export class WorkshopResultsController {
  constructor(private readonly workshopResultsService: WorkshopResultsService) { }

  @Post()
  create(@Body() workshopResult: WorkshopResult) {
    return this.workshopResultsService.create(workshopResult);
  }

  // @Get()
  // findMany(@Query('skip', ParseIntPipe) skip: number, @Query('limit', ParseIntPipe) limit: number) {
  //   return this.workshopResultsService.findMany(skip, limit);
  // }
  @Get('/stats/:userid')
  getStats(@Param('userid') userId: string) {
    return this.workshopResultsService.getStats(userId)
  }

  @Get('/stats')
  getProgress(@Query('userid') userId: string, @Query('workshopid') workshopId: string) {
    return this.workshopResultsService.getProgress(userId, workshopId)
  }

  @Get()
  findByQuery(@Query('userid') userId: string, @Query('workshopid') workshopId: string) {
    return this.workshopResultsService.findByQuery(userId, workshopId);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.workshopResultsService.findById(id);
  }


  @Put(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.workshopResultsService.updateById(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Req() req) {
    return this.workshopResultsService.removeById(id);
  }
}
