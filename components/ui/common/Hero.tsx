'use client';

import Image from 'next/image';
import { Suspense } from 'react';
import SearchFilters from './SearchFilters';

/**
 * Hero component with background image and search filters
 * Used on the homepage to showcase the main value proposition
 */

export default function Hero() {
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-[550px]">
          <Image
            src="https://img.freepik.com/free-photo/3d-rendering-modern-luxury-bedroom-suite-bathroom_105762-2071.jpg"
            alt="Intérieur luxueux d'une maison moderne"
            fill
            priority
            className="object-cover object-center"
            quality={100}
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-3xl mx-auto text-center text-white mb-8">
          <div className="inline-block mb-3">
            <span className="inline-block py-1 px-3 bg-gold/20 text-gold-light text-xs font-medium tracking-wider uppercase rounded-full">
              Location immobilière
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 tracking-tight leading-tight">
            <span className="text-white">Location </span>
            <span className="text-gold-light">entre particuliers</span>
          </h1>
          <p className="text-base md:text-lg opacity-90 mb-6 max-w-xl mx-auto">
            <span className="text-gold-light font-medium">
              Trouvez votre location sans frais d'agence.
            </span>
          </p>
        </div>

        {/* Search Filters */}
        <div className="max-w-5xl mx-auto">
          <Suspense fallback={<div className="bg-card rounded-2xl p-6 shadow-lg border border-border">Chargement des filtres...</div>}>
            <SearchFilters />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
