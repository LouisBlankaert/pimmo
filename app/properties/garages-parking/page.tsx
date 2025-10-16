import { Suspense } from 'react';
import Link from 'next/link';
import { Header, Footer } from '@/components/ui/layout';
import { PropertyCard } from '@/components/ui/property';
import { SearchFilters } from '@/components/ui/common';

// Importation temporaire des données en attendant que les modules soient correctement reconnus
type PropertyType = {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  surface: number;
  imageUrl: string;
  type: 'rent';
  propertyType: 'garage' | 'parking';
  features: string[];
  createdAt: string;
};

const properties: PropertyType[] = [
  {
    id: 'g1',
    title: 'Garage sécurisé proche du centre',
    description:
      'Garage fermé et sécurisé situé à proximité du centre-ville. Accès facile et porte automatique avec télécommande.',
    price: 120,
    location: 'Bruxelles, 1000',
    surface: 15,
    imageUrl: 'https://img.freepik.com/free-photo/garage-with-roller-door_1303-9864.jpg',
    type: 'rent',
    propertyType: 'garage',
    features: ['Porte automatique', 'Alarme', 'Éclairage', 'Sol bétonné'],
    createdAt: '2025-09-15T14:30:00Z',
  },
  {
    id: 'g2',
    title: 'Box fermé dans parking souterrain',
    description:
      'Box fermé dans un parking souterrain sécurisé avec gardien. Idéal pour voiture ou stockage.',
    price: 150,
    location: 'Bruxelles, 1050',
    surface: 18,
    imageUrl: 'https://img.freepik.com/free-photo/underground-parking-garage-with-cars_1340-34258.jpg',
    type: 'rent',
    propertyType: 'garage',
    features: ['Accès sécurisé', 'Gardien', 'Caméras de surveillance', 'Éclairage'],
    createdAt: '2025-09-20T10:15:00Z',
  },
  {
    id: 'p1',
    title: 'Place de parking extérieure',
    description:
      'Place de parking extérieure dans résidence sécurisée. Emplacement facile d\'accès.',
    price: 75,
    location: 'Bruxelles, 1030',
    surface: 12,
    imageUrl: 'https://img.freepik.com/free-photo/empty-parking-lot_1127-3298.jpg',
    type: 'rent',
    propertyType: 'parking',
    features: ['Accès par badge', 'Marquage au sol', 'Éclairage nocturne'],
    createdAt: '2025-10-01T09:45:00Z',
  },
  {
    id: 'p2',
    title: 'Place de parking couverte',
    description:
      'Place de parking couverte dans immeuble récent. Protection contre les intempéries et surveillance par caméras.',
    price: 90,
    location: 'Namur, 5000',
    surface: 13,
    imageUrl: 'https://img.freepik.com/free-photo/parking-garage-underground-interior-with-cars_1340-34260.jpg',
    type: 'rent',
    propertyType: 'parking',
    features: ['Couvert', 'Éclairage', 'Vidéosurveillance'],
    createdAt: '2025-10-05T11:30:00Z',
  },
];

interface SearchParams {
  type?: string;
  minPrice?: string;
  maxPrice?: string;
  minSurface?: string;
  location?: string;
  propertyType?: 'garage' | 'parking' | 'all';
  duration?: 'short' | 'long';
}

interface GaragesParkingPageProps {
  searchParams: SearchParams;
}

export default function GaragesParkingPage({ searchParams }: GaragesParkingPageProps) {
  // Filter properties based on search params
  const filteredProperties = properties.filter((property: PropertyType) => {
    // Filter by specific type (garage/parking)
    if (searchParams.propertyType && property.propertyType !== searchParams.propertyType) {
      return false;
    }

    // Filter by price range
    if (searchParams.minPrice && property.price < parseInt(searchParams.minPrice)) {
      return false;
    }

    if (searchParams.maxPrice && property.price > parseInt(searchParams.maxPrice)) {
      return false;
    }

    // Filter by surface
    if (searchParams.minSurface && property.surface < parseInt(searchParams.minSurface)) {
      return false;
    }

    // Filter by location (case insensitive partial match)
    if (
      searchParams.location &&
      !property.location.toLowerCase().includes(searchParams.location.toLowerCase())
    ) {
      return false;
    }

    return true;
  });

  const title = 'Garages & Places de Parking';
  const subtitle = searchParams.propertyType === 'garage' 
    ? 'Garages uniquement' 
    : searchParams.propertyType === 'parking' 
      ? 'Places de parking uniquement' 
      : 'Garages et places de parking';

  return (
    <>
      <Header />

      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-semibold mb-2">{title}</h1>
            <p className="text-muted-foreground mb-2">
              {subtitle}
            </p>
            <p className="text-muted-foreground">
              {filteredProperties.length}{' '}
              {filteredProperties.length > 1 ? 'résultats trouvés' : 'résultat trouvé'}
            </p>
          </div>

          {/* Search Filters */}
          <div className="mb-8">
            <Suspense fallback={<div>Chargement des filtres...</div>}>
              <SearchFilters initialFilters={{
                type: 'rent',
                propertyType: searchParams.propertyType || 'all',
                minPrice: searchParams.minPrice || '',
                maxPrice: searchParams.maxPrice || '',
                minSurface: searchParams.minSurface || '',
                location: searchParams.location || '',
                duration: searchParams.duration as 'short' | 'long' || 'long',
              }} />
            </Suspense>
          </div>

          {/* Results */}
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property: PropertyType) => (
                <PropertyCard
                  key={property.id}
                  id={property.id}
                  title={property.title}
                  price={property.price}
                  location={property.location}
                  bedrooms={0}
                  bathrooms={0}
                  surface={property.surface}
                  imageUrl={property.imageUrl}
                  type={property.type}
                  propertyType={property.propertyType}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold mb-4">Aucun résultat trouvé</h2>
              <p className="text-muted-foreground mb-8">
                Essayez de modifier vos critères de recherche pour trouver des garages ou places de parking
                correspondants.
              </p>
              <Link 
                href="/properties/garages-parking" 
                className="bg-gradient-to-r from-[#c6a87d] to-[#d4b483] text-white px-6 py-2 rounded-full hover:shadow-md transition-all duration-300"
              >
                Réinitialiser les filtres
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
