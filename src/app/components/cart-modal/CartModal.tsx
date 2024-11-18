/* eslint-disable @next/next/no-img-element */
import { Cross, Trash } from "@/app/icons";
import { useCartStore } from "@/app/store/cart-store";
import { useModalStore } from "@/app/store/modal-store";

export function CartModal() {
  const { closeModal } = useModalStore();

  const { cartItems, clearCart, removeItem } = useCartStore();

  return (
    <aside className="fixed top-0 right-0 w-[400px] h-full bg-white flex flex-col gap-2 px-4 py-4 border-l border-zinc-400 z-50">
      <header className="flex items-center justify-between w-full">
        <h3 className="text-xl font-semibold">Cart</h3>

        <button onClick={closeModal}>
          <Cross className="w-8 h-8 text-zinc-400 hover:text-blue-400 duration-200" />
        </button>
      </header>

      <section className="flex flex-col gap-4 w-full">
        <ul className="flex flex-col gap-2 w-full">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between w-full px-2 py-2 hover:bg-zinc-100 rounded-[6px]"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.images[0]}
                  alt="product image"
                  className="w-14 h-14 rounded-[4px]"
                />
                <div className="flex flex-col">
                  <h4 className="text-sm font-semibold text-zinc-400">
                    {item.title}
                  </h4>
                  <p className="text-xl font-semibold">${item.price}</p>
                </div>
              </div>

              <button onClick={() => removeItem(item)}>
                <Trash className="w-6 h-6 text-red-400" />
              </button>
            </li>
          ))}
        </ul>

        <span className="font-semibold text-base whitespace-nowrap">
          Total: ${cartItems.reduce((acc, item) => acc + item.price, 0)}
        </span>

        {cartItems.length > 0 && (
          <button
            className="bg-blue-400 rounded-[4px] px-2 py-2 flex items-center justify-center text-white font-semibold"
            onClick={clearCart}
          >
            Clear cart
          </button>
        )}
      </section>
    </aside>
  );
}
