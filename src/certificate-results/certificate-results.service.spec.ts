import { Test, TestingModule } from '@nestjs/testing';
import { CertificateResultsService } from './certificate-results.service';

describe('CertificateResultsService', () => {
  let service: CertificateResultsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CertificateResultsService],
    }).compile();

    service = module.get<CertificateResultsService>(CertificateResultsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
