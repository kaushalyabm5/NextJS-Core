import Link from 'next/link'
import React from 'react'

export const bikes = [
  {
    id: 1,
    title: "BMW S1000RR",
    year: "2024",
    cc: "999 cc",
    price: "$12,000",
    status: "Featured",
    statusColor: "bg-rose-500/20 text-rose-300 border-rose-500/30",
    image: "https://i.pinimg.com/736x/ae/3f/77/ae3f77c63ad852a57ad1180603c08621.jpg",
    description: "The BMW S1000RR is a benchmark superbike engineered for maximum performance both on the track and open road. Featuring refined aerodynamics and cutting-edge rider assistance systems.",
    specs: {
      power: "205 HP @ 13,000 RPM",
      torque: "113 Nm @ 11,000 RPM",
      weight: "197 kg (Wet)",
      topSpeed: "303 km/h"
    },
    features: [
      "Dynamic Traction Control (DTC)",
      "ABS Pro with Race ABS",
      "Dynamic Damping Control (DDC)",
      "6.5-inch TFT Display with Connectivity",
      "Shift Assistant Pro (Quickshifter)",
      "Riding Modes Pro (Rain, Road, Dynamic, Race)"
    ]
  },
  {
    id: 2,
    title: "Kawasaki Ninja H2",
    year: "2023",
    cc: "998 cc",
    price: "$34,000",
    status: "Supercharged",
    statusColor: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
    image: "https://i.pinimg.com/736x/9e/5d/75/9e5d758c42702ee891f127ed243812d0.jpg",
    description: "Built with a supercharged engine developed in-house by Kawasaki Aerospace Division, the Ninja H2 delivers unprecedented acceleration and engineering supremacy.",
    specs: {
      power: "228 HP @ 11,500 RPM",
      torque: "141.7 Nm @ 11,000 RPM",
      weight: "238 kg (Wet)",
      topSpeed: "337 km/h"
    },
    features: [
      "In-House Supercharged Engine",
      "KCMF (Kawasaki Cornering Management Function)",
      "Brembo Stylema Monobloc Calipers",
      "KQS (Kawasaki Quick Shifter)",
      "TFT Color Instrumentation",
      "Mirror Coated Matte Black Paintwork"
    ]
  },
  {
    id: 3,
    title: "Ducati Panigale V4 R",
    year: "2024",
    cc: "998 cc",
    price: "$45,000",
    status: "Top Spec",
    statusColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    image: "https://i.pinimg.com/736x/0a/b3/60/0ab360d3c3d1456a53fa8c9cefbc1ec0.jpg",
    description: "The closest thing to a WorldSBK race bike available for the street. The Panigale V4 R combines raw power with titanium internal components and race-derived carbon wings.",
    specs: {
      power: "218 HP @ 15,500 RPM",
      torque: "111.9 Nm @ 12,000 RPM",
      weight: "172 kg (Dry)",
      topSpeed: "315 km/h"
    },
    features: [
      "Desmosedici Stradale R Engine",
      "Carbon Fiber Aerodynamic Wings",
      "Öhlins NPX 25/30 Pressurized Fork",
      "STM EVO-SBK Dry Clutch",
      "Ducati Traction Control EVO 3",
      "Akrapovič Full Titanium Race Exhaust Compatible"
    ]
  }
]

const BikesShowcase = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-2 font-medium">
          Premium Inventory
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Featured Superbike Showcase
        </h1>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {bikes.map((bike) => (
          <Link 
            key={bike.id}
            href={`/bikes/${bike.id}`}
            className="group block bg-[#121212] border border-[#1f1f1f] rounded-2xl p-4 transition-all duration-300 hover:border-zinc-700 hover:shadow-2xl hover:shadow-black/60"
          >
            <div className="relative w-full h-56 rounded-xl overflow-hidden bg-[#18181b]">
              <img 
                src={bike.image}
                alt={bike.title}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-medium backdrop-blur-md border ${bike.statusColor}`}>
                {bike.status}
              </span>
              <div className="absolute bottom-3 right-3 bg-amber-400 text-black font-bold text-xs px-3 py-1.5 rounded-lg shadow-lg">
                {bike.price}
              </div>
            </div>

            <div className="mt-4 px-1 pb-2">
              <div className="flex items-center gap-2 text-xs text-zinc-400 mb-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
                <span>{bike.year}</span>
                <span>•</span>
                <span>{bike.cc}</span>
              </div>

              <div className="flex items-center justify-between mt-1">
                <h2 className="text-lg font-semibold text-zinc-100 group-hover:text-white transition-colors">
                  {bike.title}
                </h2>
                <div className="text-xs font-semibold text-zinc-400 group-hover:text-zinc-200 flex items-center gap-1 transition-colors">
                  <span>Details</span>
                  <span className="text-sm transition-transform group-hover:translate-x-0.5">&rarr;</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default BikesShowcase