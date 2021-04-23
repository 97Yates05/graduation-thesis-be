import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class IndustryService {
  constructor(@InjectModel('industry') private industryModel: Model<any>) {}
  async findAll(): Promise<any> {
    return this.industryModel.find().exec();
  }
}
