import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from "@nestjs/common";

@Injectable()
export class WorkshopResultsRepository {
  constructor(private readonly prisma: PrismaService) { }

  create(data: any) {
    try {
      return this.prisma.workshopResult.create({ data });
    } catch (error) {
      console.error(error);
    }
  }

  findAll() {
    return this.prisma.workshopResult.findMany();
  }

  findMany(skip: number, take: number) {
    return this.prisma.workshopResult.findMany({
      skip,
      take
    })
  }

  findById(id: string) {
    return this.prisma.workshopResult.findFirst({ where: { id } })
  }


  async getStats(userId: string) {
    try {
      const workshopResults = await this.prisma.workshopResult.findMany({
        where: {
          userId
        }
      })

      const workshopsStats = await Promise.all(workshopResults.map(async w => {
        const results = await this.prisma.chapterResult.findMany({
          where: {
            workshopId: w.workshopId,
            userId: userId
          },
          select: {
            overviewCompleted: true,
            testCompleted: true,
            chapterId: true
          }
        })

        const finishedChapterOverviewsCount = results.reduce((acc, cur) => cur.overviewCompleted === true ? ++acc : acc, 0)
        const finishedTestCount = results.reduce((acc, cur) => cur.testCompleted === true ? ++acc : acc, 0)

        const progress = (finishedTestCount + finishedChapterOverviewsCount + (w.testCompleted ? 1 : 0)) / (results.length * 2 + 1)


        const workshopData = await this.prisma.workshop.findFirst({
          where: {
            id: w.workshopId
          },
          select: {
            title: true,
            hours: true,
            imageUrl: true,
          }
        })

        return { workshopId: w?.workshopId, title: workshopData?.title, progress, chapterCount: results?.length, hours: workshopData?.hours, imageUrl: workshopData?.imageUrl }
      }))

      const finishedWorkshopsCount = workshopResults.reduce((acc, cur) => cur.completed === true ? ++acc : acc, 0);
      const unfinishedWorkshopsCount = workshopResults.reduce((acc, cur) => cur.completed === false ? ++acc : acc, 0);
      const certificateCount = await this.prisma.certificateResult.count({
        where: {
          userId
        }
      })

      return { finishedWorkshopsCount, unfinishedWorkshopsCount, certificateCount, workshopsStats }
    } catch (error) {
      console.log(error);

    }

  }

  async findByQuery(userId: string, workshopId: string) {

    try {
      const workshop = await this.prisma.workshopResult.findFirst({
        where: {
          userId,
          workshopId
        }
      });

      if (!workshop)
        return this.prisma.workshopResult.create({
          data: {
            workshopId,
            userId
          }
        })

      return workshop

    } catch (error) {

    }

  }

  async getProgress(userId: string, workshopId: string) {
    try {
      const workshopResult = await this.prisma.workshopResult.findFirst({
        where: {
          userId,
          workshopId
        }
      });

      const chapterResults = await this.prisma.chapterResult.findMany({
        where: {
          workshopId: workshopId,
          userId: userId
        },
        select: {
          overviewCompleted: true,
          testCompleted: true,
          chapterId: true
        }
      })

      const finishedChapterOverviewsCount = chapterResults.reduce((acc, cur) => cur.overviewCompleted === true ? ++acc : acc, 0)
      const finishedTestCount = chapterResults.reduce((acc, cur) => cur.testCompleted === true ? ++acc : acc, 0)

      const progress = (finishedTestCount + finishedChapterOverviewsCount + (workshopResult.testCompleted ? 1 : 0)) / (chapterResults.length * 2 + 1)

      return progress

    } catch (error) {

    }
  }

  updateById(id: string, data: any) {
    return this.prisma.workshopResult.update({
      where: {
        id
      },
      data
    });
  }

  deleteById(id: string) {
    return this.prisma.workshopResult.delete({ where: { id } });
  }

  deleteByUserId(userId: string) {
    return this.prisma.workshopResult.deleteMany({
      where: { 
        userId
      }
    })
  }
}