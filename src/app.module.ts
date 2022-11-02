import { CertificateResultsModule } from './certificate-results/certificate-results.module';
import { WorkshopResultsModule } from './workshop-results/workshop-results.module';
import { PrismaModule } from './prisma/prisma.module';
import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { WorkshopsModule } from './workshops/workshops.module';
import { AuthModule } from './auth/auth.module';
import { APP_PIPE } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { ChapterEntriesModule } from './chapter-entries/chapter-entries.module';
import { TestEntriesModule } from './test-entries/test-entries.module';
import { TestEntriesController } from './test-entries/test-entries.controller';
import { TestEntriesService } from './test-entries/test-entries.service';
import { ChapterResultsModule } from './chapter-results/chapter-results.module';
import * as Joi from 'joi'



@Module({
  imports: [
    UsersModule,
    WorkshopsModule,
    PrismaModule,
    AuthModule,
    ConfigModule.forRoot({
      envFilePath: ['.development.env', '.production.env', '.env'],
      isGlobal: true,
      validationSchema: Joi.object({
        JWT_SECRET: Joi.string().required(),
        JWT_EXPIRATION_TIME: Joi.string().required(),
      })
    }),
    ChapterEntriesModule,
    TestEntriesModule,
    ChapterResultsModule,
    WorkshopResultsModule,
    CertificateResultsModule,
  ],
  controllers: [AppController, TestEntriesController],
  providers: [AppService, {
    provide: APP_PIPE,
    useClass: ValidationPipe,
  }, TestEntriesService,
  ],
})
export class AppModule { }
