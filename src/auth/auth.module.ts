import { ChapterEntriesModule } from './../chapter-entries/chapter-entries.module';
import { WorkshopResultsModule } from './../workshop-results/workshop-results.module';
import { ChapterResultsModule } from './../chapter-results/chapter-results.module';
import { EmailsModule } from './../emails/emails.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaModule } from './../prisma/prisma.module';
import { UsersModule } from './../users/users.module';
import { LocalStrategy } from './strategies/local.strategy';
import { AuthController } from './auth.controller';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';


@Module({
  imports: [
    UsersModule,
    PrismaModule,
    ConfigModule,
    EmailsModule,
    ChapterResultsModule,
    WorkshopResultsModule,
    ChapterEntriesModule,
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: {
          expiresIn: `${configService.get('JWT_EXPIRATION_TIME')}s`,
        },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, LocalStrategy],
})
export class AuthModule { }