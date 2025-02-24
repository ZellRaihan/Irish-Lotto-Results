'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-gradient-to-b from-white/80 via-white/60 to-white/40 backdrop-blur-xl">
        {/* Animated border gradient */}
        <div className="absolute inset-x-0 -bottom-px h-px animate-border-gradient bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-green-500/5 to-teal-500/5" />

        <div className="container px-4 py-2 mx-auto relative">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group relative">
              <div className="hidden md:flex items-center space-x-3">
                <div className="relative overflow-hidden rounded-2xl transition-all duration-500 group-hover:scale-105 group-hover:rotate-3">
                  {/* Logo glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-green-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <Image
                    src="/irish-lotto-results.webp"
                    alt="Irish Lotto Logo"
                    width={44}
                    height={44}
                    className="transform transition-all duration-500 group-hover:scale-110 relative z-10"
                    priority
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 group-hover:ring-emerald-100/20 transition-all duration-500" />
                  
                  {/* Animated corner accents */}
                  <div className="absolute h-2 w-2 border-t border-l border-emerald-500/50 top-0 left-0" />
                  <div className="absolute h-2 w-2 border-t border-r border-emerald-500/50 top-0 right-0" />
                  <div className="absolute h-2 w-2 border-b border-l border-emerald-500/50 bottom-0 left-0" />
                  <div className="absolute h-2 w-2 border-b border-r border-emerald-500/50 bottom-0 right-0" />
                </div>
                <div className="hidden sm:block">
                  <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent hover:from-emerald-500 hover:via-green-400 hover:to-teal-400 transition-all duration-500">
                    Irish Lotto
                  </div>
                  <p className="text-xs bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent font-medium">Results & History</p>
                </div>
              </div>
              
              {/* Mobile Logo */}
              <div className="flex md:hidden items-center gap-2">
                <div className="flex items-center gap-3">
                  <div className="relative overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-green-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Image
                      src="/irish-lotto-results.webp"
                      alt="Irish Lotto Logo"
                      width={36}
                      height={36}
                      className="transform transition-all duration-500 group-hover:scale-110 relative z-10"
                      priority
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10 group-hover:ring-emerald-100/20 transition-all duration-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent">Irish Lotto</span>
                    <span className="text-xs bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent font-medium">Results & History</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2">
              <a 
                className="group px-6 py-2.5 rounded-xl text-sm font-medium relative overflow-hidden transition-all duration-300"
                href="/"
                aria-current={pathname === "/" ? "page" : undefined}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 via-green-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute h-2 w-2 border-t border-l border-emerald-500/30 top-0 left-0" />
                  <div className="absolute h-2 w-2 border-t border-r border-emerald-500/30 top-0 right-0" />
                  <div className="absolute h-2 w-2 border-b border-l border-emerald-500/30 bottom-0 left-0" />
                  <div className="absolute h-2 w-2 border-b border-r border-emerald-500/30 bottom-0 right-0" />
                </div>
                <span className="relative z-10 bg-gradient-to-r from-gray-800 to-gray-600 group-hover:from-emerald-600 group-hover:to-teal-600 bg-clip-text text-transparent transition-all duration-300">
                  Home
                </span>
              </a>
              <a 
                className="group px-6 py-2.5 rounded-xl text-sm font-medium relative overflow-hidden transition-all duration-300"
                href="/results/history"
                aria-current={pathname === "/results/history" ? "page" : undefined}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 via-green-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute h-2 w-2 border-t border-l border-emerald-500/30 top-0 left-0" />
                  <div className="absolute h-2 w-2 border-t border-r border-emerald-500/30 top-0 right-0" />
                  <div className="absolute h-2 w-2 border-b border-l border-emerald-500/30 bottom-0 left-0" />
                  <div className="absolute h-2 w-2 border-b border-r border-emerald-500/30 bottom-0 right-0" />
                </div>
                <span className="relative z-10 bg-gradient-to-r from-gray-800 to-gray-600 group-hover:from-emerald-600 group-hover:to-teal-600 bg-clip-text text-transparent transition-all duration-300">
                  Past Results
                </span>
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden relative group p-2.5 rounded-xl overflow-hidden transition-all duration-300"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 via-green-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute h-2 w-2 border-t border-l border-emerald-500/30 top-0 left-0" />
                <div className="absolute h-2 w-2 border-t border-r border-emerald-500/30 top-0 right-0" />
                <div className="absolute h-2 w-2 border-b border-l border-emerald-500/30 bottom-0 left-0" />
                <div className="absolute h-2 w-2 border-b border-r border-emerald-500/30 bottom-0 right-0" />
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 w-5 h-5 text-gray-700 group-hover:text-emerald-600 transition-colors duration-300">
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 backdrop-blur-xl bg-white/60 shadow-lg md:hidden border-t border-emerald-100/20">
              <nav className="flex flex-col p-4 space-y-2">
                <a 
                  className="group px-6 py-3 rounded-xl text-sm font-medium relative overflow-hidden transition-all duration-300"
                  href="/"
                  aria-current={pathname === "/" ? "page" : undefined}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 via-green-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute h-2 w-2 border-t border-l border-emerald-500/30 top-0 left-0" />
                    <div className="absolute h-2 w-2 border-t border-r border-emerald-500/30 top-0 right-0" />
                    <div className="absolute h-2 w-2 border-b border-l border-emerald-500/30 bottom-0 left-0" />
                    <div className="absolute h-2 w-2 border-b border-r border-emerald-500/30 bottom-0 right-0" />
                  </div>
                  <span className="relative z-10 bg-gradient-to-r from-gray-800 to-gray-600 group-hover:from-emerald-600 group-hover:to-teal-600 bg-clip-text text-transparent transition-all duration-300">
                    Home
                  </span>
                </a>
                <a 
                  className="group px-6 py-3 rounded-xl text-sm font-medium relative overflow-hidden transition-all duration-300"
                  href="/results/history"
                  aria-current={pathname === "/results/history" ? "page" : undefined}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 via-green-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute h-2 w-2 border-t border-l border-emerald-500/30 top-0 left-0" />
                    <div className="absolute h-2 w-2 border-t border-r border-emerald-500/30 top-0 right-0" />
                    <div className="absolute h-2 w-2 border-b border-l border-emerald-500/30 bottom-0 left-0" />
                    <div className="absolute h-2 w-2 border-b border-r border-emerald-500/30 bottom-0 right-0" />
                  </div>
                  <span className="relative z-10 bg-gradient-to-r from-gray-800 to-gray-600 group-hover:from-emerald-600 group-hover:to-teal-600 bg-clip-text text-transparent transition-all duration-300">
                    Past Results
                  </span>
                </a>
              </nav>
            </div>
          )}
        </div>

        {/* Animated gradient line */}
        <div className="relative h-px w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500 to-transparent animate-shimmer" />
        </div>
      </header>

      <style jsx global>{`
        @keyframes border-gradient {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-border-gradient {
          animation: border-gradient 3s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 2s linear infinite;
        }
      `}</style>
    </>
  );
}

export default Header;