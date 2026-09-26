
"use client";

import { createContext, useState } from "react";
import { IProduct, ICartItem } from "@/types/product";

interface ShopContextType {
  wishlist: IProduct[];
  cart: ICartItem[];

  addToWishlist: (product: IProduct) => void;
  removeFromWishlist: (productId: number) => void;
  isWishlisted: (productId: number) => boolean;

  addToCart: (product: IProduct) => void;
  removeFromCart: (productId: number) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  isInCart: (productId: number) => boolean;

  moveToCart: (product: IProduct) => void;
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
  const [cart, setCart] = useState<ICartItem[]>([]);

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
      const existingProduct = prev.find(
        (item) => item.id === product.id
      );

      // Product already exists → increase quantity
      if (existingProduct) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      // New product → quantity 1
      return [
        ...prev,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prev) =>
      prev.filter((item) => item.id !== productId)
    );
  };

  const increaseQuantity = (productId: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (productId: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const isInCart = (productId: number) => {
    return cart.some((item) => item.id === productId);
  };

  // ---------------- Move Wishlist → Cart ----------------

  const moveToCart = (product: IProduct) => {
    // Add product to cart
    addToCart(product);

    // Remove product from wishlist
    removeFromWishlist(product.id);
  };

  return (
    <ShopContext.Provider
      value={{
        wishlist,
        cart,

        // Wishlist
        addToWishlist,
        removeFromWishlist,
        isWishlisted,

        // Cart
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        isInCart,

        // Wishlist → Cart
        moveToCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

