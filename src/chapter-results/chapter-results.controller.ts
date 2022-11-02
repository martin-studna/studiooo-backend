import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards, Req, Query } from '@nestjs/common';
import { ChapterResultsService } from './chapter-results.service';
import { JwtAuthenticationGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthenticationGuard)
@Controller('chapter-results')
export class ChapterResultsController {
  constructor(private readonly chapterResultsService: ChapterResultsService) { }

  @Post()
  create(@Body() data: any) {
    return this.chapterResultsService.create(data);
  }

  @Get()
  findMany(@Query('workshopId') workshopId: string, @Query('userId') userId: string) {
    return this.chapterResultsService.findMany({ workshopId, userId });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chapterResultsService.findById(id);
  }

  @Put(':id')
  updateById(@Param('id') id: string, @Body() data: any) {
    return this.chapterResultsService.updateById(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Req() req) {
    return this.chapterResultsService.removeById(id);
  }
}
