import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>, private jwtService: JwtService) {}

  async validateOrCreateUser(profile: any): Promise<{ user: User; token: string }> {
    let user = await this.userModel.findOne({ googleId: profile.id }).exec();
    
    if (!user) {
      user = await this.userModel.create({
        googleId: profile.id,
        email: profile.emails[0].value,
        name: profile.displayName,
        picture: profile.photos[0].value,
      });
    }

    const token = this.jwtService.sign({ googleId: user.googleId });
    return { user, token };
  }
}
