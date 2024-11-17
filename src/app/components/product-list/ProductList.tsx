"use client";

import { useEffect } from "react";
import { Loading } from "../loading";
import { useFetch } from "@/app/hooks/useFetch";
import { ProductCard } from "../product-card";

export function ProductList() {
  const { products, getProducts, isLoading } = useFetch();

  // const sortProducts = () => {
  //   products.sort((a, b) => b.price - a.price);
  // }

  useEffect(() => {
    getProducts();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 items-center">
      {products.slice(0, 45).map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          images={product.images}
        />
      ))}
    </ul>
  );
}
