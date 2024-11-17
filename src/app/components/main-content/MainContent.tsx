import { Buttons } from "../buttons";
import { ProductList } from "../product-list";

export function MainContent() {
  return (
    <main className="mx-auto max-w-[1500px] h-full flex flex-col gap-6">
      <Buttons />
      <ProductList />
    </main>
  );
}
