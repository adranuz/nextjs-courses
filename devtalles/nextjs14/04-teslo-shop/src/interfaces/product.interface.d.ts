
export interface Product {
  id: string;
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: ProductSize[];
  slug: string;
  tags: string[];
  title: string;
  // todo: type: ProductType;
  gender: ProductGender;
}

export type ProductGender = 'men'|'women'|'kid'|'unisex'
export type ProductSize = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL';
export type ProductType = 'shirts'|'pants'|'hoodies'|'hats';


// cart comming from the store
export interface CartProduct {
  id: string;
  slug: string;
  title: string;
  price: number;
  quantity: number;
  size: ProductSize;
  image: string;
}