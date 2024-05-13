import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Input } from "./ui/input";

type Props = {};

const Footer = (props: Props) => {
  const categories = [
    {
      title: "Women",
      items: [
        { title: "All Women", link: "/women" },
        { title: "Shirts", link: "/women/shirts" },
        { title: "Skirts", link: "/women/skirts" },
        { title: "T-Shirts", link: "/women/t-shirts" },
        { title: "Tops", link: "/women/tops" },
        { title: "Jackets", link: "/women/jackets" },
      ],
    },
    {
      title: "Men",
      items: [
        { title: "All Men", link: "/men" },
        { title: "Shirts", link: "/men/shirts" },
        { title: "Skirts", link: "/men/skirts" },
        { title: "T-Shirts", link: "/men/t-shirts" },
        { title: "Tops", link: "/men/tops" },
        { title: "Jackets", link: "/men/jackets" },
      ],
    },
    {
      title: "Kids",
      items: [
        { title: "All Kids", link: "/kids" },
        { title: "Shirts", link: "/kids/shirts" },
        { title: "Skirts", link: "/kids/skirts" },
        { title: "T-Shirts", link: "/kids/t-shirts" },
        { title: "Tops", link: "/kids/tops" },
        { title: "Jackets", link: "/kids/jackets" },
      ],
    },
  ];
  return (
    <footer className="pt-9 pb-[80px] px-[50px] bg-black">
      <div className="flex gap-2 mb-8">
        <Image src={"/logo-white.svg"} width={40} height={40} alt="Logo" />
        <Image
          src={"/logo-title.svg"}
          width={100}
          height={100}
          alt="Logo title"
        />
      </div>
      <div className="flex w-10/12 m-auto gap-28">
        <div className="flex-1">
          <div className="flex text-white m-auto justify-between">
            {categories.map((cate) => (
              <ul className="" key={cate.title}>
                <li className="font-bold text-lg mb-2">{cate.title}</li>
                {cate.items.map((item) => (
                  <li className="font-light text-sm mb-1" key={item.title}>
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-2 text-white">
          <p className="text-lg font-bold">Stay in touch</p>
          <p className="max-w-xs text-sm">
            Stay in touch to get special offers, free giveaways and once in a
            lifetime deals
          </p>
          <div className="flex items-center border-white border px-2 rounded-sm">
            <Mail />
            <Input
              className="bg-transparent border-none placeholder:text-white"
              placeholder="Enter your email"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
