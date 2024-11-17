import { useCartStore } from "@/app/store/cart-store";

/* eslint-disable @next/next/no-img-element */
interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
}

export function ProductCard({
  id,
  title,
  price,
  description,
  images,
}: ProductCardProps) {
  const { addItem, cartItems, removeItem } = useCartStore();

  const isInCart = cartItems.some((item) => item.id === id);

  return (
    <li className="flex flex-col gap-4 bg-gradient-to-b from-zinc-200 to-white w-[250px] min-h-[300px] rounded-[6px] px-4 py-2">
      <header className="text-center w-full">
        <h1 className="text-sm font-semibold truncate">{title}</h1>
      </header>

      <img
        src={images[0]}
        alt="product image"
        className="w-full h-[150px] rounded-[4px]"
      />

      <footer className="flex flex-col gap-4 w-full">
        <div className="flex flex-col w-full gap-1">
          <p className="text-xs font-medium text-zinc-400 truncate">
            {description}
          </p>
          <h3 className="text-xl font-semibold">${price}</h3>
        </div>
        {isInCart ? (
          <button
            onClick={() =>
              removeItem({ id, title, price, description, images })
            }
            className="bg-red-400 rounded-[4px] px-2 py-2 flex items-center justify-center"
          >
            <span className="text-sm font-semibold text-white">
              Remove from cart
            </span>
          </button>
        ) : (
          <button
            onClick={() => addItem({ id, title, price, description, images })}
            className="bg-blue-400 rounded-[4px] px-2 py-2 flex items-center justify-center"
          >
            <span className="text-sm font-semibold text-white">
              Add to cart
            </span>
          </button>
        )}
      </footer>
    </li>
  );
}
