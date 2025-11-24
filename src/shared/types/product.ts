export type ProductCategory = 'Холодильники' | 'Телевизоры' | 'Стиральные машины';

export type ProductBrand = 'Samsung' | 'LG' | 'Bosch';

export interface ProductSpecifications {
  dimensions: string; // "ШxВxГ см"
  volume?: string; // Для холодильников
  diagonal?: string; // Для телевизоров
  capacity?: string; // Для стиральных машин
  energyClass: string;
  color: string;
}

export interface Product {
  id: string;
  name: string;
  brand: ProductBrand;
  category: ProductCategory;
  price: number; // Цена в рублях
  inStock: boolean;
  modelPath: string; // Путь к GLB файлу
  usdzPath: string; // Путь к USDZ файлу для iOS
  posterPath: string; // Путь к изображению
  specifications: ProductSpecifications;
  articleNumber: string;
}
