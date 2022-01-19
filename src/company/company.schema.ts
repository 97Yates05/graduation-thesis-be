import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class Company extends Document {
  @ApiPropertyOptional()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  industries: string[];
}

export const CompanySchema = new mongoose.Schema({
  name: { required: true, type: String },
  description: String,
  industries: { required: true, type: [String] },
});
