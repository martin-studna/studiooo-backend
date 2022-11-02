import { Test, TestingModule } from '@nestjs/testing';
import { WorkshopResultsService } from './workshop-results.service';

describe('WorkshopResultsService', () => {
  let service: WorkshopResultsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkshopResultsService],
    }).compile();

    service = module.get<WorkshopResultsService>(WorkshopResultsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
