"use client";

import { createContext, useContext, useState } from "react";
import { IProduct } from "@/types/product";

interface ShopContextType {
  wishlist: IProduct[];
  cart: IProduct[];

  addToWishlist: (product: IProduct) => void;
  removeFromWishlist: (productId: number) => void;
  isWishlisted: (productId: number) => boolean;

  addToCart: (product: IProduct) => void;
  removeFromCart: (productId: number) => void;
  isInCart: (productId: number) => boolean;
}

export const ShopContext = createContext<
  ShopContextType | undefined
>(undefined);

export const ShopProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [wishlist, setWishlist] = useState<IProduct[]>([]);
  const [cart, setCart] = useState<IProduct[]>([]);

  // ---------------- Wishlist ----------------

  const addToWishlist = (product: IProduct) => {
    setWishlist((prev) => {
      if (prev.some((item) => item.id === product.id)) {
        return prev;
      }

      return [...prev, product];
    });
  };

  const removeFromWishlist = (productId: number) => {
    setWishlist((prev) =>
      prev.filter((item) => item.id !== productId)
    );
  };

  const isWishlisted = (productId: number) => {
    return wishlist.some((item) => item.id === productId);
  };

  // ---------------- Cart ----------------

  const addToCart = (product: IProduct) => {
    setCart((prev) => {
      if (prev.some((item) => item.id === product.id)) {
        return prev;
      }

      return [...prev, product];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prev) =>
      prev.filter((item) => item.id !== productId)
    );
  };

  const isInCart = (productId: number) => {
    return cart.some((item) => item.id === productId);
  };

  return (
    <ShopContext.Provider
      value={{
        wishlist,
        cart,

        addToWishlist,
        removeFromWishlist,
        isWishlisted,

        addToCart,
        removeFromCart,
        isInCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};