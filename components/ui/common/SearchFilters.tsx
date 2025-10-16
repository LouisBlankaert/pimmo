'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

type Filters = {
  type: 'rent';
  propertyType: 'all' | 'garage' | 'parking' | 'apartment' | 'house';
  minPrice: string;
  maxPrice: string;
  minBedrooms: string;
  minSurface: string;
  location: string;
  duration?: 'short' | 'long';
};

interface SearchFiltersProps {
  initialFilters?: Partial<Filters>;
}

export default function SearchFilters({ initialFilters = {} }: SearchFiltersProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  // Initialiser les filtres avec les valeurs par défaut
  const [filters, setFilters] = useState<Filters>({
    type: 'rent',
    propertyType: 'all',
    minPrice: '',
    maxPrice: '',
    minBedrooms: '',
    minSurface: '',
    location: '',
    duration: 'long',
    ...initialFilters
  });
  
  // Mettre à jour les filtres lorsque les paramètres d'URL changent
  useEffect(() => {
    // Récupérer les paramètres de l'URL
    const type = searchParams.get('type') as 'rent' || 'rent';
    const propertyType = searchParams.get('propertyType') as Filters['propertyType'] || 'all';
    const minPrice = searchParams.get('minPrice') || '';
    const maxPrice = searchParams.get('maxPrice') || '';
    const minBedrooms = searchParams.get('minBedrooms') || '';
    const minSurface = searchParams.get('minSurface') || '';
    const location = searchParams.get('location') || '';
    const duration = searchParams.get('duration') as 'short' | 'long' || 'long';
    
    // Mettre à jour l'état des filtres
    setFilters({
      type,
      propertyType,
      minPrice,
      maxPrice,
      minBedrooms,
      minSurface,
      location,
      duration,
    });
  }, [searchParams]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build query string from filters
    const queryParams = new URLSearchParams();

    // Add all non-empty filters to query params
    Object.entries(filters).forEach(([key, value]) => {
      if (value && key !== 'propertyType') queryParams.append(key, value);
      
      // Traitement spécial pour propertyType
      if (key === 'propertyType' && value !== 'all') {
        queryParams.append(key, value);
      }
    });

    // Déterminer la page de destination en fonction du contexte
    let targetPath = '/properties';
    
    // Si nous sommes sur la page des garages/parkings ou si le type de propriété est garage/parking
    if (
      pathname.includes('/garages-parking') || 
      filters.propertyType === 'garage' || 
      filters.propertyType === 'parking'
    ) {
      targetPath = '/properties/garages-parking';
      
      // Si nous redirigeons vers la page des garages/parkings, supprimons les filtres non pertinents
      if (queryParams.has('minBedrooms')) queryParams.delete('minBedrooms');
    }

    // Navigate to appropriate page with filters
    router.push(`${targetPath}?${queryParams.toString()}`);
  };

  return (
    <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2 tracking-tight">
              Durée de location
            </label>
            <div className="flex rounded-full bg-secondary p-1">
              <button
                type="button"
                className={`flex-1 py-2 px-4 rounded-full text-xs font-medium tracking-tight transition-colors ${
                  filters.duration === 'long'
                    ? 'bg-gradient-to-r from-[#c6a87d] to-[#d4b483] text-white'
                    : 'text-navy hover:bg-secondary-foreground/10'
                }`}
                onClick={() => setFilters(prev => ({ ...prev, duration: 'long' }))}
              >
                Longue durée
              </button>
              <button
                type="button"
                className={`flex-1 py-2 px-4 rounded-full text-xs font-medium tracking-tight transition-colors ${
                  filters.duration === 'short'
                    ? 'bg-gradient-to-r from-[#c6a87d] to-[#d4b483] text-white'
                    : 'text-navy hover:bg-secondary-foreground/10'
                }`}
                onClick={() => setFilters(prev => ({ ...prev, duration: 'short' }))}
              >
                Courte durée
              </button>
            </div>
          </div>
          
          {/* Type de propriété */}
          <div>
            <label htmlFor="propertyType" className="block text-sm font-medium mb-2 tracking-tight">
              Type de bien
            </label>
            <select
              id="propertyType"
              name="propertyType"
              className="w-full px-4 py-2 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              value={filters.propertyType}
              onChange={handleFilterChange}
            >
              <option value="all">Tous les biens</option>
              <option value="garage">Garage uniquement</option>
              <option value="parking">Place de parking uniquement</option>
              <option value="apartment">Appartement</option>
              <option value="house">Maison</option>
            </select>
          </div>

          {/* Location */}
          <div className="md:col-span-2">
            <label htmlFor="location" className="block text-sm font-medium mb-2 tracking-tight">
              Localisation
            </label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Ville, code postal, quartier..."
              className="w-full px-4 py-2 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              value={filters.location}
              onChange={handleFilterChange}
            />
          </div>

          {/* Price Range */}
          <div>
            <label htmlFor="minPrice" className="block text-sm font-medium mb-2 tracking-tight">
              Prix min
            </label>
            <input
              type="number"
              id="minPrice"
              name="minPrice"
              placeholder="Min €"
              className="w-full px-4 py-2 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              value={filters.minPrice}
              onChange={handleFilterChange}
            />
          </div>

          <div>
            <label htmlFor="maxPrice" className="block text-sm font-medium mb-2 tracking-tight">
              Prix max
            </label>
            <input
              type="number"
              id="maxPrice"
              name="maxPrice"
              placeholder="Max €"
              className="w-full px-4 py-2 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              value={filters.maxPrice}
              onChange={handleFilterChange}
            />
          </div>

          {/* Bedrooms - seulement pour les propriétés résidentielles */}
          {(filters.propertyType === 'all' || filters.propertyType === 'apartment' || filters.propertyType === 'house') && (
            <div>
              <label htmlFor="minBedrooms" className="block text-sm font-medium mb-2 tracking-tight">
                Chambres (min)
              </label>
              <select
                id="minBedrooms"
                name="minBedrooms"
                className="w-full px-4 py-2 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                value={filters.minBedrooms}
                onChange={handleFilterChange}
              >
                <option value="">Toutes</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
              </select>
            </div>
          )}

          {/* Surface */}
          <div>
            <label htmlFor="minSurface" className="block text-sm font-medium mb-2 tracking-tight">
              Surface min (m²)
            </label>
            <input
              type="number"
              id="minSurface"
              name="minSurface"
              placeholder="Surface minimale"
              className="w-full px-4 py-2 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              value={filters.minSurface}
              onChange={handleFilterChange}
            />
          </div>

          {/* Search Button */}
          <div className="md:col-span-1">
            <label className="block text-sm font-medium mb-2 opacity-0 tracking-tight">
              Rechercher
            </label>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#c6a87d] to-[#d4b483] text-white py-2 px-6 rounded-full hover:shadow-md transition-all duration-300 font-medium text-sm tracking-tight"
            >
              {pathname.includes('/garages-parking') || filters.propertyType === 'garage' || filters.propertyType === 'parking' 
                ? 'Trouver un garage/parking' 
                : 'Rechercher'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
