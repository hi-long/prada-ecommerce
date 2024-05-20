import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Props = {
  brandId: number;
  brand: string;
  brandImg: string;
  price: number;
  imageSrc: string;
};

const DealItem = ({ brandId, brand, brandImg, price, imageSrc }: Props) => {
  return (
    <Link href={`/products?brand=${brand}`} className="w-full">
      <Card className="rounded-lg overflow-hidden">
        <CardHeader className="p-0 mb-4">
          <CardTitle>
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={imageSrc}
                fill
                objectPosition="relative"
                alt={"Deal thumbnail"}
              />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="px-3 text-center">
          <Image
            className="rounded-lg m-auto mb-2"
            src={brandImg}
            alt="Brand logo"
            width={160}
            height={60}
          />
          <p className="text-2xl font-bold">{brand}</p>
          <p className="text-base font-medium">
            Under <span className="text-green-600">${price}</span>
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default DealItem;
