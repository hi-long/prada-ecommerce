import { Heart, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

type Props = {};

const Header = (props: Props) => {
  const headerItems = [
    {
      title: "Men",
      link: "/men",
    },
    {
      title: "Women",
      link: "/women",
    },
    {
      title: "Kids",
      link: "/kids",
    },
  ];
  return (
    <nav className="fixed w-full h-[80px] flex items-center py-4 px-[50px] bg-white drop-shadow-lg z-50">
      <div className="flex-1 flex items-center">
        <Link href={"/"}>
          <Image src={"/logo.svg"} height={48} width={57} alt="Logo" />
        </Link>
        <ul className="flex-1 flex gap-[40px] justify-center">
          {headerItems.map((item) => (
            <Link key={item.title} href={item.link}>
              {item.title}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex-1 flex gap-[60px]">
        <div className="flex-1 flex bg-gray-50 rounded-sm">
          <Input
            className="pr-1 outline-none border-none bg-gray-50"
            placeholder="Search here"
          />
          <Button className="pl-0" variant={"ghost"}>
            <Search />
          </Button>
        </div>
        <div className="flex items-center gap-8">
          <Link href={"/favorites"}>
            <Button className="p-0" variant={"ghost"}>
              <Heart />
            </Button>
          </Link>
          <Link href={"/favorites"}>
            <Button className="p-0" variant={"ghost"}>
              <ShoppingCart />
            </Button>
          </Link>
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  );
};

export default Header;
