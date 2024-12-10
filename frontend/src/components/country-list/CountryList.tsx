"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export interface CountryNames {
  countryCode: string;
  name: string;
}

const CountryList = () => {
  const [countryNames, setCountryNames] = useState<CountryNames[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/AvailableCountries`
        );

        const fetchedData = await data.json();

        setCountryNames(fetchedData);
      } catch (error) {}
    };
    fetchData();
  }, []);
  console.log(countryNames);
  return (
    <div className="flex gap-2 font-bold flex-wrap w-ful h-auto border-2 border-black">
      {countryNames.map((country: CountryNames) => {
        return (
          <Link
            href={`/country/${country.countryCode}`}
            className="text-black"
            id={country.countryCode}
            key={country.countryCode}
          >
            [{country.name}]
          </Link>
        );
      })}
    </div>
  );
};

export default CountryList;
