ALTER TABLE "Chapter"
DROP CONSTRAINT "Chapter_workshopId_fkey",
ADD CONSTRAINT "Chapter_workshopId_fkey"
    FOREIGN KEY ("workshopId")
    REFERENCES "Workshop"
    ON DELETE  CASCADE;


ALTER TABLE "ChapterQuestion"
DROP CONSTRAINT "ChapterQuestion_chapterId_fkey",
ADD CONSTRAINT "ChapterQuestion_chapterId_fkey"
    FOREIGN KEY ("chapterId")
    REFERENCES "Chapter"
    ON DELETE  CASCADE;

ALTER TABLE "ChapterAnswer"
DROP CONSTRAINT "ChapterAnswer_chapterQuestionId_fkey",
ADD CONSTRAINT "ChapterAnswer_chapterQuestionId_fkey"
    FOREIGN KEY ("chapterQuestionId")
    REFERENCES "ChapterQuestion"
    ON DELETE  CASCADE;


ALTER TABLE "TestQuestion"
DROP CONSTRAINT "TestQuestion_workshopId_fkey",
ADD CONSTRAINT "TestQuestion_workshopId_fkey"
    FOREIGN KEY ("workshopId")
    REFERENCES "Workshop"
    ON DELETE  CASCADE;

ALTER TABLE "TestAnswer"
DROP CONSTRAINT "TestAnswer_testQuestionId_fkey",
ADD CONSTRAINT "TestAnswer_testQuestionId_fkey"
    FOREIGN KEY ("testQuestionId")
    REFERENCES "TestQuestion"
    ON DELETE  CASCADE;



