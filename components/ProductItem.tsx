import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  id: number;
  title: string;
  description: string;
  brand: string;
  price: number;
  discount: number;
  rating: number;
  ratersCount: number;
  imageSrc: string;
};

const ProductItem = ({
  id,
  title,
  description,
  brand,
  discount,
  price,
  rating,
  ratersCount,
  imageSrc,
}: Props) => {
  return (
    <Link href={`/products/${id}`}>
      <Card className="rounded-lg overflow-hidden">
        <CardHeader className="p-0 pb-1">
          <CardTitle>
            <div className="relative w-full aspect-[4/3]">
              <Image src={imageSrc} fill alt={title} />
            </div>
            <h6 className="px-3 pt-2 font-bold text-xl">{title}</h6>
          </CardTitle>
        </CardHeader>
        <CardContent className="px-3 pb-1">
          <p className="text-sm gray">{brand}</p>
          <p className="line-clamp-2">{description}</p>
          <p>
            ${price}
            {discount !== 0 && (
              <>
                <span className="line-through text-xs ml-2 mr-1 gray">
                  ${Math.floor(price / (1 - discount / 100))}
                </span>
                <span className="text-xs text-green-600">
                  ({discount}% off)
                </span>
              </>
            )}
          </p>
        </CardContent>
        <CardFooter className="flex gap-2 px-3 pb-3">
          <div className="flex items-center">
            {Array.from({ length: Math.floor(rating) }).map((_, idx) => (
              <Star key={idx} fill="#848484" stroke="#848484" width={16} />
            ))}
            {Array.from({ length: 5 - Math.floor(rating) }).map((_, idx) => (
              <Star key={idx} stroke="#848484" width={16} />
            ))}
          </div>
          <div className="">
            <p className="text-sm gray">
              {rating} ({ratersCount})
            </p>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductItem;
