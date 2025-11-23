/**
 * Generate shareable product link
 * @param productId - Product ID
 * @returns Full URL to product page
 */
export function generateShareLink(productId: string): string {
  if (typeof window !== 'undefined') {
    const baseUrl = window.location.origin;
    return `${baseUrl}/product/${productId}`;
  }
  return `/product/${productId}`;
}

/**
 * Share product using Web Share API or fallback to clipboard
 * @param productId - Product ID
 * @param productName - Product name
 * @returns Promise indicating success
 */
export async function shareProduct(
  productId: string,
  productName: string
): Promise<{ success: boolean; method: 'native' | 'clipboard' | 'error' }> {
  const url = generateShareLink(productId);

  // Try native Web Share API first
  if (typeof navigator !== 'undefined' && navigator.share) {
    try {
      await navigator.share({
        title: productName,
        text: `Check out ${productName} on M.Video`,
        url: url,
      });
      return { success: true, method: 'native' };
    } catch (error) {
      // User cancelled share or error occurred
      if ((error as Error).name === 'AbortError') {
        return { success: false, method: 'error' };
      }
    }
  }

  // Fallback to clipboard
  try {
    await navigator.clipboard.writeText(url);
    return { success: true, method: 'clipboard' };
  } catch {
    return { success: false, method: 'error' };
  }
}
