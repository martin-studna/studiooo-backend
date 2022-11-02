import { ChapterEntriesRepository } from './../chapter-entries/chapter-entries.repository';
import { WorkshopResultsRepository } from './../workshop-results/workshop-results.repository';
import { ChapterResultsRepository } from './../chapter-results/chapter-results.repository';
import { EmailsService } from './../emails/emails.service';
import { Response } from 'express';
import { UsersRepository } from './../users/users.repository';
import { PostgresErrorCode } from './../database/postgresErrorCodes.enum';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from './../prisma/prisma.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcryptjs from 'bcryptjs'
import * as crypto from 'crypto'

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly emailsService: EmailsService,
    private readonly chapterResultRepository: ChapterResultsRepository,
    private readonly workshopResultRepository: WorkshopResultsRepository,
    private readonly chapterEntriesRepository: ChapterEntriesRepository,
    private readonly usersRepository: UsersRepository) { }


  public async forgottenPassword(email: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        email
      }
    })

    if (!user)
      throw new HttpException('An user with this email does not exist', HttpStatus.NOT_FOUND)

    const token = crypto.randomBytes(20).toString('hex')
    let expires = new Date()
    expires.setHours(expires.getHours() + 1)

    await this.prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        resetPasswordToken: token,
        resetPasswordTokenExpires: expires
      }
    })

    await this.emailsService.sendForgottenPasswordEmail(email, token)

    return HttpStatus.OK
  }

  public async resetPassword(token: string, data: any) {
    let user = await this.prisma.user.findFirst({
      where: {
        resetPasswordToken: token
      }
    })

    if (!user)
      throw new HttpException('Password reset token is invalid', HttpStatus.BAD_REQUEST)

    if (user.resetPasswordTokenExpires.getTime() < Date.now())
      throw new HttpException('Pasword reset token has expired', HttpStatus.BAD_REQUEST)

    const newPassword = await bcryptjs.hash(data.newPassword, 10)
    user = await this.usersRepository.updateById(user.id, { password: newPassword, lastLogin: new Date() })
    user.password = null

    return user;
  }

  public async activateAccount(data: any) {
    const email = data.email
    const user = await this.prisma.user.findFirst({
      where: {
        email
      }
    })

    if (user.isActivated) {
      return { answer: "ACCOUNT_ALREADY_ACTIVATED"}
    }
    const activationToken = crypto.randomBytes(20).toString('hex')
    await this.prisma.user.update({
      where: {
        email
      },
      data: {
        activationToken
      }
    });

    this.emailsService.sendRegistrationEmail(email, activationToken)

    return HttpStatus.OK

  }

  public async register(registrationData: any) {
    const user = await this.prisma.user.findFirst({
      where: {
        email: registrationData.email
      }
    })

    if (user)
      throw new HttpException('The user has been already created', HttpStatus.BAD_REQUEST)

    try {

      const hashedPassword = await bcryptjs.hash(registrationData.password, 10);
      const activationToken = crypto.randomBytes(20).toString('hex')
      const createdUser = await this.prisma.user.create({
        data: {
          ...registrationData,
          password: hashedPassword,
          activationToken
        }
      });
      createdUser.password = undefined;

      this.emailsService.sendRegistrationEmail(registrationData.email, activationToken)

      return createdUser;
    } catch (error) {
      if (error?.code === PostgresErrorCode.UniqueViolation) {
        throw new HttpException('User with that email already exists', HttpStatus.BAD_REQUEST);
      }
      else
        throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async unregister(user: any, res: Response) {
    await this.chapterResultRepository.deleteByUserId(user.id)
    await this.workshopResultRepository.deleteByUserId(user.id)
    await this.chapterEntriesRepository.deleteByUserId(user.id)
    try {
      await this.usersRepository.deleteById(user.id)
      
    } catch (error) {
      throw new Error(error)
    }
    await this.emailsService.sendDeleteAccountEmail(user.email)

    res.setHeader('Set-Cookie', this.logout());

    return res.sendStatus(200)
  }

  public async validateUser(email: string, plainTextPassword: string) {
    try {
      const user = await this.prisma.user.findFirst({
        where: {
          email: email
        }
      })

      await this.verifyPassword(plainTextPassword, user.password);
      user.password = undefined;
      return user;
    } catch (error) {
      throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
    }
  }

  private async verifyPassword(plainTextPassword: string, hashedPassword: string) {
    const isPasswordMatching = await bcryptjs.compare(
      plainTextPassword,
      hashedPassword
    );
    if (!isPasswordMatching) {
      throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
    }
  }

  public async verifyActivationToken(token: string) {
    return this.usersRepository.verifyActivationToken(token)
  }


  public async login(user: any) {

    const payload: any = { userId: user.id, email: user.email };
    const token = this.jwtService.sign(payload);
    return `Authentication=${token}; HttpOnly; SameSite=None; Secure; Path=/; Max-Age=${this.configService.get('JWT_EXPIRATION_TIME')}`;
  }

  public logout() {
    return `Authentication=; HttpOnly; Path=/; Max-Age=0`;
  }

  public async loginAdmin(user: any) {

    const payload: any = { userId: user.id, email: user.email };
    const token = this.jwtService.sign(payload);
    return `AuthenticationAdmin=${token}; HttpOnly; Path=/; Max-Age=${this.configService.get('JWT_EXPIRATION_TIME')}`;
  }

  public logoutAdmin() {
    return `AuthenticationAdmin=; HttpOnly; Path=/; Max-Age=0`;
  }
}