import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ReviewSource } from '../review-source/review-source.schema';

@Schema()
export class ReviewSite extends Document {
  @Prop({ required: true })
  name: string; // e.g., "Google Maps - XYZ Store"

  @Prop({ type: Types.ObjectId, ref: 'ReviewSource', required: true })
  reviewSource: ReviewSource;
}

export const ReviewSiteSchema = SchemaFactory.createForClass(ReviewSite);
