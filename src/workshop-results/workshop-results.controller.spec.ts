import { Test, TestingModule } from '@nestjs/testing';
import { WorkshopResultsController } from './workshop-results.controller';
import { WorkshopResultsService } from './workshop-results.service';

describe('WorkshopResultsController', () => {
  let controller: WorkshopResultsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkshopResultsController],
      providers: [WorkshopResultsService],
    }).compile();

    controller = module.get<WorkshopResultsController>(WorkshopResultsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
