import { notFound } from "next/navigation";
import { industriesData } from "@/lib/data/industriesData";
import { IndustryHero } from "@/components/industries/IndustryHero";
import { IndustryRoles } from "@/components/industries/IndustryRoles";
import { Header } from "@/components/layout/Header";
import { CTABanner } from "@/components/home/CTABanner";

// Force static generation for these known sectors
export function generateStaticParams() {
  return Object.keys(industriesData).map((sector) => ({
    sector,
  }));
}

export default async function IndustryPage({ params }: { params: Promise<{ sector: string }> }) {
  const { sector } = await params;
  const data = industriesData[sector];

  // If the sector doesn't exist in our data, show 404
  if (!data) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <IndustryHero 
          name={data.name} 
          description={data.description} 
          heroImage={data.heroImage} 
        />
        <IndustryRoles 
          roles={data.roles} 
          whyUs={data.whyUs} 
        />
        <CTABanner />
      </main>
    </>
  );
}
