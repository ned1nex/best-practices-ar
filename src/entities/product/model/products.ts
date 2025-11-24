import type { Product } from '@/shared/types';

export const products: Product[] = [
  {
    id: 'lg-tv-55-oled55c3',
    name: 'LG 55" OLED55C3RLA OLED TV',
    brand: 'LG',
    category: 'TVs',
    price: 1599,
    inStock: true,
    modelPath: '/models/lg-tv.glb',
    usdzPath: '/models/lg-tv.usdz',
    posterPath: '/posters/lg-led.png',
    articleNumber: 'OLED55C3RLA',
    specifications: {
      dimensions: '122.8x70.6x2.21',
      diagonal: '55" (139 cm)',
      energyClass: 'G',
      color: 'Black',
    },
  },
  {
    id: 'samsung-side-by-side-rf65a967fb1',
    name: 'Samsung Side-by-Side Refrigerator RF65A967FB1',
    brand: 'Samsung',
    category: 'Refrigerators',
    price: 1899,
    inStock: true,
    modelPath: '/models/samsung-fridge.glb',
    usdzPath: '/models/samsung-fridge.usdz',
    posterPath: '/posters/samsung-fridge.png',
    articleNumber: 'RF65A967FB1/WT',
    specifications: {
      dimensions: '91.2x178x71.6',
      volume: '647 L',
      energyClass: 'A++',
      color: 'Black Steel',
    },
  },
  {
    id: 'bosch-washing-machine-wan24140',
    name: 'Bosch WAN24140OE Narrow Washing Machine',
    brand: 'Bosch',
    category: 'Washing Machines',
    price: 549,
    inStock: true,
    modelPath: '/models/bosh.glb',
    usdzPath: '/models/bosch.usdz',
    posterPath: '/posters/boss.jpg',
    articleNumber: 'WAN24140OE',
    specifications: {
      dimensions: '59.8x84.8x44',
      capacity: '7 kg',
      energyClass: 'A+++',
      color: 'White',
    },
  },
];

/**
 * Get product by ID
 */
export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

/**
 * Get products by category
 */
export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category);
}
