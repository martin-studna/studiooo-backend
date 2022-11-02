/*
  Warnings:

  - Made the column `blocked` on table `User` required. The migration will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "blocked" SET NOT NULL,
ALTER COLUMN "blocked" SET DEFAULT false;
