import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { IndustryChain } from './industry-chain.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: IndustryChain,
})
@ApiTags('产业链')
@Controller('industry-chain')
export class IndustryChainController {
  constructor(
    @InjectModel('industry_chain') public model: Model<IndustryChain>,
  ) {}
}
