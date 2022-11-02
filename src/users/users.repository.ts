import { PrismaService } from './../prisma/prisma.service';
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) { }

  create(data: any) {
    try {
      console.log(data);

      return this.prisma.user.create({ data });
    } catch (error) {
      console.error(error);
    }
  }

  async verifyActivationToken(token: string) {
    try {

      const user = await this.prisma.user.findFirst({
        where: {
          activationToken: token
        }
      })

      if (!user)
        throw new HttpException('The activation token is invalid', HttpStatus.BAD_REQUEST)

      await this.prisma.user.update({
        where: {
          id: user.id
        },
        data: {
          isActivated: true
        }
      })

      return user
    } catch (error) {
      return null;
    }
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  public async findCertificates(id: string) {

    const certificateResults = await this.prisma.certificateResult.findMany({
      where: {
        userId: id
      }
    })

    if (certificateResults.length === 0) return null

    const certificates = await Promise.all(certificateResults.map(async c => {
      const certificate = await this.prisma.certificate.findFirst({
        where: {
          id: c.certificateId
        }
      })

      const workshop = await this.prisma.workshop.findFirst({
        where: {
          id: c.workshopId
        }
      })

      const user = await this.prisma.user.findFirst({
        where: {
          id
        }
      })

      return { ...certificate, title: workshop.title, userFullname: user.fullname }
    }))



    return certificates
  }

  findMany(skip: number, take: number) {
    return this.prisma.user.findMany({
      skip,
      take
    })
  }

  findById(id: string) {
    return this.prisma.user.findFirst({
      where: {
        id
      }
    });
  }

  async existsByEmail(email: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        email
      }
    });

    if (!user)
      return false
    return true
  }

  updateById(id: string, data: any) {
    return this.prisma.user.update({
      where: {
        id
      },
      data
    });
  }

  deleteById(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }
}