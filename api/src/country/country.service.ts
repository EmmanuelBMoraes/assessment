import { DataNagerService } from './providers/data_nager.provider';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CountryService {
  constructor(private readonly dataNagerService: DataNagerService) {}
  async findAll() {
    try {
      const data = await fetch(process.env.AVAILABLE_COUNTRIES_API_URL);
      const fetchedData = await data.json();
      return fetchedData;
    } catch (error) {}
  }

  findOne(code: string) {
    return this.dataNagerService.getCountryInfo(code);
  }
}
