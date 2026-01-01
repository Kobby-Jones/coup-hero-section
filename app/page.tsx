// app/page.tsx
'use client';

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import BirdsTop from '@/components/BirdsTop';
import BirdsBottom from '@/components/BirdsBottom';
import FlyingBirds from '@/components/FlyingBirds';
import ScrollIndicator from '@/components/ScrollIndicator';
import BackgroundElements from '@/components/BackgroundElements';

export default function Home() {
  return (
    <main className="relative w-[1920px] h-[1080px] overflow-hidden mx-auto" style={{
      background: 'linear-gradient(180deg, rgba(0, 122, 255, 0.15) 0%, rgba(255, 255, 255, 0.9) 50%, rgba(255, 255, 255, 0.9) 100%)'
    }}>
      <BackgroundElements />
      <Navbar />
      <BirdsTop />
      <HeroSection />
      <BirdsBottom />
      <ScrollIndicator />
      <FlyingBirds />
    </main>
  );
}