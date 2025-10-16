import { Suspense } from 'react';
import Link from 'next/link';
import { Header, Footer } from '@/components/ui/layout';
import { PropertyCard } from '@/components/ui/property';
import { SearchFilters } from '@/components/ui/common';
import { properties } from '@/lib/data/properties';

interface SearchParams {
  type?: string;
  propertyType?: 'all' | 'garage' | 'parking' | 'apartment' | 'house';
  minPrice?: string;
  maxPrice?: string;
  minBedrooms?: string;
  minSurface?: string;
  location?: string;
  duration?: 'short' | 'long';
}

interface PropertiesPageProps {
  searchParams: SearchParams;
}

export default function PropertiesPage({ searchParams }: PropertiesPageProps) {
  // Filter properties based on search params
  const filteredProperties = properties.filter(property => {
    // Filter by type (sale/rent)
    if (searchParams.type && property.type !== searchParams.type) {
      return false;
    }
    
    // Filter by property type (apartment, house, etc.)
    if (searchParams.propertyType && searchParams.propertyType !== 'all') {
      // Si un type spécifique est demandé mais que la propriété n'a pas de type défini
      // ou qu'elle a un type différent, on l'exclut
      if (!property.propertyType || property.propertyType !== searchParams.propertyType) {
        return false;
      }
    }

    // Filter by price range
    if (searchParams.minPrice && property.price < parseInt(searchParams.minPrice)) {
      return false;
    }

    if (searchParams.maxPrice && property.price > parseInt(searchParams.maxPrice)) {
      return false;
    }

    // Filter by bedrooms
    if (searchParams.minBedrooms && property.bedrooms < parseInt(searchParams.minBedrooms)) {
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
    
    // Filter by duration (short/long term)
    if (searchParams.duration && property.duration !== searchParams.duration) {
      return false;
    }

    return true;
  });

  // Générer un titre dynamique en fonction des filtres
  let title = 'Propriétés';
  
  // Type de transaction
  if (searchParams.type === 'rent') {
    title = 'Locations';
  }
  
  // Type de propriété
  if (searchParams.propertyType) {
    switch(searchParams.propertyType) {
      case 'apartment':
        title = `Appartements ${searchParams.type === 'rent' ? 'à louer' : ''}`;
        break;
      case 'house':
        title = `Maisons ${searchParams.type === 'rent' ? 'à louer' : ''}`;
        break;
      case 'garage':
      case 'parking':
        // Redirection vers la page spécifique
        break;
    }
  }
  
  // Durée
  if (searchParams.duration) {
    title += searchParams.duration === 'short' ? ' (courte durée)' : ' (longue durée)';
  }

  return (
    <>
      <Header />

      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-semibold mb-2">{title}</h1>
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
                propertyType: searchParams.propertyType as any || 'all',
                minPrice: searchParams.minPrice || '',
                maxPrice: searchParams.maxPrice || '',
                minBedrooms: searchParams.minBedrooms || '',
                minSurface: searchParams.minSurface || '',
                location: searchParams.location || '',
                duration: searchParams.duration as any || 'long',
              }} />
            </Suspense>
          </div>

          {/* Results */}
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map(property => (
                <PropertyCard
                  key={property.id}
                  id={property.id}
                  title={property.title}
                  price={property.price}
                  location={property.location}
                  bedrooms={property.bedrooms}
                  bathrooms={property.bathrooms}
                  surface={property.surface}
                  imageUrl={property.imageUrl}
                  type={property.type}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold mb-4">Aucun résultat trouvé</h2>
              <p className="text-muted-foreground mb-8">
                Essayez de modifier vos critères de recherche pour trouver des propriétés
                correspondantes.
              </p>
              <Link 
                href="/properties" 
                className="bg-gradient-to-r from-[#c6a87d] to-[#d4b483] text-white px-6 py-2 rounded-full hover:shadow-md transition-all duration-300"
              >
                Réinitialiser les filtres
              </Link>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
