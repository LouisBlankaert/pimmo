'use client';

import Link from 'next/link';

/**
 * Footer component
 * Displays site navigation, legal links and copyright information
 */

export default function Footer() {
  return (
    <footer className="bg-navy py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-semibold">
                <span className="text-black">Pi</span>
                <span style={{ color: '#c6a87d' }}>mmo</span>
              </span>
              <span className="ml-1 text-xs uppercase tracking-widest text-gold-light">
                Immobilier
              </span>
            </Link>
            <p className="mt-4 text-gray-300">
              La plateforme qui connecte directement les particuliers pour la location de biens
              immobiliers sans intermédiaire ni frais d'agence.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-medium mb-4 text-gold-light">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-gold-light transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/properties"
                  className="text-gray-300 hover:text-gold-light transition-colors"
                >
                  Locations
                </Link>
              </li>
              <li>
                <Link
                  href="/properties/garages-parking"
                  className="text-gray-300 hover:text-gold-light transition-colors"
                >
                  Garages & Parking
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-medium mb-4 text-gold-light">Informations légales</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="text-gray-300 hover:text-gold-light transition-colors"
                >
                  Conditions d'utilisation
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-gold-light transition-colors"
                >
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-gray-300 hover:text-gold-light transition-colors"
                >
                  Gestion des cookies
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-gold-light transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-4 border-t border-navy-light text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} <span className="text-gold-light">Pimmo</span>. Tous
            droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
