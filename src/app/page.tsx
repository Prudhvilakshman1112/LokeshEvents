"use client";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import CatalogSection from "@/components/CatalogSection";
import ReviewsSection from "@/components/ReviewsSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PortfolioSection />
        <CatalogSection />
        <ReviewsSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

