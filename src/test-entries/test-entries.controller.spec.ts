import { Test, TestingModule } from '@nestjs/testing';
import { TestEntriesController } from './test-entries.controller';

describe('TestEntriesController', () => {
  let controller: TestEntriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestEntriesController],
    }).compile();

    controller = module.get<TestEntriesController>(TestEntriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
