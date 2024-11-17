"use client";

import { Arrows, Search } from "@/app/icons";

export function Buttons() {
  return (
    <div className="flex items-ceter justify-center gap-6 w-full">
      <div className="bg-zinc-100 rounded-[4px] px-2 py-2 flex items-center justify-between w-[250px]">
        <input
          type="search"
          className="bg-transparent w-full text-sm focus:outline-none"
          placeholder="Search..."
        />
        <Search />
      </div>

      <button
        onClick={() => console.log("sort")}
        className="flex items-center gap-2 bg-zinc-100 px-4 py-1 rounded-[4px]"
      >
        Sort
        <Arrows />
      </button>
    </div>
  );
}
