"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useCart } from "../providers/cart-provider";
import { Dessert } from "../data/desserts";
import { ShoppingCart, Minus, Plus } from "lucide-react";
import { useState } from "react";

export function ProductCard({ dessert }: { dessert: Dessert }) {
  const { state, dispatch } = useCart();
  const cartItem = state.items.find((item) => item.name === dessert.name);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch({ type: "ADD_ITEM", payload: dessert });
    }
    setQuantity(1);
  };

  return (
    <Card className="group relative overflow-hidden bg-white">
      <CardContent className="p-0">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={dessert.image.desktop}
            alt={dessert.name}
            fill
            className="object-cover transition-all duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6">
          <p className="text-sm text-[hsl(14,25%,72%)]">{dessert.category}</p>
          <h3 className="mt-1 text-lg font-semibold text-[hsl(14,65%,9%)]">
            {dessert.name}
          </h3>
          <p className="mt-2 font-bold text-[hsl(14,86%,42%)]">
            ${dessert.price.toFixed(2)}
          </p>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        {cartItem ? (
          <div className="flex w-full items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() =>
                dispatch({
                  type: "UPDATE_QUANTITY",
                  payload: {
                    name: dessert.name,
                    quantity: Math.max(0, cartItem.quantity - 1),
                  },
                })
              }
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-8 text-center">{cartItem.quantity}</span>
            <Button
              variant="outline"
              size="icon"
              onClick={() =>
                dispatch({
                  type: "UPDATE_QUANTITY",
                  payload: {
                    name: dessert.name,
                    quantity: cartItem.quantity + 1,
                  },
                })
              }
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <div className="flex w-full gap-2">
            <div className="flex items-center gap-2 rounded-md border p-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center">{quantity}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <Button
              className="flex-1 bg-[hsl(14,86%,42%)] text-white hover:bg-[hsl(14,86%,32%)]"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}