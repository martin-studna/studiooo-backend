import { ChapterResultsRepository } from './chapter-results.repository';
import { Injectable } from '@nestjs/common';
import * as bcryptjs from 'bcryptjs'


@Injectable()
export class ChapterResultsService {
  constructor(private readonly chapterResultsRepository: ChapterResultsRepository) { }

  async create(data: any) {
    return this.chapterResultsRepository.create(data);
  }

  findAll() {
    return this.chapterResultsRepository.findAll();
  }

  findMany(data: any) {
    return this.chapterResultsRepository.findMany(data);
  }

  findById(id: string) {
    return this.chapterResultsRepository.findById(id)
  }

  updateById(id: string, data: any) {
    return this.chapterResultsRepository.updateById(id, data)
  }

  removeById(id: string) {
    return this.chapterResultsRepository.deleteById(id)
  }
}
