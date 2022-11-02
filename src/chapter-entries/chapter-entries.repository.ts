import { PrismaService } from '../prisma/prisma.service';
import { Injectable, NotImplementedException, HttpStatus, HttpException } from '@nestjs/common';



@Injectable()
export class ChapterEntriesRepository {
  constructor(private readonly prisma: PrismaService) { }

  public async create(userId: string, data: any) {

    try {
      await this.prisma.chapterEntry.deleteMany({
        where: {
          userId,
          chapterId: data.chapterId,
        }
      })

      await Promise.all(data.answers.map(async a => {
        await this.prisma.chapterEntry.create({
          data: {
            chapter: {
              connect: {
                id: data.chapterId
              }
            },
            question: {
              connect: {
                id: a.chapterQuestionId
              }
            },
            user: {
              connect: {
                id: userId
              }
            },
            answer: {
              connect: {
                id: a.id
              }
            }
          }
        })
      }))
    } catch (error) {
      throw new HttpException("Something went wrong", HttpStatus.BAD_REQUEST)
    }

    return HttpStatus.OK
  }

  public async getEntries(userId: string, chapterId: string) {
    const entries = await this.prisma.chapterEntry.findMany({
      where: {
        userId,
        chapterId
      }
    })

    const result = await Promise.all(entries.map(async a => {
      const question = await this.prisma.chapterQuestion.findFirst({ where: { id: a.questionId } })
      const selectedAnswer = await this.prisma.chapterAnswer.findFirst({ where: { id: a.answerId } })
      let questionAnswers: any = await this.prisma.chapterAnswer.findMany({ where: { chapterQuestionId: question.id } })

      questionAnswers = questionAnswers.map(q => {
        if (q.id === selectedAnswer.id)
          q.selected = true
        else
          q.selected = false
        return q
      })

      return {
        ...question,
        answers: questionAnswers
      }
    }))

    return result
  }

  public async deleteByUserId(userId: string) {
    return this.prisma.chapterEntry.deleteMany({
      where: {
        userId
      }
    })
  }

}