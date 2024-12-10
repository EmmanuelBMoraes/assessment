import { Injectable } from '@nestjs/common';
import { CountryInfo } from '../country.interfaces';

@Injectable()
export class DataNagerService {
  async getCountryInfo(code: string): Promise<CountryInfo> {
    try {
      const borderData = await fetch(
        `${process.env.COUNTRY_INFO_API_URL}${code.toUpperCase()}`,
      );
      const fetchedDataBorders = await borderData.json();
      const popData = await fetch(process.env.POPULATION_API_URL, {
        method: 'POST',
        body: JSON.stringify({
          country: fetchedDataBorders.commonName,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const fetchedPopData = await popData.json();

      const flagData = await fetch(process.env.FLAG_API_URL, {
        method: 'POST',
        body: JSON.stringify({
          country: fetchedDataBorders.commonName,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const fetchedFlagData = await flagData.json();
      return {
        countryName: fetchedDataBorders.officialName,
        countryFlag: fetchedFlagData.data.flag || 'not found',
        countryBorders: fetchedDataBorders.borders,
        populationCounts: fetchedPopData.data.populationCounts,
      };
    } catch (error) {
      console.log(error);
    }
  }
}
