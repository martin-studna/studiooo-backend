import { Test, TestingModule } from '@nestjs/testing';
import { ChapterResultsController } from './chapter-results.controller';
import { ChapterResultsService } from './chapter-results.service';

describe('ChapterResultsController', () => {
  let controller: ChapterResultsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChapterResultsController],
      providers: [ChapterResultsService],
    }).compile();

    controller = module.get<ChapterResultsController>(ChapterResultsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
