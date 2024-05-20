import ProductItem from "@/components/ProductItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";

type Props = {};

const Trending = (props: Props) => {
  return (
    <>
      <h3 className="font-bold text-3xl mb-6">Trending now</h3>
      <Carousel className="w-full" opts={{ loop: false }}>
        <CarouselContent>
          {products.map((prod, index) => (
            <CarouselItem key={index} className="basis-1/4">
              <ProductItem {...prod} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
};

const products = [
  {
    id: 1,
    title: "Classic Denim Jacket",
    description:
      "A timeless denim jacket for casual wear. Perfect for layering over your favorite tees or dresses. Features button closures and front pockets.",
    brand: "Levi's",
    price: 59.99,
    discount: 10,
    rating: 4.5,
    ratersCount: 120,
    imageSrc: "https://picsum.photos/400/300",
  },
  {
    id: 2,
    title: "Striped Cotton T-Shirt",
    description:
      "Soft and breathable striped tee. Made from 100% organic cotton. Classic crew neck design. Versatile for everyday outfits.",
    brand: "H&M",
    price: 19.99,
    discount: 0,
    rating: 4.2,
    ratersCount: 85,
    imageSrc: "https://picsum.photos/400/300",
  },
  {
    id: 3,
    title: "Flowy Floral Dress",
    description:
      "Elegant floral dress for summer occasions. Lightweight and flowy silhouette. V-neckline and adjustable spaghetti straps. Pair with sandals or heels.",
    brand: "Zara",
    price: 79.95,
    discount: 15,
    rating: 4.8,
    ratersCount: 200,
    imageSrc: "https://picsum.photos/400/300",
  },
  {
    id: 4,
    title: "Athletic Joggers",
    description:
      "Comfortable joggers for workouts or lounging. Moisture-wicking fabric keeps you cool. Elastic waistband and tapered fit. Side pockets for convenience.",
    brand: "Nike",
    price: 45.0,
    discount: 5,
    rating: 4.0,
    ratersCount: 65,
    imageSrc: "https://picsum.photos/400/300",
  },
  {
    id: 5,
    title: "Canvas Sneakers",
    description:
      "Casual sneakers for everyday wear. Durable canvas upper with rubber sole. Lace-up closure. Available in various colors.",
    brand: "Converse",
    price: 39.99,
    discount: 0,
    rating: 4.6,
    ratersCount: 150,
    imageSrc: "https://picsum.photos/400/300",
  },
];

export default Trending;
