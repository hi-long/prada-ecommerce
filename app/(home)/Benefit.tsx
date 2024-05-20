import { CirclePercent, Flag, Headphones, Package, Truck } from "lucide-react";
import React from "react";

const benefitIconClassNames = "stroke-1 w-8 h-8";

const benefit = [
  {
    icon: <Flag className={benefitIconClassNames} />,
    title: "Locally Owned",
    description: "We have local business and sell best quality clothes",
  },
  {
    icon: <Truck className={benefitIconClassNames} />,
    title: "Fast Delivery",
    description: "We provide fast delivery to our customers",
  },
  {
    icon: <Package className={benefitIconClassNames} />,
    title: "Easy Return",
    description: "We provide easy return policy",
  },
  {
    icon: <Headphones className={benefitIconClassNames} />,
    title: "Online Support",
    description: "We give 24/7 online support",
  },
  {
    icon: <CirclePercent className={benefitIconClassNames} />,
    title: "Best Offers",
    description: "We give best offers to our customers",
  },
];

const Benefit = () => {
  return (
    <div className="grid grid-cols-[repeat(5,1fr)] gap-3">
      {benefit.map(({ icon, description, title }) => (
        <div
          key={title}
          className="flex-1 flex flex-col items-center p-4 bg-gray-100 rounded-lg"
        >
          {icon}
          <p className="font-bold text-lg">{title}</p>
          <p className="text-center">{description}</p>
        </div>
      ))}
    </div>
  );
};

export default Benefit;
