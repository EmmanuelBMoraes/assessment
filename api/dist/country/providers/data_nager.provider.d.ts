import { CountryInfo } from '../country.interfaces';
export declare class DataNagerService {
    getCountryInfo(code: string): Promise<CountryInfo>;
}
