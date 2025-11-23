export type ProductCategory = 'Refrigerators' | 'TVs' | 'Washing Machines';

export type ProductBrand = 'Samsung' | 'LG' | 'Bosch';

export interface ProductSpecifications {
  dimensions: string; // "WxHxD cm"
  volume?: string; // For refrigerators
  diagonal?: string; // For TVs
  capacity?: string; // For washing machines
  energyClass: string;
  color: string;
}

export interface Product {
  id: string;
  name: string;
  brand: ProductBrand;
  category: ProductCategory;
  price: number; // Price in rubles
  inStock: boolean;
  modelPath: string; // Path to GLB file
  usdzPath: string; // Path to USDZ file for iOS
  posterPath: string; // Path to poster image
  specifications: ProductSpecifications;
  articleNumber: string;
}
