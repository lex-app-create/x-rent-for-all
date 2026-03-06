import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustReasons from "@/components/TrustReasons";
import OffersGrid from "@/components/OffersGrid";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import StickyWhatsApp from "@/components/StickyWhatsApp";
import { useOffers } from "@/hooks/useOffers";

const Index = () => {
  const { data: offers = [], isLoading } = useOffers();

  return (
    <div className="min-h-screen pb-16">
      <Header />
      <Hero />
      <TrustReasons />
      <OffersGrid offers={offers} isLoading={isLoading} />
      <HowItWorks />
      <FAQ />
      <AboutUs />
      <Footer />
      <StickyWhatsApp />
    </div>
  );
};

export default Index;
