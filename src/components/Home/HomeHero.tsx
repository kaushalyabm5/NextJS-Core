'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Search, 
  ArrowUpRight, 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export default function HomeHero() {
  const [searchQuery, setSearchQuery] = useState('');

  const featuredStats = [
    { value: '200+', label: 'HP Peak Power' },
    { value: '2.9s', label: '0-100 km/h' },
    { value: '100%', label: 'Certified Pre-Owned' },
  ];

  const testimonialCards = [
    {
      id: 1,
      badge: 'Certified Purchase',
      model: 'BMW S1000RR M Package',
      quote: 'Classified delivered my M Package right to my garage. The dyno sheet and ceramic coating quality are unmatched.',
      author: 'Alexandre V.',
      location: 'Track Rider',
      rating: '5.0',
    },
    {
      id: 2,
      badge: 'Custom Tuning',
      model: 'Ducati Panigale V4 S',
      quote: 'Full titanium Akrapovič exhaust with custom ECU remapping. Added raw power while keeping factory reliability.',
      author: 'Marcus Vance',
      location: 'Superbike Collector',
      rating: '5.0',
    },
    {
      id: 3,
      badge: 'Official Import',
      model: 'Kawasaki Ninja H2 Carbon',
      quote: 'Seamless import process and registration. The showroom team handled every detail with extreme precision.',
      author: 'Dimitri R.',
      location: 'Enthusiast',
      rating: '5.0',
    },
    {
      id: 4,
      badge: 'Showroom Service',
      model: 'Yamaha YZF-R1M',
      quote: 'The Öhlins electronic suspension setup they dialed in for my weight changed the bike handling completely.',
      author: 'Stefan M.',
      location: 'Track Day Rider',
      rating: '5.0',
    }
  ];

  return (
    // min-h-screen flex-col justify-between මගින් මුළු Screen එකම Cover කරයි
    <section className="relative min-h-screen w-full bg-[#050508] text-white flex flex-col justify-between pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* 1. Ultra-High End Studio Background Grid & Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2000&auto=format&fit=crop"
          alt="Studio Superbike"
          className="w-full h-full object-cover object-center opacity-25 mix-blend-luminosity scale-105"
        />
        {/* Glow Lighting Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-purple-600/20 blur-[150px] rounded-full" />
        <div className="absolute top-1/3 left-1/4 w-[350px] h-[250px] bg-indigo-500/15 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/75 to-[#050508]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_#050508_80%)]" />
      </div>

      {/* 2. Hero Core Content Container (Centered Vertically) */}
      <div className="relative z-10 max-w-6xl mx-auto text-center my-auto w-full py-6">
        
        

        {/* Minimalist Bold Typography (Scaled for Display) */}
        <h1 className="lg:text-[6rem] font-normal tracking-tight text-white leading-[0.95] mb-8">
          PRECISION. POWER. <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-purple-400">
            UNCOMPROMISED.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-[.9rem] text-slate-400 font-normal leading-relaxed mb-12 tracking-wide">
          Explore flagship track machines, certified pre-owned superbikes, and high-performance racing parts crafted for elite riders.
        </p>

       

        {/* Key Metrics Strip */}
        <div className="pt-12 flex items-center justify-center gap-10 sm:gap-20 border-t border-white/[0.06] mt-14 max-w-4xl mx-auto">
          {featuredStats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                {stat.value}
              </span>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-400 tracking-widest uppercase mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>

  

    </section>
  );
}