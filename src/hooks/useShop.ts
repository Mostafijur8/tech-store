"use client";

import { useContext } from "react";
import { ShopContext } from "@/context/ShopProvider";

export const useShop = () => {
  const context = useContext(ShopContext);

  if (!context) {
    throw new Error(
      "useShop must be used inside ShopProvider"
    );
  }

  return context;
};