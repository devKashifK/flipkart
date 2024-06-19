import React from "react";
import { products } from "../helpers/products";
import Product from "./product";

export default function ProductWrapper() {
  return (
    <div className="flex gap-3 justify-center items-center flex-wrap w-full">
      {products.map((product) => (
        <Product
          img={product.image}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
}
