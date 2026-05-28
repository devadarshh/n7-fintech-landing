import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Solutions } from "@/components/sections/Solutions";
import { LoanManagement } from "@/components/sections/LoanManagement";
import { CoreBanking } from "@/components/sections/CoreBanking";
import { CoreBankingFeatures } from "@/components/sections/CoreBankingFeatures";
import { PaperlessCta } from "@/components/sections/PaperlessCta";
import { Marquee } from "@/components/sections/Marquee";
import { DigitalBanking } from "@/components/sections/DigitalBanking";
import { Insights } from "@/components/sections/Insights";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <Solutions />
        <LoanManagement />
        <CoreBanking />
        <CoreBankingFeatures />
        <PaperlessCta />
        <Marquee />
        <DigitalBanking />
        <Insights />
        <CaseStudies />
      </main>
      <Footer />
    </>
  );
}
