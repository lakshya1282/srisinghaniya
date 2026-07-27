import Navbar from "@/components/Navbar";
import AboutHero from "@/components/AboutHero";
import AboutStory from "@/components/AboutStory";
import QualityApproach from "@/components/QualityApproach";
import OurTeam from "@/components/OurTeam";
import OurValues from "@/components/OurValues";
import OurFacility from "@/components/OurFacility";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      <AboutHero />
      <AboutStory />
      <QualityApproach />
      <OurTeam />
      <OurValues />
      <OurFacility />
      <ContactCTA />
      <Footer />
    </main>
  );
}

