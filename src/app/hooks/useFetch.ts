import { useState } from "react";
import { Product } from "../models";
import { productsAdapter } from "../adapters";

export function useFetch() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | unknown | null>(null);

  const getProducts = async () => {
    setIsLoading(true);
    try {
      const response = await productsAdapter();
      setProducts(response);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { products, getProducts, isLoading, error };
}
