import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ReviewSourceModule } from './review-source/review-source.module';
import { ReviewSiteModule } from './review-site/review-site.module';
import { ReviewModule } from './review/review.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/review-management'),
    AuthModule,
    ReviewSourceModule,
    ReviewSiteModule,
    ReviewModule,
  ],
})
export class AppModule {}
