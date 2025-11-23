import type { Product } from '@/shared/types';

export const products: Product[] = [
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
    id: 'lg-two-door-ga-b509sqtl',
    name: 'LG Two-Door Refrigerator GA-B509SQTL',
    brand: 'LG',
    category: 'Refrigerators',
    price: 899,
    inStock: true,
    modelPath: '/models/lg-fridge-two-door.glb',
    usdzPath: '/models/lg-fridge-two-door.usdz',
    posterPath: '/posters/lg-fridge.png',
    articleNumber: 'GA-B509SQTL',
    specifications: {
      dimensions: '59.5x190.7x68.6',
      volume: '384 L',
      energyClass: 'A+',
      color: 'Platinum Silver',
    },
  },
  {
    id: 'samsung-tv-65-qe65q60c',
    name: 'Samsung 65" QE65Q60C QLED TV',
    brand: 'Samsung',
    category: 'TVs',
    price: 1199,
    inStock: true,
    modelPath: '/models/samsung-tv-65.glb',
    usdzPath: '/models/samsung-tv-65.usdz',
    posterPath: '/posters/samsung-tv-65.jpg',
    articleNumber: 'QE65Q60CAUXRU',
    specifications: {
      dimensions: '144.8x83x2.57',
      diagonal: '65" (165 cm)',
      energyClass: 'E',
      color: 'Titan',
    },
  },
  {
    id: 'lg-tv-55-oled55c3',
    name: 'LG 55" OLED55C3RLA OLED TV',
    brand: 'LG',
    category: 'TVs',
    price: 1599,
    inStock: true,
    modelPath: '/models/lg-tv-55.glb',
    usdzPath: '/models/lg-tv-55.usdz',
    posterPath: '/posters/lg-tv-55.jpg',
    articleNumber: 'OLED55C3RLA',
    specifications: {
      dimensions: '122.8x70.6x2.21',
      diagonal: '55" (139 cm)',
      energyClass: 'G',
      color: 'Black',
    },
  },
  {
    id: 'bosch-washing-machine-wan24140',
    name: 'Bosch WAN24140OE Narrow Washing Machine',
    brand: 'Bosch',
    category: 'Washing Machines',
    price: 549,
    inStock: true,
    modelPath: '/models/bosch-washing-narrow.glb',
    usdzPath: '/models/bosch-washing-narrow.usdz',
    posterPath: '/posters/bosch-washing-narrow.jpg',
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
