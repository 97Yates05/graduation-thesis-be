import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { Company } from './company.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: Company,
})
@ApiTags('企业')
@Controller('company')
export class CompanyController {
  constructor(@InjectModel('company') public model: Model<Company>) {}
}
