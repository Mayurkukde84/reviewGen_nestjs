export class CreateReviewDto {
    readonly rating: number;
    readonly comment?: string;
    readonly user: string;
    readonly reviewSite: string;
  }
  