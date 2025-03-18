import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ReviewSite } from '../review-site/review-site.schema';

@Schema()
export class Review extends Document {
  @Prop({ required: true })
  rating: number; // 1-5 stars

  @Prop()
  comment: string;

  @Prop({ required: true })
  user: string; // Google Authenticated user ID

  @Prop({ type: Types.ObjectId, ref: 'ReviewSite', required: true })
  reviewSite: ReviewSite;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
