import { Module } from '@nestjs/common';
import { IndustryChainController } from './industry-chain.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { IndustryChainSchema } from './industry-chain.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'industry_chain', schema: IndustryChainSchema },
    ]),
  ],
  controllers: [IndustryChainController],
  providers: [],
})
export class IndustryChainModule {}
