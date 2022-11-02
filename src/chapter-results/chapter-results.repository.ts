import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from "@nestjs/common";

@Injectable()
export class ChapterResultsRepository {
  constructor(private readonly prisma: PrismaService) { }

  create(data: any) {
    try {
      console.log(data);

      return this.prisma.chapterResult.create({ data });
    } catch (error) {
      console.error(error);
    }
  }

  async findMany(data: any) {
    try {
      console.log(data);

      let chapterResults = await this.prisma.chapterResult.findMany({
        where: {
          workshopId: data.workshopId,
          userId: data.userId
        },
        orderBy: {
          order: 'asc'
        }
      })

      if (chapterResults.length !== 0) {
        return chapterResults
      }

      const chapters = await this.prisma.chapter.findMany({
        where: {
          workshopId: data.workshopId
        }
      })

      chapterResults = await Promise.all(chapters.map(async c => {
        return await this.prisma.chapterResult.create({
          data: {
            userId: data.userId,
            workshopId: data.workshopId,
            chapterId: c.id,
            order: c.order
          }
        })
      }))

      chapterResults = chapterResults.sort((a, b) => a.order - b.order)


      return chapterResults;
    } catch (error) {
      console.error(error);
    }
  }

  findAll() {
    return this.prisma.chapterResult.findMany();
  }


  findById(id: string) {
    return this.prisma.chapterResult.findFirst({
      where: {
        id
      }
    });
  }

  updateById(id: string, data: any) {
    return this.prisma.chapterResult.update({
      where: {
        id
      },
      data
    });
  }

  deleteById(id: string) {
    return this.prisma.chapterResult.delete({ where: { id } });
  }

  deleteByUserId(userId: string) {
    return this.prisma.chapterResult.deleteMany({
      where: {
        userId
      }
    })
  }
}