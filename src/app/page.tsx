import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import TrustedManufacturer from "@/components/TrustedManufacturer";
import ScrollExpandImage from "@/components/ScrollExpandImage";
import OurProducts from "@/components/OurProducts";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      <Hero />
      <StatsBar />
      <TrustedManufacturer />
      <ScrollExpandImage />
      <OurProducts />
      <WhyChooseUs />
      <ContactCTA />
      <Footer />
    </main>
  );
}
