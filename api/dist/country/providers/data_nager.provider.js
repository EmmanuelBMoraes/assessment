"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataNagerService = void 0;
const common_1 = require("@nestjs/common");
let DataNagerService = class DataNagerService {
    async getCountryInfo(code) {
        try {
            const borderData = await fetch(`${process.env.COUNTRY_INFO_API_URL}${code.toUpperCase()}`);
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
        }
        catch (error) {
            console.log(error);
        }
    }
};
exports.DataNagerService = DataNagerService;
exports.DataNagerService = DataNagerService = __decorate([
    (0, common_1.Injectable)()
], DataNagerService);
//# sourceMappingURL=data_nager.provider.js.map