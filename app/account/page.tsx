import Link from 'next/link';
import Image from 'next/image';
import { Header, Footer } from '@/components/ui/layout';
import { properties } from '@/lib/data/properties';

export default function AccountPage() {
  // Pour la démo, on utilise les 2 premières propriétés comme annonces de l'utilisateur
  const userProperties = properties.slice(0, 2);

  return (
    <>
      <Header />

      <main className="py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-semibold mb-8">Mon compte</h1>

          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-xl border border-border">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl font-semibold">
                    JD
                  </div>
                  <div>
                    <h2 className="font-medium">John Doe</h2>
                    <p className="text-sm text-muted-foreground">john.doe@example.com</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Link
                    href="/account"
                    className="flex items-center px-4 py-2 rounded-lg bg-secondary text-foreground w-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    Mon profil
                  </Link>

                  <Link
                    href="/account/properties"
                    className="flex items-center px-4 py-2 rounded-lg hover:bg-secondary text-foreground w-full transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    Mes annonces
                  </Link>

                  <Link
                    href="/account/favorites"
                    className="flex items-center px-4 py-2 rounded-lg hover:bg-secondary text-foreground w-full transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                    </svg>
                    Favoris
                  </Link>

                  <Link
                    href="/account/messages"
                    className="flex items-center px-4 py-2 rounded-lg hover:bg-secondary text-foreground w-full transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    Messages
                    <span className="ml-auto bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full">
                      3
                    </span>
                  </Link>

                  <Link
                    href="/account/settings"
                    className="flex items-center px-4 py-2 rounded-lg hover:bg-secondary text-foreground w-full transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    Paramètres
                  </Link>

                  <button className="flex items-center px-4 py-2 rounded-lg hover:bg-secondary text-foreground w-full transition-colors text-left">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16 17 21 12 16 7"></polyline>
                      <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                    Déconnexion
                  </button>
                </div>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border">
                <Link
                  href="/properties/new"
                  className="bg-primary text-primary-foreground px-4 py-2 rounded-full hover:bg-primary/90 transition-colors w-full flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                  Déposer une annonce
                </Link>
              </div>
            </div>

            {/* Main Content */}
            <div>
              <div className="bg-card p-6 rounded-xl border border-border mb-8">
                <h2 className="text-xl font-semibold mb-6">Informations personnelles</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-1">Prénom</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      defaultValue="John"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Nom</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      defaultValue="Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      defaultValue="john.doe@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Téléphone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      defaultValue="+32 470 12 34 56"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <button className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:bg-primary/90 transition-colors">
                    Enregistrer les modifications
                  </button>
                </div>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Mes annonces</h2>
                  <Link href="/account/properties" className="text-primary hover:underline">
                    Voir tout →
                  </Link>
                </div>

                <div className="space-y-4">
                  {userProperties.map(property => (
                    <div
                      key={property.id}
                      className="flex flex-col md:flex-row gap-4 p-4 border border-border rounded-xl"
                    >
                      <div className="relative h-40 md:w-48 rounded-lg overflow-hidden">
                        <Image
                          src={property.imageUrl}
                          alt={property.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1">
                        <h3 className="font-medium mb-1">{property.title}</h3>
                        <p className="text-muted-foreground text-sm mb-2">{property.location}</p>
                        <p className="font-semibold mb-4">
                          {property.price.toLocaleString('fr-FR')} €
                          {property.type === 'rent' && (
                            <span className="text-sm font-normal">/mois</span>
                          )}
                        </p>

                        <div className="flex gap-2">
                          <Link
                            href={`/properties/${property.id}/edit`}
                            className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full hover:bg-secondary/80 transition-colors"
                          >
                            Modifier
                          </Link>

                          <button className="text-xs bg-destructive/10 text-destructive px-3 py-1 rounded-full hover:bg-destructive/20 transition-colors">
                            Supprimer
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
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
