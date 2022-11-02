import { PrismaService } from './../prisma/prisma.service';
import { BadRequestException, HttpException, Injectable } from "@nestjs/common";

@Injectable()
export class WorkshopsRepository {
  constructor(private readonly prisma: PrismaService) { }

  public findCertificates(workshopId: string) {
    return this.prisma.certificate.findMany({
      where: {
        workshopId
      }
    })
  }

  public async create(data: any) {

    let { chapters, questions, workshop } = data

    workshop.hours = Number(workshop.hours)

    try {
      const workshopResult = await this.prisma.workshop.create({
        data: {
          ...workshop
        }
      })

      if (questions) {
        await Promise.all(
          await questions?.map(async question => {
            const testQuestionResult = await this.prisma.testQuestion.create({
              data: {
                workshop: {
                  connect: {
                    id: workshopResult.id
                  }
                },
                text: question.text
              }
            })


            question.answers.map(async answer => {
              await this.prisma.testAnswer.create({
                data: {
                  testQuestion: {
                    connect: {
                      id: testQuestionResult.id
                    }
                  },
                  text: answer
                },
              })
            })
          })
        )
      }

      if (chapters) {
        await Promise.all(
          chapters?.map(async chapter => {
            const chapterResult = await this.prisma.chapter.create({
              data: {
                title: chapter.title,
                workshop: {
                  connect: {
                    id: workshopResult.id
                  }
                },
                media: chapter.media,
                description: chapter.description,
              }
            })
            chapter?.questions?.map(async question => {
              const chapterQuestionResult = await this.prisma.chapterQuestion.create({
                data: {
                  chapter: {
                    connect: {
                      id: chapterResult.id
                    }
                  },
                  text: question.text
                }
              })

              question.answers.map(async answer => {
                await this.prisma.chapterAnswer.create({
                  data: {
                    chapterQuestion: {
                      connect: {
                        id: chapterQuestionResult.id
                      }
                    },
                    text: answer
                  }
                })
              })


            })
          })
        )
      }



      return workshopResult

    } catch (error) {
      throw new Error(error);

    }
  }

  public findMany(skip, limit) {
    return this.prisma.workshop.findMany({
      skip,
      take: limit
    });
  }

  public async findById(id: string) {
    const workshop = await this.prisma.workshop.findFirst({
      where: {
        id
      }
    });

    let chapters: any = await this.prisma.chapter.findMany({
      where: {
        workshopId: workshop.id
      },
      orderBy: {
        order: 'asc'
      }
    })

    chapters = await Promise.all(chapters.map(async c => {
      let questions: any = await this.prisma.chapterQuestion.findMany({
        where: {
          chapterId: c.id
        },
      })

      questions = await Promise.all(questions.map(async q => {
        let answers = await this.prisma.chapterAnswer.findMany({
          where: {
            chapterQuestionId: q.id
          }
        })

        q.answers = answers

        return q
      }))

      c.questions = questions

      return c
    }))

    for (let i = 0; i < chapters.length; i++) {
      let questions: any = await this.prisma.chapterQuestion.findMany({
        where: {
          chapterId: chapters[i].id
        }
      })

      for (let j = 0; j < questions.length; j++) {
        let answers: any = await this.prisma.chapterAnswer.findMany({
          where: {
            chapterQuestionId: questions[j].id
          }
        })

        questions[j].answers = answers
      }

      chapters.questions = questions
    }

    let questions: any = await this.prisma.testQuestion.findMany({
      where: {
        workshopId: workshop.id
      }
    })

    for (let i = 0; i < questions.length; i++) {
      let answers: any = await this.prisma.testAnswer.findMany({
        where: {
          testQuestionId: questions[i].id
        }
      })

      questions[i].answers = answers

    }

    return { workshop, chapters, questions }
  }

  async updateById(id: string, data: any) {
    let { chapters, questions, workshop } = data

    if (!chapters) chapters = null
    if (!questions) questions = null
    if (!workshop) workshop = null

    workshop.createdAt = new Date(workshop.createdAt)
    workshop.updatedAt = new Date(workshop.updatedAt)
    workshop.publishedAt = new Date(workshop.publishedAt)

    try {
      const workshopResult = await this.prisma.workshop.update({
        where: {
          id
        },
        data: {
          ...workshop
        }
      })

      console.log(workshopResult);

      if (questions) {

        await this.prisma.testQuestion.deleteMany({
          where: {
            workshopId: id
          }
        })

        await Promise.all(
          await questions?.map(async question => {
            const newQuestion = await this.prisma.testQuestion.create({
              data: {
                id: question.id,
                text: question.text,
                workshopId: id
              }
            })

            await this.prisma.testAnswer.deleteMany({
              where: {
                testQuestionId: question.id
              }
            })

            question.answers.map(async answer => {
              await this.prisma.testAnswer.create({
                data: {
                  id: answer.id,
                  testQuestionId: newQuestion.id,
                  text: answer.text,
                  correct: answer.correct,
                },
              })
            })
          })
        )
      }

      if (chapters) {

        await this.prisma.chapter.deleteMany({
          where: {
            workshopId: id
          }
        })

        await Promise.all(
          chapters?.map(async chapter => {
            const newChapter = await this.prisma.chapter.create({
              data: {
                id: chapter.id,
                workshopId: id,
                media: chapter.media,
                description: chapter.description,
                order: chapter.order,
                timeEstimate: chapter.timeEstimate,
                title: chapter.title,
              }
            })

            await this.prisma.chapterQuestion.deleteMany({
              where: {
                chapterId: chapter.id
              }
            })

            chapter?.questions?.map(async question => {
              const newQuestion = await this.prisma.chapterQuestion.create({
                data: {
                  id: question.id,
                  chapterId: chapter.id,
                  text: question.text
                }
              })

              await this.prisma.chapterAnswer.deleteMany({
                where: {
                  chapterQuestionId: question.id
                }
              })

              question.answers.map(async answer => {
                await this.prisma.chapterAnswer.create({
                  data: {
                    id: answer.id,
                    chapterQuestionId: newQuestion.id,
                    text: answer.text,
                    correct: answer.correct
                  }
                })
              })
            })
          })
        )
      }

      return workshopResult

    } catch (error) {
      return new BadRequestException(error.message);
      
    }
  }

  public async deleteById(id: string) {

    await this.prisma.chapterAnswer.deleteMany({
      where: {
        chapterQuestion: {
          chapter: {
            workshopId: id
          }
        }
      }
    })

    await this.prisma.chapterQuestion.deleteMany({
      where: {
        chapter: {
          workshopId: id
        }
      }
    })


    await this.prisma.chapter.deleteMany({
      where: {
        workshopId: id
      }
    })

    await this.prisma.testAnswer.deleteMany({
      where: {
        testQuestion: {
          workshopId: id
        }
      }
    })

    await this.prisma.testQuestion.deleteMany({
      where: {
        workshopId: id
      }
    })

    return this.prisma.workshop.delete({ where: { id } });
  }
}