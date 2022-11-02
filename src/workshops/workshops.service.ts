import { Workshop } from '.prisma/client';
import { WorkshopsRepository } from './workshops.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class WorkshopsService {
  constructor(private readonly workshopsRepository: WorkshopsRepository) { }

  async create(data: Workshop) {
    return await this.workshopsRepository.create(data);
  }

  findMany(skip: number, limit: number) {
    return this.workshopsRepository.findMany(skip, limit);
  }

  findCertificates(workshopId: string) {
    return this.workshopsRepository.findCertificates(workshopId);
  }

  findById(id: string) {

    return this.workshopsRepository.findById(id);
  }

  updateById(id: string, data: any) {
    return this.workshopsRepository.updateById(id, data);
  }

  deleteById(id: string) {
    return this.workshopsRepository.deleteById(id);
  }
}
