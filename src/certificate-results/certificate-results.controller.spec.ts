import { Test, TestingModule } from '@nestjs/testing';
import { CertificateResultsController } from './certificate-results.controller';
import { CertificateResultsService } from './certificate-results.service';

describe('CertificateResultsController', () => {
  let controller: CertificateResultsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CertificateResultsController],
      providers: [CertificateResultsService],
    }).compile();

    controller = module.get<CertificateResultsController>(CertificateResultsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
