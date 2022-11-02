import { Test, TestingModule } from '@nestjs/testing';
import { ChapterResultsService } from './chapter-results.service';

describe('UsersService', () => {
  let service: ChapterResultsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChapterResultsService],
    }).compile();

    service = module.get<ChapterResultsService>(ChapterResultsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
