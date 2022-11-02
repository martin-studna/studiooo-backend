import { PrismaClient } from '@prisma/client';
//import { Difficulty } from '.prisma/client';
import faker = require('faker');

let f = faker
f.locale = 'en'
const prisma = new PrismaClient()

const answers = [
  {
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  },
  {
    text: 'Vivamus ac leo pretium faucibus. Temporibus autem quibusdam et aut officiis debitis aut.',
  },
  {
    text: 'Aliquam ornare wisi eu metus. Duis viverra diam non justo. Sed vel lectus.',
  },
  {
    text: 'In rutrum. Mauris dictum facilisis augue. Aliquam erat volutpat.',
  },
  {
    text: 'Duis condimentum augue id magna semper rutrum. Cras pede libero, dapibus nec, pretium.',
  }
]


const testQuestion = {
  text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit?',
  answers: {
    create: answers
  }
}

const question = {
  text: 'Otázka Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Vivamus porttitor turpis ac leo. Curabitur sagittis hendrerit ante.',
  answers: {
    create: answers
  }
}

const chapter = {
  title: 'Název kapitoly lorem ipsum',
  media: 'https://www.youtube.com/watch?v=3E7hkPZ-HTk',
  description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Vivamus porttitor turpis ac leo. Curabitur sagittis hendrerit ante. Mauris elementum mauris vitae tortor. Vestibulum fermentum tortor id mi. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Fusce wisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum fermentum tortor id mi. Pellentesque arcu.',
  questions: {
    create: [
      question,
      question,
      question,
      question,
      question,
      question,
      question,
      question,
      question,
    ]
  }
}

const chapters = {
  create: [
    chapter,
    chapter,
    chapter,
    chapter,
    chapter,
    chapter,
    chapter,
  ]
}

const questions = {
  create: [
    testQuestion,
    testQuestion,
    testQuestion,
    testQuestion,
    testQuestion,
    testQuestion,
    testQuestion,
    testQuestion,
  ]
}

const workshop = {
  title: 'Nadpis názvu kurzu lorem ',
  author: f.name.findName(),
  summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Vivamus porttitor turpis ac leo. Curabitur sagittis hendrerit ante. Mauris elementum mauris vitae tortor. Vestibulum fermentum tortor id mi. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus.',
  overview: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus.',
  content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Nam quis nulla. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Fusce nibh. Aliquam in lorem sit amet leo accumsan lacinia. Sed convallis magna eu sem. Vivamus ac leo pretium faucibus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Vivamus luctus egestas leo. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Aliquam ornare wisi eu metus. Duis viverra diam non justo. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem.',
  hours: f.datatype.number(20),
  difficulty: "EASY",
  isPaid: f.datatype.boolean(),
  published: f.datatype.boolean(),
  chapters,
  publishedAt: new Date(),
  createdAt: new Date(),
  updatedAt: new Date(),
  imageUrl: f.image.imageUrl(),
  videoUrl: null,
  questions
}


const workshops = [
  workshop,
  workshop,
  workshop,
  workshop,
  workshop,
  workshop,
  workshop,
  workshop,
  workshop,
  workshop,
  workshop,
  workshop,
]

export const seed = async () => {

  try {
    await Promise.all(
      workshops.map(async workshop => {
        f = faker
        await prisma.workshop.create({
          data: {
            ...workshop
          },
          include: {
            chapters: {
              include: {
                questions: {
                  include: {
                    answers: true
                  }
                }
              }
            },
            questions: {
              include: {
                answers: true
              }
            }
          }
        })
      })
    )
  } catch (error) {

  }
}

seed()