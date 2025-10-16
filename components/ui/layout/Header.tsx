'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-semibold tracking-tight">
              <span className="text-navy">Pi</span>
              <span style={{ color: '#c6a87d' }}>mmo</span>
            </span>
            <span className="ml-1 text-xs uppercase tracking-wider text-muted-foreground font-medium">
              Immobilier
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-navy hover:text-primary transition-colors font-medium text-sm"
            >
              Accueil
            </Link>
            <Link
              href="/properties"
              className="text-navy hover:text-primary transition-colors font-medium text-sm"
            >
              Locations
            </Link>
            <Link
              href="/properties/garages-parking"
              className="text-navy hover:text-primary transition-colors font-medium text-sm"
            >
              Garages & Parking
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            )}
          </button>

          {/* Action Button */}
          <div className="hidden md:block">
            <Link
              href="/properties/new"
              className="bg-gradient-to-r from-[#c6a87d] to-[#d4b483] text-white px-6 py-2 rounded-full hover:shadow-md transition-all duration-300 font-medium text-sm"
            >
              Publier une location
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link
                href="/properties"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Locations
              </Link>
              <Link
                href="/properties/garages-parking"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Garages & Parking
              </Link>
              <Link
                href="/properties/new"
                className="bg-gradient-to-r from-[#c6a87d] to-[#d4b483] text-white px-4 py-2 rounded-full hover:shadow-md transition-all duration-300 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Publier une location
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
