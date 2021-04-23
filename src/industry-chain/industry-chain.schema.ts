import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class IndustryChain extends Document {
  @ApiPropertyOptional()
  id: string;
  @ApiProperty()
  name: string;
  @ApiPropertyOptional()
  detail: string;
}

export const IndustryChainSchema = new mongoose.Schema({
  name: { required: true, type: String },
  detail: String,
});
