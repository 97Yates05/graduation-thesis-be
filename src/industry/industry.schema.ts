import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class Industry extends Document {
  @ApiPropertyOptional()
  id: string;
  @ApiProperty()
  name: string;
  @ApiPropertyOptional()
  company: string[];
}

export const IndustrySchema = new mongoose.Schema({
  name: { required: true, type: String },
  company: [mongoose.Schema.Types.ObjectId],
});
