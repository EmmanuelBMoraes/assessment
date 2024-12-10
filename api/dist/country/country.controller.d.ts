import { CountryService } from './country.service';
export declare class CountryController {
    private readonly countryService;
    constructor(countryService: CountryService);
    findAll(): Promise<any>;
    findOne(code: string): Promise<import("./country.interfaces").CountryInfo>;
}
