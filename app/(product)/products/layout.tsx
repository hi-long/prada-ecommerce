import React from "react";

type Props = {
  children: React.ReactNode;
};

const ProductsLayout = ({ children }: Props) => {
  return <div className="pt-5 px-12">{children}</div>;
};

export default ProductsLayout;
