import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IndustrySchema } from './industry.schema';
import { IndustryController } from './industry.controller';
import { IndustryService } from './industry.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'industry', schema: IndustrySchema }]),
  ],
  providers: [IndustryService],
  controllers: [IndustryController],
})
export class IndustryModule {}
