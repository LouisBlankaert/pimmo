import { Header, Footer } from '@/components/ui/layout';

export default function NewPropertyPage() {
  return (
    <>
      <Header />

      <main className="py-8">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl font-semibold mb-8">Déposer une annonce</h1>

          <div className="bg-card p-6 rounded-xl border border-border">
            <form className="space-y-6">
              {/* Type Selection */}
              <div>
                <label className="block text-lg font-medium mb-2">Type d'annonce</label>
                <div className="flex rounded-full bg-secondary p-1 w-fit">
                  <button
                    type="button"
                    className="py-2 px-6 rounded-full text-sm bg-primary text-primary-foreground"
                  >
                    Vente
                  </button>
                  <button
                    type="button"
                    className="py-2 px-6 rounded-full text-sm text-foreground hover:bg-secondary-foreground/10"
                  >
                    Location
                  </button>
                </div>
              </div>

              {/* Property Information */}
              <div>
                <h2 className="text-xl font-medium mb-4">Informations sur le bien</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium mb-1">
                      Titre de l'annonce *
                    </label>
                    <input
                      type="text"
                      id="title"
                      className="w-full px-4 py-2 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Ex: Appartement lumineux avec terrasse"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="price" className="block text-sm font-medium mb-1">
                      Prix *
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        id="price"
                        className="w-full px-4 py-2 pl-8 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Prix en euros"
                        required
                      />
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                        €
                      </span>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm font-medium mb-1">
                      Localisation *
                    </label>
                    <input
                      type="text"
                      id="location"
                      className="w-full px-4 py-2 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Ville, code postal"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="surface" className="block text-sm font-medium mb-1">
                      Surface (m²) *
                    </label>
                    <input
                      type="number"
                      id="surface"
                      className="w-full px-4 py-2 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Surface en m²"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="bedrooms" className="block text-sm font-medium mb-1">
                      Chambres *
                    </label>
                    <select
                      id="bedrooms"
                      className="w-full px-4 py-2 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      required
                    >
                      <option value="">Sélectionner</option>
                      <option value="0">Studio</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5+</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="bathrooms" className="block text-sm font-medium mb-1">
                      Salles de bain *
                    </label>
                    <select
                      id="bathrooms"
                      className="w-full px-4 py-2 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      required
                    >
                      <option value="">Sélectionner</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4+</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-1">
                  Description *
                </label>
                <textarea
                  id="description"
                  rows={6}
                  className="w-full px-4 py-2 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Décrivez votre bien en détail..."
                  required
                ></textarea>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-xl font-medium mb-4">Caractéristiques</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    'Terrasse',
                    'Balcon',
                    'Jardin',
                    'Parking',
                    'Garage',
                    'Ascenseur',
                    'Cave',
                    'Meublé',
                    'Cuisine équipée',
                    'Piscine',
                  ].map(feature => (
                    <div key={feature} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`feature-${feature}`}
                        className="rounded border-input h-4 w-4 text-primary focus:ring-ring"
                      />
                      <label htmlFor={`feature-${feature}`} className="ml-2 text-sm">
                        {feature}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Photos */}
              <div>
                <h2 className="text-xl font-medium mb-4">Photos</h2>

                <div className="border-2 border-dashed border-input rounded-xl p-8 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mx-auto text-muted-foreground mb-4"
                  >
                    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
                    <path d="M12 12v9"></path>
                    <path d="m16 16-4-4-4 4"></path>
                  </svg>
                  <p className="text-muted-foreground mb-2">Glissez-déposez vos photos ici ou</p>
                  <button
                    type="button"
                    className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full hover:bg-secondary/80 transition-colors"
                  >
                    Parcourir
                  </button>
                  <p className="text-xs text-muted-foreground mt-2">
                    Formats acceptés: JPG, PNG. Taille max: 5MB par image
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-xl font-medium mb-4">Vos coordonnées</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-full hover:bg-primary/90 transition-colors font-medium"
                >
                  Publier l'annonce
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
