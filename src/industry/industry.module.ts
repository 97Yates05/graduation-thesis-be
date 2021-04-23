import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IndustrySchema } from './industry.schema';
import { IndustryController } from './industry.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'industry', schema: IndustrySchema }]),
  ],
  providers: [],
  controllers: [IndustryController],
})
export class IndustryModule {}
