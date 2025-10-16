import { getLatestProperties, getPropertiesByDuration } from '@/lib';
import { Header, Footer } from '@/components/ui/layout';
import { Hero } from '@/components/ui/common';
import { PropertyCard } from '@/components/ui/property';
import Link from 'next/link';

/**
 * Home page component
 * Displays the hero section, latest properties, rental types and CTA
 */

export default function Home() {
  // Récupérer les propriétés les plus récentes
  const latestProperties = getLatestProperties(6);
  const shortTermProperties = getPropertiesByDuration('short').slice(0, 3);
  const longTermProperties = getPropertiesByDuration('long').slice(0, 3);

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Featured Properties */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-8 text-center">
              Dernières locations disponibles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestProperties.map(property => (
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
                  duration={property.duration}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Types de location */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-8 text-center">Types de locations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Courte durée */}
              <div className="bg-card rounded-xl p-8 text-center">
                <h3 className="text-2xl font-semibold mb-2">Courte durée</h3>
                <p className="text-muted-foreground mb-6">
                  Trouvez des locations temporaires pour quelques semaines ou quelques mois, idéales
                  pour un séjour professionnel.
                </p>
                <Link
                  href="/properties?duration=short"
                  className="inline-block bg-gradient-to-r from-[#c6a87d] to-[#d4b483] text-white px-6 py-2 rounded-full hover:shadow-md transition-all duration-300"
                >
                  Voir les locations courte durée
                </Link>
              </div>

              {/* Longue durée */}
              <div className="bg-card rounded-xl p-8 text-center">
                <h3 className="text-2xl font-semibold mb-2">Longue durée</h3>
                <p className="text-muted-foreground mb-6">
                  Découvrez des appartements et maisons à louer directement auprès des propriétaires
                  pour une location stable.
                </p>
                <Link
                  href="/properties?duration=long"
                  className="inline-block bg-gradient-to-r from-[#c6a87d] to-[#d4b483] text-white px-6 py-2 rounded-full hover:shadow-md transition-all duration-300"
                >
                  Voir les locations longue durée
                </Link>
              </div>
              
              {/* Garages et Parking */}
              <div className="bg-card rounded-xl p-8 text-center">
                <h3 className="text-2xl font-semibold mb-2">Garages & Parking</h3>
                <p className="text-muted-foreground mb-6">
                  Louez facilement un garage ou une place de parking entre particuliers, sans intermédiaire
                  et sans frais d'agence.
                </p>
                <Link
                  href="/properties/garages-parking"
                  className="inline-block bg-gradient-to-r from-[#c6a87d] to-[#d4b483] text-white px-6 py-2 rounded-full hover:shadow-md transition-all duration-300"
                >
                  Voir les garages et parkings
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold mb-4">Vous avez un bien à louer ?</h2>
            <p className="text-xl mb-8 opacity-90">
              Publiez votre annonce gratuitement et trouvez rapidement des locataires sérieux.
            </p>
            <Link
              href="/properties/new"
              className="inline-block bg-gradient-to-r from-[#c6a87d] to-[#d4b483] text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300"
            >
              Publier une location
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
