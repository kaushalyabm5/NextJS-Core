'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// 1. Image එක import කරගන්න (ස්ථානය src/assets/hero-bg.jpg කියා සිතන්න)
import heroBg from '@/assets/hero-bg.png'; 

export default function HomeHero() {
  const [searchQuery, setSearchQuery] = useState('');

  const featuredStats = [
    { value: '200+', label: 'HP Peak Power' },
    { value: '2.9s', label: '0-100 km/h' },
    { value: '100%', label: 'Certified Pre-Owned' },
  ];

  return (
    <section className="relative min-h-screen w-full bg-[#050508] text-white flex flex-col justify-between pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* 1. Background Image Container */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
        {/* Next.js Optimized Image Component */}
        <Image
          src={heroBg} // Import කරපු image Variable එක
          alt="Studio Superbike Background"
          fill // Parent container එක 100% cover කිරීමට
          priority // Hero section image එකක් නිසා Fast Load වීමට
          className="object-cover object-center opacity-25 mix-blend-luminosity scale-105"
        />

        {/* Glow Lighting Effects */}
        <div className="absolute top-1/3 left-1/4 w-[350px] h-[250px] bg-indigo-500/5 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/5 to-[#050508]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_#050508_80%)]" />
      </div>

      {/* 2. Hero Core Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto text-center my-auto w-full py-0">
        
        {/* Minimalist Bold Typography */}
        <h1 className="lg:text-[5rem] font-normal tracking-tight text-white leading-[0.95] mb-23">
          PRECISION. POWER. <br />
          <span className="bg-clip-text text-white">
            UNCOMPROMISED.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-[.9rem] text-neutral-400 font-normal leading-relaxed mb-12 tracking-wide">
          Explore flagship track machines, certified pre-owned superbikes, and high-performance racing parts crafted for elite riders.
        </p>

        {/* Key Metrics Strip */}
        <div className="pt-12 flex items-center justify-center gap-10 sm:gap-20 border-t border-white/[0.06] mt-14 max-w-4xl mx-auto">
          {featuredStats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-thin text-white tracking-tight">
                {stat.value}
              </span>
              <span className="text-[11px] sm:text-xs font-thin text-neutral-400 tracking-widest uppercase mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}