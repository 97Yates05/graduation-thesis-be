import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class IndustryService {
  constructor(@InjectModel('industry') private industryModel: Model<any>) {}
  async findByName(name: string): Promise<any> {
    return this.industryModel
      .find({ name: new RegExp(name, 'i') })
      .limit(10)
      .exec();
  }
}
