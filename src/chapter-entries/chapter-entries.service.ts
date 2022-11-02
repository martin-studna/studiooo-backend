import { ChapterEntriesRepository } from './chapter-entries.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ChapterEntriesService {
  constructor(private readonly chapterEntriesRepository: ChapterEntriesRepository) { }

  public async create(userId: string, data: any) {
    return await this.chapterEntriesRepository.create(userId, data);
  }

  public async getEntries(userId: string, chapterId: string) {
    return this.chapterEntriesRepository.getEntries(userId, chapterId)
  }
}
