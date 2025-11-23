/**
 * Format price with proper spacing and currency symbol
 * @param price - Price in USD
 * @returns Formatted price string (e.g., "$1,299")
 */
export function formatPrice(price: number): string {
  return `$${price.toLocaleString('en-US')}`;
}
