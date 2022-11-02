import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from "@nestjs/common";

@Injectable()
export class CertificateResultsRepository {
  constructor(private readonly prisma: PrismaService) { }

  create(data: any) {
    try {
      return this.prisma.certificateResult.create({ data });
    } catch (error) {
      console.error(error);
    }
  }

  findAll() {
    return this.prisma.certificateResult.findMany();
  }

  findMany(skip: number, take: number) {
    return this.prisma.certificateResult.findMany({
      skip,
      take
    })
  }

  findById(id: string) {
    return this.prisma.certificateResult.findFirst({ where: { id } })
  }

  async findByQuery(userId: string, workshopId: string) {

    try {
      let certificate: any = await this.prisma.certificateResult.findFirst({
        where: {
          userId,
          workshopId
        }
      });

      if (certificate) return certificate

      certificate = await this.prisma.certificate.findFirst({
        where: {
          workshopId
        }
      })

      return this.prisma.certificateResult.create({
        data: {
          workshopId,
          userId,
          certificateId: certificate.id
        }
      })

    } catch (error) {

    }

  }

  updateById(id: string, data: any) {
    return this.prisma.certificateResult.update({
      where: {
        id
      },
      data
    });
  }

  deleteById(id: string) {
    return this.prisma.certificateResult.delete({ where: { id } });
  }
}