import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import TrustedManufacturer from "@/components/TrustedManufacturer";
import ScrollExpandImage from "@/components/ScrollExpandImage";
import OurAdvantages from "@/components/OurAdvantages";
import OurProducts from "@/components/OurProducts";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <Hero />
      <StatsBar />
      <TrustedManufacturer />
      <ScrollExpandImage />
      <OurAdvantages />
      <OurProducts />
      <WhyChooseUs />
      <ContactCTA />
      <Footer />
    </main>
  );
}
