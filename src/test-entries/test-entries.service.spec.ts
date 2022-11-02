import { Test, TestingModule } from '@nestjs/testing';
import { TestEntriesService } from './test-entries.service';

describe('TestEntriesService', () => {
  let service: TestEntriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestEntriesService],
    }).compile();

    service = module.get<TestEntriesService>(TestEntriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
