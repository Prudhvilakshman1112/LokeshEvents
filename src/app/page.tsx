"use client";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

// Lazy-load below-fold sections — only loaded when user scrolls
const PortfolioSection = dynamic(() => import("@/components/PortfolioSection"), { ssr: true });
const CatalogSection = dynamic(() => import("@/components/CatalogSection"), { ssr: true });
const ReviewsSection = dynamic(() => import("@/components/ReviewsSection"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"), { ssr: false });

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
