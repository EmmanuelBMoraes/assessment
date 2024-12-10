export interface CountryInfo {
  countryName: string;
  countryFlag: string;
  countryBorders: string[];
  populationCounts: [{ years: number; value: number }];
}
