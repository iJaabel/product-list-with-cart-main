"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "../providers/cart-provider";
import { ShoppingCart, Plus, Minus, X, Leaf } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Card } from "@/components/ui/card";

interface CartProps {
  variant?: "mobile" | "desktop";
}

function CartContent({ onClose }: { onClose?: () => void }) {
  const { state, dispatch } = useCart();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleConfirmOrder = () => {
    setShowConfirmation(true);
  };

  const handleStartNewOrder = () => {
    setShowConfirmation(false);
    dispatch({ type: "RESET" });
    onClose?.();
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
  };

  return (
    <>
      <ScrollArea className="h-[calc(100vh-20rem)] pr-4 lg:h-[calc(100vh-24rem)]">
        {state.items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-8">
            <ShoppingCart className="h-12 w-12 text-[hsl(14,25%,72%)]" />
            <p className="mt-4 text-center text-sm text-[hsl(14,25%,72%)]">
              Your added items will appear here
            </p>
          </div>
        ) : (
          state.items.map((item) => (
            <div key={item.name} className="space-y-4 py-4">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-lg">
                  <Image
                    src={item.image.thumbnail}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-[hsl(14,65%,9%)] dark:text-white">
                    {item.name}
                  </h4>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-[hsl(14,25%,72%)]">
                      {item.quantity}x
                    </span>
                    <span className="text-sm text-[hsl(14,25%,72%)]">
                      @ ${item.price.toFixed(2)}
                    </span>
                    <span className="font-bold text-[hsl(14,86%,42%)]">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() =>
                    dispatch({ type: "REMOVE_ITEM", payload: item.name })
                  }
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() =>
                    dispatch({
                      type: "UPDATE_QUANTITY",
                      payload: {
                        name: item.name,
                        quantity: Math.max(0, item.quantity - 1),
                      },
                    })
                  }
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center">{item.quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() =>
                    dispatch({
                      type: "UPDATE_QUANTITY",
                      payload: {
                        name: item.name,
                        quantity: item.quantity + 1,
                      },
                    })
                  }
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <Separator />
            </div>
          ))
        )}
      </ScrollArea>
      {state.items.length > 0 && (
        <div className="space-y-4 pt-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-[hsl(14,65%,9%)] dark:text-white">
              Order Total
            </span>
            <span className="text-lg font-bold text-[hsl(14,86%,42%)]">
              ${state.total.toFixed(2)}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[hsl(159,69%,38%)]">
            <Leaf className="h-4 w-4" />
            <span>This is a carbon-neutral delivery</span>
          </div>
          <Button
            className="w-full bg-[hsl(159,69%,38%)] text-white hover:bg-[hsl(159,69%,28%)]"
            onClick={handleConfirmOrder}
          >
            Confirm Order
          </Button>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => dispatch({ type: "RESET" })}
          >
            Start New Order
          </Button>
        </div>
      )}

      <Dialog open={showConfirmation} onOpenChange={handleCloseConfirmation}>
        <DialogContent className="sm:max-w-md dark:bg-[hsl(14,25%,12%)]">
          <DialogHeader>
            <DialogTitle className="text-center">Order Confirmed</DialogTitle>
            <DialogDescription className="text-center">
              We hope you enjoy your food!
            </DialogDescription>
          </DialogHeader>
          <div className="max-h-[60vh] space-y-4 overflow-auto pr-4">
            {state.items.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-lg">
                    <Image
                      src={item.image.thumbnail}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium dark:text-white">{item.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.quantity}x @ ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
                <p className="font-bold dark:text-white">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
            <Separator />
            <div className="flex items-center justify-between">
              <span className="font-medium dark:text-white">Order Total</span>
              <span className="text-lg font-bold dark:text-white">
                ${state.total.toFixed(2)}
              </span>
            </div>
            <Button
              className="w-full bg-[hsl(14,86%,42%)] text-white hover:bg-[hsl(14,86%,32%)]"
              onClick={handleStartNewOrder}
            >
              Start New Order
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export function Cart({ variant = "mobile" }: CartProps) {
  const { state } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  if (variant === "desktop") {
    return (
      <Card className="p-6 dark:bg-[hsl(14,25%,12%)]">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-[hsl(14,65%,9%)] dark:text-white">
            Your Cart ({state.items.reduce((acc, item) => acc + item.quantity, 0)})
          </h2>
        </div>
        <CartContent />
      </Card>
    );
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative h-10 w-10">
          <ShoppingCart className="h-5 w-5" />
          {state.items.length > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[hsl(14,86%,42%)] text-xs font-medium text-white">
              {state.items.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-[hsl(14,65%,9%)] dark:text-white">
            Your Cart ({state.items.reduce((acc, item) => acc + item.quantity, 0)})
          </SheetTitle>
        </SheetHeader>
        <CartContent onClose={() => setIsOpen(false)} />
      </SheetContent>
    </Sheet>
  );
}