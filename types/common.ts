type Brand = {
  id: number;
  name: string;
  description: string;
  logo: string;
};

type Buyer = {
  id: number;
  name: string;
};

type Review = {
  buyer: Buyer;
  rating: number;
  content: string;
  date: Date;
};

type Size = {
  id: number;
  title: string;
};

type SizeQuantity = {
  id: number;
  size: Size;
  quantity: number;
};

type SleeveLength = {
  id: number;
  title: string;
};

type ProductType = {
  id: number;
  title: string;
};

type ProductLength = {
  id: number;
  title: string;
};

type Pattern = {
  id: number;
  title: string;
};

type Closure = {
  id: number;
  title: string;
};

type Color = {
  id: number;
  title: string;
};

type Fabric = {
  id: number;
  title: string;
};

type Hemline = {
  id: number;
  title: string;
};

type Occasion = {
  id: number;
  title: string;
};

type Product = {
  brand: Brand;
  images: string[];
  title: string;
  rating: number;
  price: number;
  sale: number;
  quantity: SizeQuantity;
  sleeveLength: SleeveLength;
  type: ProductType;
  pattern: Pattern;
  color: Color;
  length: ProductLength;
  closure: Closure;
  pocketsCount: number;
  occasion: Occasion;
  fabric: Fabric;
  hemline: Hemline;
};

export type { Brand, Product, Buyer, Review };
