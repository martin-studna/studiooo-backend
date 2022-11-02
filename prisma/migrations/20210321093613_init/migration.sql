/*
  Warnings:

  - You are about to drop the column `workshopId` on the `Certificate` table. All the data in the column will be lost.
  - You are about to drop the column `yearOfBirth` on the `User` table. All the data in the column will be lost.
  - You are about to alter the column `ageCategory` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Enum("AgeCategory")`.
  - You are about to drop the column `userId` on the `Workshop` table. All the data in the column will be lost.
  - You are about to drop the column `shortDescription` on the `Workshop` table. All the data in the column will be lost.
  - You are about to drop the column `ExpectationDescription` on the `Workshop` table. All the data in the column will be lost.
  - You are about to drop the column `Hours` on the `Workshop` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "AgeCategory" AS ENUM ('CHILDREN', 'YOUTH', 'ADULT', 'SENIOR');

-- DropForeignKey
ALTER TABLE "Workshop" DROP CONSTRAINT "Workshop_userId_fkey";

-- AlterTable
ALTER TABLE "Certificate" DROP COLUMN "workshopId",
ADD COLUMN     "media" TEXT,
ADD COLUMN     "text" TEXT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "yearOfBirth",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "ageCategory" SET DATA TYPE "AgeCategory";

-- AlterTable
ALTER TABLE "Workshop" DROP COLUMN "userId",
DROP COLUMN "shortDescription",
DROP COLUMN "ExpectationDescription",
DROP COLUMN "Hours",
ADD COLUMN     "summary" TEXT,
ADD COLUMN     "overview" TEXT,
ADD COLUMN     "hours" INTEGER,
ADD COLUMN     "published" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "publishedAt" TIMESTAMP(3),
ALTER COLUMN "difficulty" DROP NOT NULL,
ALTER COLUMN "isPaid" SET DEFAULT false;

-- CreateTable
CREATE TABLE "Attendee" (
    "userId" TEXT NOT NULL,
    "workshopId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Qualification" (
    "workshopId" TEXT NOT NULL,
    "certificateId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Chapter" (
    "id" TEXT NOT NULL,
    "media" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "workshopId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChapterQuestion" (
    "id" TEXT NOT NULL,
    "chapterId" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "options" TEXT[],

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TestQuestion" (
    "id" TEXT NOT NULL,
    "workshopId" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "options" TEXT[],

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Attendee.userId_unique" ON "Attendee"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Attendee.workshopId_unique" ON "Attendee"("workshopId");

-- CreateIndex
CREATE UNIQUE INDEX "Qualification.workshopId_unique" ON "Qualification"("workshopId");

-- CreateIndex
CREATE UNIQUE INDEX "Qualification.certificateId_unique" ON "Qualification"("certificateId");

-- AddForeignKey
ALTER TABLE "Chapter" ADD FOREIGN KEY ("workshopId") REFERENCES "Workshop"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChapterQuestion" ADD FOREIGN KEY ("chapterId") REFERENCES "Chapter"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestQuestion" ADD FOREIGN KEY ("workshopId") REFERENCES "Workshop"("id") ON DELETE CASCADE ON UPDATE CASCADE;
