import { ChapterResultsRepository } from './chapter-results.repository';
import { ChapterResultsService } from './chapter-results.service';
import { PrismaModule } from '../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { ChapterResultsController } from './chapter-results.controller';

@Module({
  imports: [PrismaModule],
  controllers: [ChapterResultsController],
  providers: [ChapterResultsService, ChapterResultsRepository],
  exports: [ChapterResultsService, ChapterResultsRepository]
})
export class ChapterResultsModule { }
