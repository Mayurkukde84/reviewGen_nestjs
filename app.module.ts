import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ReviewSourceModule } from './review-source/review-source.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/review-management'),
    AuthModule,
    ReviewSourceModule,
  ],
})
export class AppModule {}
