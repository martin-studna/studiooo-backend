import { TestEntriesRepository } from './test-entries.repository';
import { TestEntriesService } from './test-entries.service';
import { TestEntriesController } from './test-entries.controller';
import { PrismaModule } from './../prisma/prisma.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule],
  controllers: [TestEntriesController],
  providers: [TestEntriesService, TestEntriesRepository],
  exports: [TestEntriesService, TestEntriesRepository]
})
export class TestEntriesModule { }
