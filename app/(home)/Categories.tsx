import Image from "next/image";
import React from "react";

type Props = {
  categories: {
    id: number;
    name: string;
    imageSrc: string;
  }[];
};

const Categories = ({ categories }: Props) => {
  return (
    <>
      <h3 className="font-bold text-3xl mb-6">Shop by Categories</h3>
      <div className="w-full h-[300px] grid grid-cols-4 gap-8">
        {categories.map((cate) => (
          <div
            className="relative rounded-xl overflow-hidden flex items-center justify-center"
            key={cate.id}
          >
            <p className="relative z-50 text-white font-semibold text-lg">
              {cate.name}
            </p>
            <Image className="z-10" src={cate.imageSrc} fill alt={cate.name} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Categories;
