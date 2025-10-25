import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import FeaturesGrid from "@/components/FeaturesGrid";
import Wallet from "@/components/Wallet";
import CampaignFlow from "@/components/CampaignFlow";
import HowItWorks from "@/components/HowItWorks";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <section className="px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Stats />
        </div>
      </section>
      <FeaturesGrid />
      <Wallet />
      <CampaignFlow />
      <HowItWorks />
    </main>
  );
}
