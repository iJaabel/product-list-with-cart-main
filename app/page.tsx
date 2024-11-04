import { Cart } from "./components/cart";
import { ProductCard } from "./components/product-card";
import { desserts } from "./data/desserts";

export default function Home() {
  return (
    <div className="min-h-screen bg-[hsl(20,50%,98%)]">
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-sm lg:hidden">
        <div className="container flex h-16 items-center justify-between">
          <h1 className="text-2xl font-bold text-[hsl(14,65%,9%)]">
            Premium Desserts
          </h1>
          <div className="lg:hidden">
            <Cart />
          </div>
        </div>
      </header>
      <div className="container flex flex-col lg:flex-row lg:gap-8 lg:py-8">
        <main className="flex-1 py-8 lg:py-0">
          <h1 className="mb-8 hidden text-2xl font-bold text-[hsl(14,65%,9%)] lg:block">
            Premium Desserts
          </h1>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {desserts.map((dessert) => (
              <ProductCard key={dessert.name} dessert={dessert} />
            ))}
          </div>
        </main>
        <aside className="hidden lg:block lg:w-[400px]">
          <div className="sticky top-8">
            <Cart variant="desktop" />
          </div>
        </aside>
      </div>
    </div>
  );
}