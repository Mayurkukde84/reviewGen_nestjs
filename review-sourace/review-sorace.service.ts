import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ReviewSource } from './review-source.schema';

@Injectable()
export class ReviewSourceService {
  constructor(@InjectModel(ReviewSource.name) private reviewSourceModel: Model<ReviewSource>) {}

  async create(name: string, userId: string): Promise<ReviewSource> {
    return this.reviewSourceModel.create({ name, user: userId });
  }

  async getByUser(userId: string): Promise<ReviewSource[]> {
    return this.reviewSourceModel.find({ user: userId }).exec();
  }

  async update(id: string, name: string): Promise<ReviewSource> {
    return this.reviewSourceModel.findByIdAndUpdate(id, { name }, { new: true });
  }

  async delete(id: string): Promise<void> {
    await this.reviewSourceModel.findByIdAndDelete(id);
  }
}
