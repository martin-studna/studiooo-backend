import { PrismaService } from '../prisma/prisma.service';
import { Injectable, NotImplementedException } from '@nestjs/common';



@Injectable()
export class TestEntriesRepository {
  constructor(private readonly prisma: PrismaService) { }

  public async create(data: any) {
    this.prisma.testEntry.createMany({ data })
  }

}