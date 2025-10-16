"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { notFound } from 'next/navigation';
import { Header, Footer } from '@/components/ui/layout';
import { getPropertyById } from '@/lib/data/properties';

interface PropertyPageProps {
  params: {
    id: string;
  };
}

export default function PropertyPage({ params }: PropertyPageProps) {
  // Utiliser React.use() pour déballer les paramètres comme recommandé par Next.js
  const resolvedParams = React.use(params as any) as { id: string };
  const property = getPropertyById(resolvedParams.id);
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  
  // Informations du propriétaire (simulées)
  const ownerEmail = "proprietaire@example.com";
  const ownerPhone = "+33 6 12 34 56 78";

  if (!property) {
    notFound();
  }

  return (
    <>
      <Header />

      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <nav className="flex text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">
                Accueil
              </Link>
              <span className="mx-2">/</span>
              <Link href={`/properties?type=${property.type}`} className="hover:text-primary">
                À louer
              </Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">{property.title}</span>
            </nav>
          </div>

          {/* Property Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-semibold mb-2">{property.title}</h1>
            <p className="text-xl text-muted-foreground mb-4">{property.location}</p>
            <div className="flex items-center gap-2">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                À louer
              </span>
              <span className="text-2xl font-semibold">
                {property.price.toLocaleString('fr-FR')} €
                {property.type === 'rent' && <span className="text-sm font-normal">/mois</span>}
              </span>
            </div>
          </div>

          {/* Property Images */}
          <div className="mb-12">
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src={property.imageUrl}
                alt={property.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Property Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2">
              {/* Features */}
              <div className="flex flex-wrap gap-8 mb-8 p-6 bg-secondary rounded-xl">
                <div className="flex flex-col items-center">
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
                    className="text-primary mb-2"
                  >
                    <path d="M2 12h20"></path>
                    <path d="M6 12v-6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6"></path>
                    <path d="M4 12v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8"></path>
                  </svg>
                  <span className="text-sm text-muted-foreground">Chambres</span>
                  <span className="font-semibold">{property.bedrooms}</span>
                </div>

                <div className="flex flex-col items-center">
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
                    className="text-primary mb-2"
                  >
                    <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"></path>
                    <line x1="10" x2="8" y1="5" y2="7"></line>
                    <line x1="2" x2="22" y1="12" y2="12"></line>
                    <line x1="7" x2="7" y1="19" y2="21"></line>
                    <line x1="17" x2="17" y1="19" y2="21"></line>
                  </svg>
                  <span className="text-sm text-muted-foreground">Salles de bain</span>
                  <span className="font-semibold">{property.bathrooms}</span>
                </div>

                <div className="flex flex-col items-center">
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
                    className="text-primary mb-2"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    <path d="M3 9h18"></path>
                    <path d="M9 21V9"></path>
                  </svg>
                  <span className="text-sm text-muted-foreground">Surface</span>
                  <span className="font-semibold">{property.surface} m²</span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Description</h2>
                <p className="text-muted-foreground whitespace-pre-line">{property.description}</p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Caractéristiques</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {property.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
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
                        className="text-primary"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Sidebar */}
            <div>
              <div className="sticky top-24 bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-4">Contacter le propriétaire</h3>
                
                {/* Boutons pour afficher les coordonnées */}
                <div className="flex flex-col gap-3 mb-6">
                  <button
                    type="button"
                    onClick={() => setShowEmail(!showEmail)}
                    className="flex items-center justify-between w-full bg-secondary hover:bg-secondary/80 text-foreground py-2 px-4 rounded-lg transition-all duration-300"
                  >
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-primary">
                        <rect width="20" height="16" x="2" y="4" rx="2"/>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                      </svg>
                      <span>Voir l'email</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {showEmail ? <path d="m18 15-6-6-6 6"/> : <path d="m6 9 6 6 6-6"/>}
                    </svg>
                  </button>
                  
                  {showEmail && (
                    <div className="bg-secondary/50 p-3 rounded-lg text-center animate-fadeIn">
                      <a href={`mailto:${ownerEmail}`} className="text-primary hover:underline">
                        {ownerEmail}
                      </a>
                    </div>
                  )}
                  
                  <button
                    type="button"
                    onClick={() => setShowPhone(!showPhone)}
                    className="flex items-center justify-between w-full bg-secondary hover:bg-secondary/80 text-foreground py-2 px-4 rounded-lg transition-all duration-300"
                  >
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-primary">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                      <span>Voir le téléphone</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {showPhone ? <path d="m18 15-6-6-6 6"/> : <path d="m6 9 6 6 6-6"/>}
                    </svg>
                  </button>
                  
                  {showPhone && (
                    <div className="bg-secondary/50 p-3 rounded-lg text-center animate-fadeIn">
                      <a href={`tel:${ownerPhone.replace(/\s/g, '')}`} className="text-primary hover:underline">
                        {ownerPhone}
                      </a>
                    </div>
                  )}
                </div>
                
                {/* Note informative */}
                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    Contactez directement le propriétaire par email ou téléphone pour plus d'informations sur cette propriété.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
