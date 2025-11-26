import type { Product } from '@/shared/types';

export const products: Product[] = [
  {
    id: 'lg-tv-55-oled55c3',
    name: 'LG 55" OLED55C3RLA OLED TV',
    brand: 'LG',
    category: 'Телевизоры',
    price: 149990,
    inStock: true,
    modelPath: '/models/lg-tv.glb',
    usdzPath: '/models/lg-tv.usdz',
    posterPath: '/posters/lg-led.png',
    articleNumber: 'OLED55C3RLA',
    specifications: {
      dimensions: '122.8x70.6x2.21',
      diagonal: '55" (139 см)',
      energyClass: 'G',
      color: 'Черный',
    },
  },
  {
    id: 'samsung-side-by-side-rf65a967fb1',
    name: 'Samsung RF65A967FB1',
    brand: 'Samsung',
    category: 'Холодильники',
    price: 179990,
    inStock: true,
    modelPath: '/models/refreg.glb',
    usdzPath: '/models/refreg.usdz',
    posterPath: '/posters/samsung-fridge.png',
    articleNumber: 'RF65A967FB1/WT',
    specifications: {
      dimensions: '91.2x178x71.6',
      volume: '647 л',
      energyClass: 'A++',
      color: 'Черная сталь',
    },
  },
  {
    id: 'bosch-washing-machine-wan24140',
    name: 'Bosch WAN24140OE ',
    brand: 'Bosch',
    category: 'Стиральные машины',
    price: 54990,
    inStock: true,
    modelPath: '/models/bosh_2.glb',
    usdzPath: '/models/bosh_2.usdz',
    posterPath: '/posters/boss.jpg',
    articleNumber: 'WAN24140OE',
    specifications: {
      dimensions: '59.8x84.8x44',
      capacity: '7 кг',
      energyClass: 'A+++',
      color: 'Белый',
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
