import { CertificateResultsRepository } from './certificate-results.repository';
import { Injectable } from '@nestjs/common';


@Injectable()
export class CertificateResultsService {
  constructor(private readonly certificateResultsRepository: CertificateResultsRepository) { }

  async create(data: any) {
    return this.certificateResultsRepository.create(data);
  }

  findAll() {
    return this.certificateResultsRepository.findAll();
  }

  findMany(skip: number, take: number) {
    return this.certificateResultsRepository.findMany(skip, take);
  }

  findById(id: string) {
    return this.certificateResultsRepository.findById(id)
  }

  findByQuery(userId: string, certificateId: string) {
    return this.certificateResultsRepository.findByQuery(userId, certificateId)
  }

  updateById(id: string, data: any) {
    return this.certificateResultsRepository.updateById(id, data)
  }

  removeById(id: string) {
    return this.certificateResultsRepository.deleteById(id)
  }
}
