'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Profile', href: '/profile' },
    { name: 'Menu', href: '/menu' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="shadow-lg fixed w-full top-0 z-50" style={{backgroundColor: '#f0e1cf'}}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 md:h-24 lg:h-28 px-2 sm:px-4 lg:px-8">
          {/* Logo */}
          <div className="flex items-center justify-start flex-1 ml-1 sm:ml-2 lg:ml-4">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <img 
                src="/logo-icon.png" 
                alt="Waroeng Bebek Ngarasan Logo" 
                className="h-14 w-14 sm:h-18 sm:w-18 md:h-22 md:w-22 lg:h-26 lg:w-26"
              />
              <h1 className="hidden sm:block text-lg sm:text-xl md:text-2xl lg:text-3xl font-heading font-bold ml-0.5" style={{color: '#936348'}}>
                <span className="hidden lg:inline">Waroeng Bebek Ngarasan</span>
                <span className="lg:hidden">Waroeng Bebek</span>
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-end flex-1 space-x-2 lg:space-x-4 mr-2 sm:mr-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 lg:px-4 py-2 lg:py-3 rounded-md text-xl lg:text-2xl font-heading font-black transition-colors ${
                  isActive(item.href)
                    ? 'text-[#d74a26]'
                    : 'text-[#627663] hover:text-[#d74a26]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center justify-end flex-1">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-3 rounded-md text-[#627663] hover:text-[#d74a26] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#d74a26] transition-colors"
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-3 pb-4 space-y-2 border-t border-[#936348]/20" style={{backgroundColor: '#f0e1cf'}}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 rounded-md text-lg font-heading font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-[#d74a26] bg-[#d74a26]/10'
                    : 'text-[#627663] hover:text-[#d74a26] hover:bg-[#d74a26]/5'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
