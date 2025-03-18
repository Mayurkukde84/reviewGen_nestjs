import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class ReviewSource extends Document {
  @Prop({ required: true, unique: true })
  name: string; // Google Maps, Trustpilot, etc.
}

export const ReviewSourceSchema = SchemaFactory.createForClass(ReviewSource);
