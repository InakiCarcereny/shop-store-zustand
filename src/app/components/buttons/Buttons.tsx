"use client";

import { Arrows, Search } from "@/app/icons";
import { useForm } from "react-hook-form";
import { getProduct } from "@/app/services";
import { useState } from "react";
import { Product } from "@/app/models";

interface FormData {
  search: string;
}

export function Buttons() {
  const [product, setProduct] = useState<Product | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit(async (data) => {
    const res = await getProduct(data.search);
    setProduct(res.data);
  });

  console.log(product);

  return (
    <div className="flex items-ceter justify-center flex-col sm:flex-row gap-6 w-full">
      <form
        onSubmit={onSubmit}
        className="bg-zinc-100 rounded-[4px] px-2 py-2 flex items-center justify-between w-[250px]"
      >
        <input
          type="search"
          className="bg-transparent w-full text-sm focus:outline-none"
          placeholder="Search..."
          {...register("search")}
        />
        <Search />
      </form>

      <button
        onClick={() => console.log("sort")}
        className="flex items-center justify-center gap-2 bg-zinc-100 px-4 py-1 rounded-[4px] w-[100px]"
      >
        Sort
        <Arrows />
      </button>
    </div>
  );
}
