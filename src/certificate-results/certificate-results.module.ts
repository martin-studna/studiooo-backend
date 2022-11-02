import { CertificateResultsService } from './certificate-results.service';
import { CertificateResultsController } from './certificate-results.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { CertificateResultsRepository } from './certificate-results.repository';

@Module({
  imports: [PrismaModule],
  controllers: [CertificateResultsController],
  providers: [CertificateResultsService, CertificateResultsRepository],
  exports: [CertificateResultsService, CertificateResultsRepository]
})
export class CertificateResultsModule { }
