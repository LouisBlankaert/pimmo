/**
 * Property interface representing a rental property
 */
export interface Property {
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
  /** Number of bedrooms (0 for studio) */
  bedrooms: number;
  /** Number of bathrooms */
  bathrooms: number;
  /** Surface area in square meters */
  surface: number;
  /** URL to the property image */
  imageUrl: string;
  /** Type of listing - currently only rental properties */
  type: 'rent';
  /** Type of property - apartment, house, etc. */
  propertyType?: 'apartment' | 'house' | 'garage' | 'parking';
  /** Duration of rental - short term or long term */
  duration: 'short' | 'long';
  /** Array of property features/amenities */
  features: string[];
  /** ISO date string when the listing was created */
  createdAt: string;
}
