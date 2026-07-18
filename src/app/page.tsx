import { HeroSection } from "@/components/home/HeroSection";
import { StatsCounter } from "@/components/home/StatsCounter";
import { FeaturedIndustries } from "@/components/home/FeaturedIndustries";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { DestinationsPreview } from "@/components/home/DestinationsPreview";
import { TestimonialCarousel } from "@/components/home/TestimonialCarousel";
import { CTABanner } from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsCounter />
      <FeaturedIndustries />
      <WhyChooseUs />
      <DestinationsPreview />
      <TestimonialCarousel />
      <CTABanner />
    </>
  );
}
