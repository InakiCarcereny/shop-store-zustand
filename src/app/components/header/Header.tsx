"use client";

import { Shop } from "@/app/icons";
import { useModalStore } from "@/app/store/modal-store";
import { CartModal } from "../cart-modal";
import { useCartStore } from "@/app/store/cart-store";

export function Header() {
  const { isOpen, openModal } = useModalStore();

  const { cartItems } = useCartStore();

  return (
    <>
      <header className="flex items-center justify-between w-full">
        <h1 className="text-3xl font-semibold flex flex-col text-wrap">
          Welcome to our{" "}
          <span className="text-blue-400 text-4xl pl-6 md:text-6xl md:pl-12 font-semibold">
            Shop Cart
          </span>
        </h1>

        <button
          onClick={() => openModal("cart")}
          className="bg-cyan-100/30 rounded-full px-3 py-3 flex items-center justify-center relative"
        >
          <span>
            <Shop className="w-6 h-6 text-blue-400" />
          </span>
          <span className="absolute bottom-8 left-12 font-semibold text-base">
            {cartItems.length}
          </span>
        </button>
      </header>

      {isOpen && <CartModal />}
    </>
  );
}
