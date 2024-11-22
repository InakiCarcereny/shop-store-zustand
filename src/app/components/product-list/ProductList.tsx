"use client";

import { useEffect } from "react";
import { Loading } from "../loading";
import { useFetch } from "@/app/hooks/useFetch";
import { ProductCard } from "../product-card";

interface ProductListProps {
  query: string;
}

export function ProductList({ query }: ProductListProps) {
  const { products, getProducts, isLoading } = useFetch();

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    getProducts();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 items-center">
      {filteredProducts.slice(0, 35).map((product) => (
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
