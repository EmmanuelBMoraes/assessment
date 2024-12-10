import { Controller, Get, Param } from '@nestjs/common';
import { CountryService } from './country.service';

@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get('AvailableCountries')
  findAll() {
    return this.countryService.findAll();
  }

  @Get('CountryInfo/:code')
  findOne(@Param('code') code: string) {
    return this.countryService.findOne(code);
  }
}
