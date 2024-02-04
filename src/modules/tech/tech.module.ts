import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TechController } from './tech.controller';
import { TechService } from './tech.service';
// import { DataImportService } from '../data-import/data-import.service';
import { TechSchema } from '../../schemas/tech.schema';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Tech', schema: TechSchema }]),
    HttpModule,
  ],
  controllers: [TechController],
  providers: [TechService],
})
export class TechModule { }
