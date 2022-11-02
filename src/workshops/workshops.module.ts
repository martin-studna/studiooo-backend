import { PrismaModule } from './../prisma/prisma.module';
import { WorkshopsRepository } from './workshops.repository';
import { Module } from '@nestjs/common';
import { WorkshopsService } from './workshops.service';
import { WorkshopsController } from './workshops.controller';

@Module({
  imports: [PrismaModule],
  controllers: [WorkshopsController],
  providers: [WorkshopsService, WorkshopsRepository],
  exports: [WorkshopsService, WorkshopsRepository]
})
export class WorkshopsModule { }
