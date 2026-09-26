
"use client";

import Link from "next/link";
import { useShop } from "@/hooks/useShop";
import CartItem from "@/components/CartItem";

const CartPage = () => {
  const { cart } = useShop();

  // Total price
  const totalPrice = cart.reduce(
    (total, product) =>
      total + product.price * product.quantity,
    0
  );

  // Total quantity
  const totalQuantity = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  return (
    <main className="min-h-screen bg-[#f5f5f5] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-5">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Shopping Cart
          </h1>

          <p className="mt-1 text-xs text-gray-500 sm:text-sm">
            {totalQuantity} product
            {totalQuantity !== 1 ? "s" : ""} in your cart
          </p>
        </div>

        {/* Empty Cart */}
        {cart.length === 0 ? (
          <div className="rounded-xl border border-gray-200 bg-white px-5 py-14 text-center shadow-sm">
            <div className="text-4xl">🛒</div>

            <h2 className="mt-4 text-lg font-bold text-gray-900">
              Your cart is empty
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Add some products to your cart.
            </p>

            <Link
              href="/products"
              className="mt-5 inline-flex rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_300px]">

            {/* Cart List */}
            <div className="space-y-3">
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                />
              ))}
            </div>

            {/* Order Summary */}
            <div className="h-fit rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5 lg:sticky lg:top-20">

              <h2 className="text-base font-bold text-gray-900">
                Order Summary
              </h2>

              {/* Products */}
              <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                <span>Products</span>

                <span className="font-medium text-gray-900">
                  {totalQuantity}
                </span>
              </div>

              {/* Subtotal */}
              <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
                <span>Subtotal</span>

                <span className="font-medium text-gray-900">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>

              <div className="my-4 border-t border-gray-200" />

              {/* Total */}
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-900">
                  Total
                </span>

                <span className="text-xl font-bold text-orange-500">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>

              {/* Checkout */}
              <button className="mt-5 w-full rounded-lg bg-orange-500 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600 hover:shadow-md">
                Checkout
              </button>

              {/* Continue Shopping */}
              <Link
                href="/products"
                className="mt-2 block text-center text-xs font-medium text-gray-500 hover:text-orange-500"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default CartPage;

