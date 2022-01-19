import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class Industry extends Document {
  @ApiPropertyOptional()
  id: string;
  @ApiProperty()
  name: string;
  @ApiPropertyOptional()
  description: string;
}

export const IndustrySchema = new mongoose.Schema({
  name: { required: true, type: String },
  description: { type: String },
});
