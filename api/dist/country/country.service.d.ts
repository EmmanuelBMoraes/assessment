import { DataNagerService } from './providers/data_nager.provider';
export declare class CountryService {
    private readonly dataNagerService;
    constructor(dataNagerService: DataNagerService);
    findAll(): Promise<any>;
    findOne(code: string): Promise<import("./country.interfaces").CountryInfo>;
}
