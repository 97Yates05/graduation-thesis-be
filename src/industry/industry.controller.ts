import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { Industry } from './industry.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: Industry,
})
@ApiTags('产业')
@Controller('industry')
export class IndustryController {
  constructor(@InjectModel('industry') public model: Model<Industry>) {}
}
