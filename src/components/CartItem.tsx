"use client";

import Image from "next/image";

import { useShop } from "@/hooks/useShop";
import { ICartItem } from "@/types/product";

interface CartItemProps {
  item: ICartItem;
}

const CartItem = ({ item }: CartItemProps) => {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useShop();

  const totalPrice = item.price * item.quantity;

  return (
    <div className="group flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-3 shadow-sm transition-all duration-200 hover:border-gray-300 hover:shadow-md sm:gap-5 sm:p-4">
      {/* Product Image */}
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-gray-50 sm:h-24 sm:w-24">
        <Image
          src={item.thumbnail}
          alt={item.title}
          fill
          className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="min-w-0 flex-1">
        <h2 className="line-clamp-2 text-sm font-semibold leading-5 text-gray-800 transition-colors group-hover:text-orange-500 sm:text-base">
          {item.title}
        </h2>

        <p className="mt-1 text-sm font-medium text-orange-500">
          ${item.price.toFixed(2)}
        </p>

        {/* Quantity */}
        <div className="mt-3 inline-flex items-center overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
          <button
            onClick={() => decreaseQuantity(item.id)}
            className="flex h-8 w-8 items-center justify-center text-base font-semibold text-gray-600 transition hover:bg-gray-200 hover:text-gray-900"
          >
            −
          </button>

          <span className="flex h-8 min-w-9 items-center justify-center border-x border-gray-200 bg-white text-sm font-semibold text-gray-800">
            {item.quantity}
          </span>

          <button
            onClick={() => increaseQuantity(item.id)}
            className="flex h-8 w-8 items-center justify-center text-base font-semibold text-gray-600 transition hover:bg-gray-200 hover:text-gray-900"
          >
            +
          </button>
        </div>
      </div>

      {/* Total */}
      <div className="flex shrink-0 flex-col items-end">
        <p className="text-sm font-bold text-gray-900 sm:text-base">
          ${totalPrice.toFixed(2)}
        </p>

        <button
          onClick={() => removeFromCart(item.id)}
          className="mt-2 rounded-md px-2 py-1 text-[11px] font-medium text-red-500 transition hover:bg-red-50 hover:text-red-600 sm:text-xs"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;