'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  User, 
  ShoppingCart, 
  ChevronDown, 
  Phone, 
  Menu, 
  X,
  Shield,
  Wrench,
  Shirt,
  Zap
} from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Route එක වෙනස් වන සෑම අවස්ථාවකම Dropdown/Menu automatic වැසෙයි
  useEffect(() => {
    setIsOpen(false);
    setIsProductsOpen(false);
    setIsDropdownOpen(false);
  }, [pathname]);

  const productDropdownItems = [
    { 
      name: 'Accessories', 
      href: '/products/accessories',
      description: 'Custom parts, covers & gadgets',
      icon: Shield
    },
    { 
      name: 'Performance Parts', 
      href: '/products/performance-parts',
      description: 'Exhausts, ECU tunes & brakes',
      icon: Wrench
    },
    { 
      name: 'Riding Gear', 
      href: '/products/riding-gear',
      description: 'Helmets, jackets & boots',
      icon: Shirt
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#050505] backdrop-blur-md  shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] transition-all rounded-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-17">
          
          {/* Left Corner: Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group cursor-pointer shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-700 via-purple-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-purple-600/30 group-hover:scale-105 transition-transform duration-300">
              <Zap className="w-5 h-5 fill-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-normal tracking-[0.18em] text-neutral-100 leading-none group-hover:text-purple-600 transition-colors">
                CLASSIFIED
              </span>
              <span className="text-[9px] font-extrabold tracking-[0.25em] text-purple-600 uppercase leading-tight mt-1">
                Superbikes
              </span>
            </div>
          </Link>

          {/* Center: Nav Links (Increased gap: gap-10 lg:gap-12) */}
          <nav className="hidden md:flex items-center gap-10 lg:gap-12 text-sm font-normal text-neutral-200">
            <Link href="/" className="hover:text-purple-600 transition-colors cursor-pointer">
              Home
            </Link>

            <Link href="/services" className="hover:text-purple-600 transition-colors cursor-pointer">
              Services
            </Link>

            <Link href="/bikes" className="hover:text-purple-600 transition-colors cursor-pointer">
              Bikes
            </Link>

            {/* Desktop Products Dropdown */}
            <div 
              className="relative py-6"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Link 
                href="/products" 
                onClick={() => setIsDropdownOpen(false)}
                className="flex items-center gap-1.5 hover:text-purple-600 transition-colors cursor-pointer"
              >
                <span>Products</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </Link>

              {/* State Controlled Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-72 bg-white border border-slate-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.12)] rounded-2xl p-2 transition-all duration-200 animate-in fade-in slide-in-from-top-2">
                  {productDropdownItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-purple-50/60 transition-colors group/item cursor-pointer"
                      >
                        <div className="p-2 rounded-lg bg-purple-100/70 text-purple-600 group-hover/item:bg-purple-600 group-hover/item:text-white transition-colors mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-900 group-hover/item:text-purple-600 transition-colors">
                            {item.name}
                          </div>
                          <div className="text-xs text-slate-500 font-normal mt-0.5">
                            {item.description}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>

          {/* Right Corner: Icons & Contact Button (Increased gap: gap-6 lg:gap-8) */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {/* User Icon Button */}
            <Link
              href="/login"
              className="p-2.5 text-neutral-100 hover:text-purple-600 hover:bg-neutral-100/80 rounded-full transition-colors cursor-pointer"
              aria-label="User Account"
            >
              <User className="w-5 h-5" />
            </Link>

            {/* Shopping Cart Icon Button */}
            <Link
              href="/cart"
              className="relative p-2.5 text-neutral-100 hover:text-purple-600 hover:bg-slate-100/80 rounded-full transition-colors cursor-pointer"
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-4 h-4 bg-purple-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center ring-2 ring-white">
                0
              </span>
            </Link>

            {/* Contact Button with Phone Icon */}
            <Link
              href="/contact"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-purple-600/25 active:scale-95 flex items-center gap-2 cursor-pointer shrink-0"
            >
              <Phone className="w-4 h-4" />
              <span>Contact</span>
            </Link>
          </div>

          {/* Mobile View: Actions & Menu Icon */}
          <div className="flex items-center gap-3 md:hidden">
            <Link
              href="/cart"
              className="relative p-2 text-slate-700 cursor-pointer"
              aria-label="Cart"
            >
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-purple-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center ring-2 ring-white">
                0
              </span>
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-800 hover:text-purple-600 focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-slate-800 hover:text-purple-600 rounded-xl hover:bg-slate-50 cursor-pointer"
          >
            Home
          </Link>

          <Link
            href="/services"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-slate-800 hover:text-purple-600 rounded-xl hover:bg-slate-50 cursor-pointer"
          >
            Services
          </Link>

          <Link
            href="/bikes"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-slate-800 hover:text-purple-600 rounded-xl hover:bg-slate-50 cursor-pointer"
          >
            Bikes
          </Link>

          {/* Mobile Products Accordion */}
          <div>
            <div className="flex items-center justify-between px-3 py-2 text-base font-semibold text-slate-800 hover:text-purple-600 rounded-xl hover:bg-slate-50">
              <Link 
                href="/products" 
                onClick={() => setIsOpen(false)}
                className="flex-1 cursor-pointer"
              >
                Products
              </Link>
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="p-1 cursor-pointer focus:outline-none"
              >
                <ChevronDown className={`w-4 h-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {isProductsOpen && (
              <div className="pl-4 mt-1 space-y-1 border-l-2 border-purple-100 ml-3">
                {productDropdownItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 text-sm font-medium text-slate-600 hover:text-purple-600 rounded-lg hover:bg-slate-50 cursor-pointer"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 border border-slate-200 text-slate-800 font-semibold text-sm rounded-xl hover:bg-slate-50 cursor-pointer"
            >
              <User className="w-4 h-4" />
              <span>Login / Account</span>
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-purple-600 text-white font-semibold text-sm rounded-xl shadow-md hover:bg-purple-700 cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}