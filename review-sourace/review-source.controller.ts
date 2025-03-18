import { Controller, Get, Post, Put, Delete, Body, Param, Req } from '@nestjs/common';
import { ReviewSourceService } from './review-source.service';

@Controller('review-sources')
export class ReviewSourceController {
  constructor(private readonly reviewSourceService: ReviewSourceService) {}

  @Post()
  async create(@Body() { name }: { name: string }, @Req() req) {
    return this.reviewSourceService.create(name, req.user.googleId);
  }

  @Get()
  async getUserSources(@Req() req) {
    return this.reviewSourceService.getByUser(req.user.googleId);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() { name }: { name: string }) {
    return this.reviewSourceService.update(id, name);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.reviewSourceService.delete(id);
  }
}
