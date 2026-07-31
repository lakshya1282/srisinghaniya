import Navbar from "@/components/Navbar";
import ServicesHero from "@/components/ServicesHero";
import ServicesIntro from "@/components/ServicesIntro";
import ServicesList from "@/components/ServicesList";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Our Services | SriSinghaniya Infrastructures",
  description: "Learn more about our heavy structural fabrication, hot-dip galvanizing, quality testing, and project management services.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      <ServicesHero />
      <ServicesIntro />
      <ServicesList />
      <ContactCTA />
      <Footer />
    </main>
  );
}
