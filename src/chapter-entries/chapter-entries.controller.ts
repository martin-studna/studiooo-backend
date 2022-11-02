import { ChapterEntriesService } from './chapter-entries.service';
import { JwtAuthenticationGuard } from '../auth/guards/jwt-auth.guard';
import { Controller, UseGuards, Post, Body, Req, Get, Query, Param } from '@nestjs/common';


@UseGuards(JwtAuthenticationGuard)
@Controller('chapter-entries')
export class ChapterEntriesController {
  constructor(private readonly chapterEntriesService: ChapterEntriesService) { }


  @Post()
  create(@Req() req, @Body() data: any) {
    return this.chapterEntriesService.create(req.user.id, data);
  }

  @Get(':id')
  getEntries(@Req() req, @Param('id') chapterId: string) {
    return this.chapterEntriesService.getEntries(req.user.id, chapterId)
  }
}
