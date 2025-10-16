/**
 * Application constants
 */

export const APP_NAME = 'Pimmo';
export const APP_DESCRIPTION = 'Plateforme de location immobilière entre particuliers';
export const APP_URL = 'https://pimmo.com';

/**
 * Property related constants
 */
export const PROPERTY_TYPES = {
  RENT: 'rent',
  GARAGE: 'garage',
  PARKING: 'parking',
} as const;

export const RENTAL_DURATIONS = {
  SHORT: 'short',
  LONG: 'long',
} as const;

/**
 * Image domains for Next.js config
 */
export const IMAGE_DOMAINS = ['img.freepik.com'];

/**
 * Routes
 */
export const ROUTES = {
  HOME: '/',
  PROPERTIES: '/properties',
  PROPERTY_DETAIL: (id: string) => `/properties/${id}`,
  NEW_PROPERTY: '/properties/new',
  GARAGES_PARKING: '/properties/garages-parking',
};
