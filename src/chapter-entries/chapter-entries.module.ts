import { ChapterEntriesRepository } from './chapter-entries.repository';
import { PrismaModule } from './../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { ChapterEntriesController } from './chapter-entries.controller';
import { ChapterEntriesService } from './chapter-entries.service';

@Module({
  imports: [PrismaModule],
  controllers: [ChapterEntriesController],
  providers: [ChapterEntriesService, ChapterEntriesRepository],
  exports: [ChapterEntriesService, ChapterEntriesRepository]
})
export class ChapterEntriesModule { }
