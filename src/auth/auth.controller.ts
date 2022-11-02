import { Role } from '.prisma/client';
import { User } from '@prisma/client';
import { Response } from 'express';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { PrismaService } from './../prisma/prisma.service';
import { AuthService } from './auth.service';
import { Controller, UseGuards, Get, Res, Req, Post, Request, Delete, Query, HttpStatus, HttpException, Body, Put, Param, ForbiddenException, BadRequestException } from '@nestjs/common';
import { JwtAuthenticationGuard } from './guards/jwt-auth.guard';

/**
 * Authentication controller exposes API endpoints for:
 *  - sign in an user
 *  - logouting an user
 *  - sign in an admin user
 */
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService, private prisma: PrismaService) { }

  @UseGuards(LocalAuthGuard)
  @Post('login-admin')
  async loginAdmin(@Req() req, @Res() res: Response) {
    const { user }: { user: User } = req;
    if (!user.isActivated)
      throw new ForbiddenException('The account is not activated.');
    if (user.role !== Role.ADMIN)
      throw new ForbiddenException('The account does not have admin rights.')

    const cookie = await this.authService.login(user);

    res.setHeader('Set-Cookie', cookie);
    user.password = undefined;

    return res.send(user);
  }

  @UseGuards(JwtAuthenticationGuard)
  @Post('logout-admin')
  async logOutAdmin(@Req() request: Request, @Res() response: Response) {
    response.setHeader('Set-Cookie', this.authService.logoutAdmin());
    return response.sendStatus(200);
  }


  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req, @Res() res: Response) {
    const { user } = req;
    if (!user.isActivated)
      throw new ForbiddenException('The account is not activated');

    const cookie = await this.authService.login(user);

    await this.prisma.user.update({
      where: {
        id: user.id
      },
      data: {
        lastLogin: new Date()
      }
    })
    res.setHeader('Set-Cookie', cookie);
    user.password = undefined;

    return res.send(user);
  }


  @Get('verify-email')
  async verifyEmail(@Query('token') token: string, @Res() res: Response) {
    const result = await this.authService.verifyActivationToken(token)

    const cookie = await this.authService.login(result);
    res.setHeader('Set-Cookie', cookie);

    if (result)
      return res.redirect('https://studiooo.cz/auth/verify-email?message=ok')
    else
      return res.redirect('https://studiooo.cz/auth/verify-email?message=bad_request')
  }

  @Post('forgotten-password')
  async forgottenPassword(@Body() data: any) {
    return this.authService.forgottenPassword(data.email)
  }

  @Put(':token/reset-password')
  async resetPassword(@Param('token') token: string, @Body() data: any) {
    const user = await this.authService.resetPassword(token, data)

    return user;
  }

  @Post("send-email")
  async sendEmail(@Req() req: Request) {
    return this.authService.activateAccount(req.body)
  }

  @Post('register')
  async register(@Req() req: Request) {
    return this.authService.register(req.body)
  }

  @UseGuards(JwtAuthenticationGuard)
  @Delete('unregister')
  async unregister(@Req() req, @Res() res: Response) {
    return this.authService.unregister(req.user, res)
  }

  @UseGuards(JwtAuthenticationGuard)
  @Post('logout')
  async logOut(@Req() request: Request, @Res() response: Response) {
    response.setHeader('Set-Cookie', this.authService.logout());
    return response.sendStatus(200);
  }

  @UseGuards(JwtAuthenticationGuard)
  @Get('me')
  authenticate(@Request() request) {
    const user = request.user;
    user.password = undefined;
    return user;
  }

}