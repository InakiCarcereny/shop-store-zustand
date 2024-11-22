import { Buttons } from "../buttons";
import { ProductList } from "../product-list";

interface MainContentProps {
  query: string;
}

export function MainContent({ query }: MainContentProps) {
  return (
    <main className="mx-auto max-w-[1500px] flex-1 flex flex-col gap-6">
      <Buttons />
      <ProductList query={query} />
    </main>
  );
}
