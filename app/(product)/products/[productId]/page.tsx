import { Product } from "@/types/common";
import Image from "next/image";
import React, { useState } from "react";

const ProductPage = () => {
  return (
    <>
      <section className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
        <div className="relative w-full min-h-[400px] aspect-square">
          <div className=""></div>
          <Image
            src={"https://picsum.photos/1280/720"}
            alt="Product thumb"
            fill
          />
        </div>
        <div className=""></div>
      </section>
    </>
  );
};

const product: Product = {
  brand: {
    id: 1,
    name: "FashionCo",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, sint!",
    logo: "https://example.com/fashionco-logo.png",
  },
  images: ["https://picsum.photos/720/720", "https://picsum.photos/720/720"],
  title: "Classic Denim Jacket",
  rating: 4.5,
  price: 59.99,
  sale: 10,
  quantity: {
    id: 1,
    size: {
      id: 2,
      title: "Medium",
    },
    quantity: 50,
  },
  sleeveLength: {
    id: 3,
    title: "Long Sleeve",
  },
  type: {
    id: 4,
    title: "Outerwear",
  },
  pattern: {
    id: 5,
    title: "Solid",
  },
  color: {
    id: 6,
    title: "Blue",
  },
  length: {
    id: 7,
    title: "Hip Length",
  },
  closure: {
    id: 8,
    title: "Button Closure",
  },
  pocketsCount: 4,
  occasion: {
    id: 9,
    title: "Casual",
  },
  fabric: {
    id: 10,
    title: "Denim",
  },
  hemline: {
    id: 11,
    title: "Straight",
  },
};

export default ProductPage;
