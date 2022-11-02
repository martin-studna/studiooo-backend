import { WorkshopResultsRepository } from './workshop-results.repository';
import { Injectable } from '@nestjs/common';


@Injectable()
export class WorkshopResultsService {
  constructor(private readonly workshopResultsRepository: WorkshopResultsRepository) { }

  async create(data: any) {
    return this.workshopResultsRepository.create(data);
  }

  findAll() {
    return this.workshopResultsRepository.findAll();
  }

  findMany(skip: number, take: number) {
    return this.workshopResultsRepository.findMany(skip, take);
  }

  findById(id: string) {
    return this.workshopResultsRepository.findById(id)
  }

  getStats(userId: string) {
    return this.workshopResultsRepository.getStats(userId)
  }

  findByQuery(userId: string, workshopId: string) {
    return this.workshopResultsRepository.findByQuery(userId, workshopId)
  }

  getProgress(userId: string, workshopId: string) {
    return this.workshopResultsRepository.getProgress(userId, workshopId)
  }

  updateById(id: string, data: any) {
    return this.workshopResultsRepository.updateById(id, data)
  }

  removeById(id: string) {
    return this.workshopResultsRepository.deleteById(id)
  }
}
