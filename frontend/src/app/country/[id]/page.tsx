import Country from "@/components/country/Country";

interface CountryPageProps {
  params: { id: string };
}

export default async function CountryPage({ params }: CountryPageProps) {
  const { id } = await params;

  return (
    <div>
      <Country id={id} />
    </div>
  );
}
