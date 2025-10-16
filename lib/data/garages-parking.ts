import { GarageParking } from '../types/garage-parking';

export const properties: GarageParking[] = [
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
    id: 'g3',
    title: 'Grand garage pour 2 véhicules',
    description:
      'Spacieux garage pouvant accueillir 2 véhicules ou servir d\'espace de stockage. Hauteur permettant l\'installation d\'étagères.',
    price: 180,
    location: 'Waterloo, 1410',
    surface: 30,
    imageUrl: 'https://img.freepik.com/free-photo/garage-interior-with-car-inside_23-2149193800.jpg',
    type: 'rent',
    propertyType: 'garage',
    features: ['Double porte', 'Électricité', 'Hauteur importante', 'Étagères'],
    createdAt: '2025-09-25T16:20:00Z',
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
  {
    id: 'p3',
    title: 'Place de parking dans centre commercial',
    description:
      'Place de parking réservée dans parking de centre commercial. Idéal pour commerçants ou employés du centre.',
    price: 100,
    location: 'Liège, 4000',
    surface: 12,
    imageUrl: 'https://img.freepik.com/free-photo/empty-parking-lot_1127-3293.jpg',
    type: 'rent',
    propertyType: 'parking',
    features: ['Accès 24/7', 'Proximité commerces', 'Sécurisé'],
    createdAt: '2025-09-10T08:45:00Z',
  },
];

/**
 * Get a garage/parking by its ID
 * @param id - The property ID to find
 * @returns The property object or undefined if not found
 */
export function getPropertyById(id: string): GarageParking | undefined {
  return properties.find(property => property.id === id);
}

/**
 * Get all properties of a specific type
 * @param propertyType - The property type to filter by ('garage' or 'parking')
 * @returns Array of properties matching the type
 */
export function getPropertiesByType(propertyType: 'garage' | 'parking'): GarageParking[] {
  return properties.filter(property => property.propertyType === propertyType);
}

/**
 * Get the most recently added properties
 * @param limit - Maximum number of properties to return (default: 6)
 * @returns Array of properties sorted by creation date (newest first)
 */
export function getLatestProperties(limit: number = 6): GarageParking[] {
  return [...properties]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, limit);
}
