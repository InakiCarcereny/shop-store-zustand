"use client";

import { Search } from "@/app/icons";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export function Buttons() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex items-ceter justify-center sm:flex-row gap-6 w-full">
      <div className="bg-zinc-100 rounded-[4px] px-2 py-2 flex items-center justify-between w-full max-w-[450px]">
        <input
          type="search"
          className="bg-transparent w-full text-sm focus:outline-none"
          placeholder="Search..."
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchParams.get("query")?.toString()}
        />
        <Search />
      </div>
    </div>
  );
}
