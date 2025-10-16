/**
 * GarageParking interface representing a garage or parking space
 */
export interface GarageParking {
  /** Unique identifier for the property */
  id: string;
  /** Title of the property listing */
  title: string;
  /** Detailed description of the property */
  description: string;
  /** Monthly rental price in euros */
  price: number;
  /** Location of the property (city, postal code) */
  location: string;
  /** Surface area in square meters */
  surface: number;
  /** URL to the property image */
  imageUrl: string;
  /** Type of listing - currently only rental properties */
  type: 'rent';
  /** Type of property - garage or parking */
  propertyType: 'garage' | 'parking';
  /** Array of property features/amenities */
  features: string[];
  /** ISO date string when the listing was created */
  createdAt: string;
}
