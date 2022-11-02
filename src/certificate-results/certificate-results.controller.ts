import { RolesGuard } from '../auth/guards/roles.guard';
import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards, Req, Query, ParseIntPipe } from '@nestjs/common';
import { CertificateResultsService } from './certificate-results.service';
import { JwtAuthenticationGuard } from '../auth/guards/jwt-auth.guard';
import { CertificateResult } from '.prisma/client';

@UseGuards(JwtAuthenticationGuard, RolesGuard)
@Controller('certificate-results')
export class CertificateResultsController {
  constructor(private readonly certificateResultsService: CertificateResultsService) { }

  @Post()
  create(@Body() certificateResult: CertificateResult) {
    return this.certificateResultsService.create(certificateResult);
  }

  // @Get()
  // findMany(@Query('skip', ParseIntPipe) skip: number, @Query('limit', ParseIntPipe) limit: number) {
  //   return this.certificateResultsService.findMany(skip, limit);
  // }

  @Get()
  findByQuery(@Query('userid') userId: string, @Query('workshopid') certificateId: string) {
    return this.certificateResultsService.findByQuery(userId, certificateId);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.certificateResultsService.findById(id);
  }


  @Put(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.certificateResultsService.updateById(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Req() req) {
    return this.certificateResultsService.removeById(id);
  }
}
