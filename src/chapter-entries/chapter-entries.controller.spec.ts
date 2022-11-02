import { Test, TestingModule } from '@nestjs/testing';
import { ChapterEntriesController } from './chapter-entries.controller';

describe('ChapterEntriesController', () => {
  let controller: ChapterEntriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChapterEntriesController],
    }).compile();

    controller = module.get<ChapterEntriesController>(ChapterEntriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
