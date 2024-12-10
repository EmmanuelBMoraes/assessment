"use client";
import React, { useEffect, useState } from "react";
import { VictoryChart, VictoryLine, VictoryAxis } from "victory";
import Link from "next/link";

export interface CountryInfo {
  countryName: string;
  countryFlag: string;
  countryBorders: [
    {
      commonName: string;
      officialName: string;
      countryCode: string;
    }
  ];
  populationCounts: [{ years: number; value: number }];
}

interface CountryPageProps {
  id: string;
}

const Country = ({ id }: CountryPageProps) => {
  const [loadingContent, setLoadingContent] = useState(true);
  const [country, setCountry] = useState<CountryInfo>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/CountryInfo/${id}`
        );
        console.log(data);
        const fetchedData = await data.json();
        setCountry(fetchedData);
        setLoadingContent(false);
      } catch (error) {
        setLoadingContent(false);
        console.log(error);
      }
    };
    fetchData();
  }, [id]);
  const chartData = country?.populationCounts;
  if (loadingContent) {
    return <div> Loading content...</div>;
  }

  if (!country) {
    return (
      <div>
        {" "}
        Failed to load content...
        <Link href={`/`} className="text-black font-bold">
          Go back to main page
        </Link>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center gap-1">
      <img src={country?.countryFlag} alt="country flag" className="w-52" />
      <div className=" font-bold">{country?.countryName}</div>
      <div>
        {country?.countryBorders.length > 1
          ? country?.countryBorders.map((border) => {
              return (
                <Link
                  href={`/country/${border.countryCode}`}
                  className="text-black font-bold"
                  id={border.countryCode}
                  key={border.countryCode}
                >
                  [{border.commonName}]
                </Link>
              );
            })
          : ["no borders"]}
      </div>
      <div>
        <VictoryChart
          style={{
            parent: {
              margin: "0 auto",
              padding: "0 0px",
            },
          }}
        >
          <VictoryAxis tickFormat={(tick) => tick} />
          <VictoryAxis
            dependentAxis
            style={{
              axisLabel: { fontSize: 14, padding: 40 },
              ticks: { size: 0 },
              tickLabels: { fontSize: 7, fill: "#000" },
            }}
            tickFormat={(tick) => tick.toLocaleString()}
          />
          <VictoryLine data={chartData} x="year" y="value" />
        </VictoryChart>
      </div>
    </div>
  );
};

export default Country;
