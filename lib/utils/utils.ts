import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class names using clsx and tailwind-merge
 * Useful for conditional class application with Tailwind CSS
 *
 * @param inputs - Class values to be merged
 * @returns Merged class string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a price with currency symbol
 *
 * @param price - The price to format
 * @param currency - The currency symbol (default: '€')
 * @returns Formatted price string
 */
export function formatPrice(price: number, currency: string = '€'): string {
  return `${price.toLocaleString('fr-FR')} ${currency}`;
}

/**
 * Formats a date to a readable string
 *
 * @param dateString - ISO date string
 * @param options - Intl.DateTimeFormatOptions
 * @returns Formatted date string
 */
export function formatDate(
  dateString: string,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
): string {
  return new Date(dateString).toLocaleDateString('fr-FR', options);
}

/**
 * Truncates a string to a maximum length and adds ellipsis if needed
 *
 * @param str - The string to truncate
 * @param maxLength - Maximum length (default: 100)
 * @returns Truncated string
 */
export function truncateString(str: string, maxLength: number = 100): string {
  if (str.length <= maxLength) return str;
  return `${str.slice(0, maxLength)}...`;
}
