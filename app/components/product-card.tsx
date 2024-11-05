"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Minus, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useCart } from "../providers/cart-provider";

interface ProductCardProps {
  name: string;
  category: string;
  price: number;
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

export function ProductCard({ name, category, price, image }: ProductCardProps) {
  const [quantity, setQuantity] = useState(0);
  const { state, dispatch } = useCart();

  useEffect(() => {
    if (state.items.length === 0) {
      setQuantity(0);
    } else {
      const item = state.items.find((item) => item.name === name);
      setQuantity(item?.quantity || 0);
    }
  }, [state.items, name]);

  const handleAddToCart = () => {
    if (quantity === 0) {
      setQuantity(1);
      dispatch({
        type: "ADD_ITEM",
        payload: { name, category, price, image },
      });
    }
  };

  const updateQuantity = (newQuantity: number) => {
    setQuantity(newQuantity);
    if (newQuantity === 0) {
      dispatch({ type: "REMOVE_ITEM", payload: name });
    } else {
      dispatch({
        type: "UPDATE_QUANTITY",
        payload: { name, quantity: newQuantity },
      });
    }
  };

  return (
    <Card className="overflow-hidden dark:bg-[hsl(14,25%,12%)]">
      <div className="relative aspect-square">
        <Image
          src={image.thumbnail}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <div className="mb-2">
          <p className="text-sm text-[hsl(14,25%,72%)]">{category}</p>
          <h3 className="font-semibold text-[hsl(14,65%,9%)] dark:text-white">
            {name}
          </h3>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-[hsl(14,86%,42%)]">
            ${price.toFixed(2)}
          </span>
          <div className="flex items-center gap-2">
            {quantity === 0 ? (
              <div 
                onClick={handleAddToCart}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 cursor-pointer"
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </div>
            ) : (
              <div className="flex items-center rounded-md border border-input bg-background dark:bg-[hsl(14,25%,12%)]">
                <div
                  onClick={() => updateQuantity(Math.max(0, quantity - 1))}
                  className="inline-flex h-10 w-10 items-center justify-center border-r border-input cursor-pointer hover:bg-accent hover:text-accent-foreground"
                >
                  <Minus className="h-4 w-4" />
                </div>
                <span className="flex h-10 w-10 items-center justify-center">
                  {quantity}
                </span>
                <div
                  onClick={() => updateQuantity(quantity + 1)}
                  className="inline-flex h-10 w-10 items-center justify-center border-l border-input cursor-pointer hover:bg-accent hover:text-accent-foreground"
                >
                  <Plus className="h-4 w-4" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}