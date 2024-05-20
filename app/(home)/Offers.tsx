import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  offer: {
    offerImage: string;
    offerLink: string;
  };
};

const Offers = ({ offer }: Props) => {
  return (
    <Link
      className="block w-full aspect-[21/9] relative"
      href={offer.offerLink || "/"}
    >
      <Image fill src={offer.offerImage} alt="Offer" />
    </Link>
  );
};

export default Offers;
