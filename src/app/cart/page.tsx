"use client";

import Image from "next/image";
import Link from "next/link";
import { useShop } from "@/hooks/useShop";

const CartPage = () => {
  const { cart, removeFromCart } = useShop();

  const totalPrice = cart.reduce(
    (total, product) => total + product.price,
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
            {cart.length} product
            {cart.length !== 1 ? "s" : ""} in your cart
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
              {cart.map((product) => (
                <div
                  key={product.id}
                  className="group flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition hover:border-gray-300 hover:shadow-md sm:gap-4 sm:p-4"
                >
                  {/* Product Image */}
                  <Link
                    href={`/products/${product.id}`}
                    className="shrink-0"
                  >
                    <div className="relative h-20 w-20 overflow-hidden rounded-lg bg-gray-50 sm:h-24 sm:w-24">
                      <Image
                        src={product.thumbnail}
                        alt={product.title}
                        fill
                        className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </Link>

                  {/* Product Info */}
                  <div className="min-w-0 flex-1">
                    <p className="mb-0.5 text-[9px] font-medium uppercase tracking-wide text-gray-400 sm:text-[10px]">
                      {product.category}
                    </p>

                    <Link href={`/products/${product.id}`}>
                      <h2 className="line-clamp-2 text-xs font-semibold leading-4 text-gray-800 transition-colors hover:text-orange-500 sm:text-sm">
                        {product.title}
                      </h2>
                    </Link>

                    <div className="mt-1 flex items-center gap-2 text-[10px] text-gray-500">
                      <span>⭐ {product.rating}</span>
                      <span className="text-gray-300">|</span>
                      <span>{product.stock} available</span>
                    </div>
                  </div>

                  {/* Price + Remove */}
                  <div className="flex shrink-0 flex-col items-end">
                    <p className="text-sm font-bold text-orange-500 sm:text-base">
                      ${product.price}
                    </p>

                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="mt-2 rounded-md px-2 py-1 text-[10px] font-medium text-red-500 transition hover:bg-red-50 sm:text-xs"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="h-fit rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5 lg:sticky lg:top-20">
              <h2 className="text-base font-bold text-gray-900">
                Order Summary
              </h2>

              <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                <span>Products</span>

                <span className="font-medium text-gray-900">
                  {cart.length}
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
                <span>Subtotal</span>

                <span className="font-medium text-gray-900">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>

              <div className="my-4 border-t border-gray-200" />

              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-900">
                  Total
                </span>

                <span className="text-xl font-bold text-orange-500">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>

              <button className="mt-5 w-full rounded-lg bg-orange-500 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600 hover:shadow-md">
                Checkout
              </button>

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