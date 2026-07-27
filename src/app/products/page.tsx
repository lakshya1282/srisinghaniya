import Navbar from "@/components/Navbar";
import ProductsHero from "@/components/ProductsHero";
import ProductsIntro from "@/components/ProductsIntro";
import ProductsList from "@/components/ProductsList";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Our Products | SriSinghaniya Infrastructures",
  description: "Explore our range of premium power transmission and distribution infrastructure solutions.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      <ProductsHero />
      <ProductsIntro />
      <ProductsList />
      <ContactCTA />
      <Footer />
    </main>
  );
}
