"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoPlay from "embla-carousel-autoplay";
import Image from "next/image";

type Props = {};

const PromoCarousel = (props: Props) => {
  return (
    <Carousel
      className="w-full"
      opts={{ loop: true }}
      plugins={[
        AutoPlay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1 w-full h-[600px] relative">
              <Image src={"https://picsum.photos/1280/720"} alt="Promo" fill />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default PromoCarousel;
