import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustStrip } from "@/components/home/TrustStrip";
import { ApproachSection } from "@/components/home/ApproachSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { BirthFocusSection } from "@/components/home/BirthFocusSection";
import { ContinuumSection } from "@/components/home/ContinuumSection";
import { TeamSection } from "@/components/home/TeamSection";
import { DifferenceSection } from "@/components/home/DifferenceSection";
import { ClinicProofSection } from "@/components/home/ClinicProofSection";
import { HomeFaqSection } from "@/components/home/HomeFaqSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

/**
 * Section order follows the approved design handoff
 * (references/birthwave-v2-design/birthwave-homepage.html) exactly.
 */
export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <ApproachSection />
      <ServicesSection />
      <BirthFocusSection />
      <ContinuumSection />
      <TeamSection />
      <DifferenceSection />
      <ClinicProofSection />
      <HomeFaqSection />
      <FinalCtaSection />
    </>
  );
}
