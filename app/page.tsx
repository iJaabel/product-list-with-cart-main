import { ProductCard } from "./components/product-card";
import { Cart } from "./components/cart";
import { ThemeToggle } from "./components/theme-toggle";
import { desserts } from "./data/desserts";

export default function Home() {
  return (
    <div className="min-h-screen bg-[hsl(20,50%,98%)] dark:bg-[hsl(14,65%,9%)]">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm dark:border-[hsl(14,25%,12%)] dark:bg-black/80">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <h1 className="text-2xl font-bold text-[hsl(14,65%,9%)] dark:text-white">
            Desserts
          </h1>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Cart variant="mobile" />
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="flex-1">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {desserts.map((dessert) => (
                <ProductCard key={dessert.name} {...dessert} />
              ))}
            </div>
          </div>
          <div className="hidden lg:block lg:w-[400px]">
            <div className="sticky top-24">
              <Cart variant="desktop" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}