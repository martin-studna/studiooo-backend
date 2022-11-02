import { Test, TestingModule } from '@nestjs/testing';
import { ChapterEntriesService } from './chapter-entries.service';

describe('ChapterEntriesService', () => {
  let service: ChapterEntriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChapterEntriesService],
    }).compile();

    service = module.get<ChapterEntriesService>(ChapterEntriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
