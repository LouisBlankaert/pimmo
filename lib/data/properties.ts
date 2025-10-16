import { Property } from '../types/property';

export const properties: Property[] = [
  {
    id: '1',
    title: 'Appartement lumineux avec vue panoramique',
    description:
      'Magnifique appartement de 3 chambres avec une vue imprenable sur la ville. Entièrement rénové avec des finitions haut de gamme, cuisine équipée et grande terrasse ensoleillée.',
    price: 1250,
    location: 'Bruxelles, 1000',
    bedrooms: 3,
    bathrooms: 2,
    surface: 110,
    imageUrl: 'https://img.freepik.com/free-photo/modern-residential-building_1268-14735.jpg',
    type: 'rent',
    propertyType: 'apartment',
    duration: 'long',
    features: ['Terrasse', 'Ascenseur', 'Parking', 'Cave', 'Cuisine équipée'],
    createdAt: '2025-09-15T14:30:00Z',
  },
  {
    id: '2',
    title: 'Maison de caractère avec jardin',
    description:
      'Charmante maison de 4 chambres avec un grand jardin arboré. Située dans un quartier calme et familial, proche des écoles et des commerces.',
    price: 1800,
    location: 'Waterloo, 1410',
    bedrooms: 4,
    bathrooms: 2,
    surface: 180,
    imageUrl: 'https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg',
    type: 'rent',
    propertyType: 'house',
    duration: 'long',
    features: ['Jardin', 'Garage', 'Grenier aménageable', 'Cheminée', 'Véranda'],
    createdAt: '2025-09-20T10:15:00Z',
  },
  {
    id: '3',
    title: 'Studio moderne au cœur de la ville',
    description:
      'Studio entièrement meublé et équipé, idéalement situé en plein centre-ville. Parfait pour un étudiant ou un jeune professionnel.',
    price: 650,
    location: 'Liège, 4000',
    bedrooms: 0,
    bathrooms: 1,
    surface: 45,
    imageUrl: 'https://img.freepik.com/free-photo/modern-apartment-architecture_1268-14696.jpg',
    type: 'rent',
    propertyType: 'apartment',
    duration: 'short',
    features: ['Meublé', 'Internet inclus', 'Charges comprises', 'Lave-linge'],
    createdAt: '2025-10-01T09:45:00Z',
  },
  {
    id: '4',
    title: 'Loft industriel avec mezzanine',
    description:
      'Superbe loft dans un ancien bâtiment industriel reconverti. Espace ouvert avec mezzanine, grandes fenêtres et plafonds hauts.',
    price: 1100,
    location: 'Gand, 9000',
    bedrooms: 2,
    bathrooms: 1,
    surface: 120,
    imageUrl: 'https://img.freepik.com/free-photo/3d-electric-car-building_23-2148972401.jpg',
    type: 'rent',
    propertyType: 'apartment',
    duration: 'long',
    features: ['Mezzanine', 'Hauteur sous plafond', 'Style industriel', 'Parking'],
    createdAt: '2025-09-25T16:20:00Z',
  },
  {
    id: '5',
    title: 'Appartement 2 chambres avec balcon',
    description:
      'Bel appartement de 2 chambres avec balcon donnant sur un parc. Cuisine ouverte, salle de bain rénovée et nombreux rangements.',
    price: 850,
    location: 'Namur, 5000',
    bedrooms: 2,
    bathrooms: 1,
    surface: 75,
    imageUrl:
      'https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg',
    type: 'rent',
    propertyType: 'apartment',
    duration: 'long',
    features: ['Balcon', 'Vue sur parc', 'Cave', 'Cuisine équipée'],
    createdAt: '2025-10-05T11:30:00Z',
  },
  {
    id: '6',
    title: 'Villa contemporaine avec piscine',
    description:
      'Magnifique villa contemporaine avec 5 chambres, piscine extérieure chauffée et jardin paysager. Idéale pour des vacances ou séjours professionnels.',
    price: 2500,
    location: 'Uccle, 1180',
    bedrooms: 5,
    bathrooms: 3,
    surface: 250,
    imageUrl:
      'https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150765.jpg',
    type: 'rent',
    propertyType: 'house',
    duration: 'short',
    features: ['Piscine', 'Domotique', 'Triple vitrage', 'Panneaux solaires', 'Alarme'],
    createdAt: '2025-09-10T08:45:00Z',
  },
];

/**
 * Get a property by its ID
 * @param id - The property ID to find
 * @returns The property object or undefined if not found
 */
export function getPropertyById(id: string): Property | undefined {
  return properties.find(property => property.id === id);
}

/**
 * Get all properties of a specific type
 * @param type - The property type to filter by (currently only 'rent')
 * @returns Array of properties matching the type
 */
export function getPropertiesByType(type: 'rent'): Property[] {
  return properties.filter(property => property.type === type);
}

/**
 * Get properties by rental duration
 * @param duration - The duration to filter by ('short' or 'long')
 * @returns Array of properties matching the duration
 */
export function getPropertiesByDuration(duration: 'short' | 'long'): Property[] {
  return properties.filter(property => property.duration === duration);
}

/**
 * Get the most recently added properties
 * @param limit - Maximum number of properties to return (default: 6)
 * @returns Array of properties sorted by creation date (newest first)
 */
export function getLatestProperties(limit: number = 6): Property[] {
  return [...properties]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, limit);
}
