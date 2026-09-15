import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import GrowthOrb from "@/components/GrowthOrb";
import BusinessTypes from "@/components/BusinessTypes";
import ProductShowcase from "@/components/ProductShowcase";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <HowItWorks />
      <GrowthOrb />
      <BusinessTypes />
      <ProductShowcase />
      <FinalCTA />
      <Footer />
    </main>
  );
}