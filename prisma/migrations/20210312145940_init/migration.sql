-- AlterTable
ALTER TABLE "User" ALTER COLUMN "ageCategory" DROP NOT NULL,
ALTER COLUMN "role" DROP NOT NULL,
ALTER COLUMN "title" DROP NOT NULL,
ALTER COLUMN "employment" DROP NOT NULL,
ALTER COLUMN "blocked" DROP NOT NULL;
