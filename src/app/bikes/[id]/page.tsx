import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { bikes } from '@/components/BikesPage/BikesShowcase' // Adjust import path if needed

interface PageProps {
  params: Promise<{ id: string }>
}

const BikeDetailsPage = async ({ params }: PageProps) => {
  const { id } = await params
  
  // Find the bike matching the parameter ID
  const bike = bikes.find((b) => b.id === Number(id))

  // Return Next.js 404 page if bike isn't found
  if (!bike) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 py-12 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Navigation / Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors mb-8"
        >
          <span>&larr;</span> Back to Showcase
        </Link>

        {/* Main Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Image Preview */}
          <div className="lg:col-span-7 bg-[#121212] border border-[#1f1f1f] rounded-2xl p-4">
            <div className="relative w-full h-[320px] sm:h-[420px] rounded-xl overflow-hidden bg-[#18181b]">
              <img 
                src={bike.image} 
                alt={bike.title}
                className="w-full h-full object-cover object-center"
              />
              <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md border ${bike.statusColor}`}>
                {bike.status}
              </span>
            </div>
          </div>

          {/* Right Column: Title, Specs & Overview */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Header info */}
            <div>
              <div className="flex items-center gap-2 text-xs font-medium text-zinc-400 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>{bike.year} Model</span>
                <span>•</span>
                <span>{bike.cc}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                {bike.title}
              </h1>
              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-3xl font-extrabold text-amber-400">{bike.price}</span>
                <span className="text-xs text-zinc-500 uppercase tracking-wider">MSRP / Exhibition Price</span>
              </div>
            </div>

            {/* Overview Description */}
            <p className="text-sm text-zinc-400 leading-relaxed border-t border-[#1f1f1f] pt-4">
              {bike.description}
            </p>

            {/* Technical Quick Specs */}
            <div className="bg-[#121212] border border-[#1f1f1f] rounded-xl p-4 grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-zinc-500 block uppercase tracking-wider">Horsepower</span>
                <span className="font-semibold text-zinc-200 text-sm mt-0.5 block">{bike.specs.power}</span>
              </div>
              <div>
                <span className="text-zinc-500 block uppercase tracking-wider">Torque</span>
                <span className="font-semibold text-zinc-200 text-sm mt-0.5 block">{bike.specs.torque}</span>
              </div>
              <div>
                <span className="text-zinc-500 block uppercase tracking-wider">Dry/Wet Weight</span>
                <span className="font-semibold text-zinc-200 text-sm mt-0.5 block">{bike.specs.weight}</span>
              </div>
              <div>
                <span className="text-zinc-500 block uppercase tracking-wider">Top Speed</span>
                <span className="font-semibold text-zinc-200 text-sm mt-0.5 block">{bike.specs.topSpeed}</span>
              </div>
            </div>

            {/* Inquire Button */}
            <button 
              type="button" 
              className="w-full py-3.5 bg-zinc-100 hover:bg-white text-black font-semibold rounded-xl text-sm transition-all duration-200 shadow-lg"
            >
              Inquire About Vehicle
            </button>
          </div>

        </div>

        {/* Bottom Section: Features List */}
        <div className="mt-12 bg-[#121212] border border-[#1f1f1f] rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white mb-6">Key Features & Technologies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {bike.features.map((feature, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-3 bg-[#18181b] border border-[#27272a] p-3.5 rounded-xl text-xs text-zinc-300 font-medium"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default BikeDetailsPage