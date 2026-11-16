import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioSection from './components/PortfolioSection';
import ServicesSection from './components/ServicesSection';
import WorkflowSection from './components/WorkflowSection';
import PricingSection from './components/PricingSection';
import CtaAndFooter from './components/CtaAndFooter';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0F172A]">
      {/* 1. Sticky Top Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Section Portofolio Web (Fokus Utama - Showcase Proyek) */}
        <PortfolioSection />

        {/* 4. Section Layanan Utama (Solusi Digital) */}
        <ServicesSection />

        {/* 5. Section Keunggulan & Proses Kerja (Transparan) */}
        <WorkflowSection />

        {/* 6. Section Paket Layanan (Pricing) */}
        <PricingSection />
      </main>

      {/* 7. Section Call to Action (Banner Penutup) & Footer */}
      <CtaAndFooter />
    </div>
  );
}
