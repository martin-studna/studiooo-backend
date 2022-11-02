import { WorkshopResultsService } from './workshop-results.service';
import { WorkshopResultsController } from './workshop-results.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { WorkshopResultsRepository } from './workshop-results.repository';

@Module({
  imports: [PrismaModule],
  controllers: [WorkshopResultsController],
  providers: [WorkshopResultsService, WorkshopResultsRepository],
  exports: [WorkshopResultsService, WorkshopResultsRepository]
})
export class WorkshopResultsModule { }
