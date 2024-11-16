"use client";

import { useStore } from "@/app/store/counter-store";

export function Counter() {
  const { count, increaseCounter, decreaseCounter } = useStore(
    (state) => state
  );

  return (
    <div className="flex flex-col max-w-[200px]">
      <span className="font-semibold text-2xl">{count}</span>

      <button
        className="rounded-full px-2 py-2 bg-zinc-900 w-[30px]"
        onClick={increaseCounter}
      >
        +
      </button>
      <button
        onClick={decreaseCounter}
        className="rounded-full px-2 py-2 bg-zinc-900 w-[30px]"
      >
        -
      </button>
    </div>
  );
}
