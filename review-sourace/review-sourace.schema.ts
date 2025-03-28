import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class ReviewSource extends Document {
  @Prop({ required: true })
  name: string; // e.g., "Google Maps", "Trustpilot"

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  user: Types.ObjectId;
}

export const ReviewSourceSchema = SchemaFactory.createForClass(ReviewSource);
