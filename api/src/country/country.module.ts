import { Module } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryController } from './country.controller';
import { DataNagerService } from './providers/data_nager.provider';

@Module({
  controllers: [CountryController],
  providers: [CountryService, DataNagerService],
})
export class CountryModule {}
