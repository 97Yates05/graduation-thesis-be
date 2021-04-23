import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IndustryModule } from './industry/industry.module';
import { MongooseModule } from '@nestjs/mongoose';
import { IndustryChainModule } from './industry-chain/industry-chain.module';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/industry'),
    IndustryModule,
    IndustryChainModule,
    CompanyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
