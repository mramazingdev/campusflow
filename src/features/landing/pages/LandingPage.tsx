// src/features/landing/pages/LandingPage.tsx
import React from 'react';
import { Navbar } from '@/features/landing/sections/Navbar';
import { Hero } from '@/features/landing/sections/Hero';
import { AnnouncementSlider } from '@/features/landing/sections/AnnouncementSlider';
import { Features } from '@/features/landing/sections/Features';
import { UnifiedHubGrid } from '@/features/landing/sections/UnifiedHubGrid';
import { Events } from '@/features/landing/sections/Events';
import { News } from '@/features/landing/sections/News';
import { Gallery } from '@/features/landing/sections/Gallery';
import { Statistics } from '@/features/landing/sections/Statistics';
import { CTA } from '@/features/landing/sections/CTA';
import { Footer } from '@/features/landing/sections/Footer';

export default function LandingPage() {
  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors">
      <Navbar />
      <main>
        <Hero />
        <AnnouncementSlider />
        <Features />
        <UnifiedHubGrid />
        <Events />
        <News />
        <Gallery />
        <Statistics />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}