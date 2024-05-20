import DealItem from "@/components/DealItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";

type Props = {};

const Deals = (props: Props) => {
  return (
    <Carousel className="w-full" opts={{ loop: false }}>
      <CarouselContent>
        {clothingItems.map((deal) => (
          <CarouselItem key={deal.brandId} className="basis-1/3">
            <DealItem {...deal} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

const clothingItems = [
  {
    brandId: 1,
    brand: "Adidas",
    brandImg: "https://picsum.photos/160/60",
    price: 79.99,
    imageSrc: "https://picsum.photos/400/300",
  },
  {
    brandId: 2,
    brand: "Nike",
    brandImg: "https://picsum.photos/160/60",
    price: 109.95,
    imageSrc: "https://picsum.photos/400/300",
  },
  {
    brandId: 3,
    brand: "Puma",
    brandImg: "https://picsum.photos/160/60",
    price: 64.5,
    imageSrc: "https://picsum.photos/400/300",
  },
  {
    brandId: 4,
    brand: "Reebok",
    brandImg: "https://picsum.photos/160/60",
    price: 54.75,
    imageSrc: "https://picsum.photos/400/300",
  },
];

export default Deals;
