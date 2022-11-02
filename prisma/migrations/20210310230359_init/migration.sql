/*
  Warnings:

  - The migration will change the primary key for the `User` table. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - The migration will change the primary key for the `Workshop` table. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `published` on the `Workshop` table. All the data in the column will be lost.
  - You are about to drop the column `authorId` on the `Workshop` table. All the data in the column will be lost.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ageCategory` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employment` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `blocked` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Workshop` table without a default value. This is not possible if the table is not empty.
  - Added the required column `difficulty` to the `Workshop` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isPaid` to the `Workshop` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Difficulty" AS ENUM ('EASY', 'MEDIUM', 'HARD');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'UNKNOWN');

-- DropForeignKey
ALTER TABLE "Workshop" DROP CONSTRAINT "Workshop_authorId_fkey";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "name",
ADD COLUMN     "username" TEXT,
ADD COLUMN     "fullname" TEXT,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "age" INTEGER,
ADD COLUMN     "yearOfBirth" INTEGER,
ADD COLUMN     "ageCategory" INTEGER NOT NULL,
ADD COLUMN     "role" "Role" NOT NULL,
ADD COLUMN     "gender" "Gender",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "lastLogin" TIMESTAMP(3),
ADD COLUMN     "employment" TEXT NOT NULL,
ADD COLUMN     "blocked" BOOLEAN NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- AlterTable
ALTER TABLE "Workshop" DROP CONSTRAINT "Workshop_pkey",
DROP COLUMN "published",
DROP COLUMN "authorId",
ADD COLUMN     "userId" TEXT NOT NULL,
ADD COLUMN     "author" TEXT,
ADD COLUMN     "shortDescription" TEXT,
ADD COLUMN     "ExpectationDescription" TEXT,
ADD COLUMN     "Hours" INTEGER,
ADD COLUMN     "difficulty" "Difficulty" NOT NULL,
ADD COLUMN     "isPaid" BOOLEAN NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD PRIMARY KEY ("id");
DROP SEQUENCE "Workshop_id_seq";

-- CreateTable
CREATE TABLE "Certificate" (
    "id" TEXT NOT NULL,
    "workshopId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Workshop" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
