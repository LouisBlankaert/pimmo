'use client';

import Image from 'next/image';
import Link from 'next/link';

interface PropertyCardProps {
  id: string;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  surface: number;
  imageUrl: string;
  type: 'rent';
  duration?: 'short' | 'long';
  propertyType?: 'garage' | 'parking';
}

export default function PropertyCard({
  id,
  title,
  price,
  location,
  bedrooms,
  bathrooms,
  surface,
  imageUrl,
  type,
  duration = 'long',
  propertyType,
}: PropertyCardProps) {
  return (
    <Link href={`/properties/${id}`}>
      <div className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300">
        {/* Image */}
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-3 left-3 bg-gradient-to-r from-[#c6a87d] to-[#d4b483] text-white px-3 py-1 rounded-full text-xs font-medium shadow-sm tracking-tight">
            {propertyType ? 
              (propertyType === 'garage' ? 'Garage' : 'Place de parking') : 
              (duration === 'short' ? 'Courte durée' : 'Longue durée')
            }
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-semibold line-clamp-1 text-navy tracking-tight">{title}</h3>
          <p className="text-muted-foreground text-sm mb-2 tracking-tight">{location}</p>

          <div className="flex justify-between items-center mb-3">
            <p className="text-xl font-semibold tracking-tight" style={{ color: '#c6a87d' }}>
              {price.toLocaleString('fr-FR')} €
              {type === 'rent' && <span className="text-sm font-normal">/mois</span>}
            </p>
          </div>

          {/* Features */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            {!propertyType && (
              <>
                <div className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 12h20"></path>
                    <path d="M6 12v-6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6"></path>
                    <path d="M4 12v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8"></path>
                  </svg>
                  <span>{bedrooms}</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"></path>
                    <line x1="10" x2="8" y1="5" y2="7"></line>
                    <line x1="2" x2="22" y1="12" y2="12"></line>
                    <line x1="7" x2="7" y1="19" y2="21"></line>
                    <line x1="17" x2="17" y1="19" y2="21"></line>
                  </svg>
                  <span>{bathrooms}</span>
                </div>
              </>
            )}
            
            {propertyType && (
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 3v18h18"/>
                  <path d="M7 14l4-4 4 4 6-6"/>
                </svg>
                <span>{propertyType === 'garage' ? 'Garage' : 'Parking'}</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="M3 9h18"></path>
                <path d="M9 21V9"></path>
              </svg>
              <span>{surface} m²</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
