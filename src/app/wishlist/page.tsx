"use client";

import Link from "next/link";
import Image from "next/image";
import { useShop } from "@/hooks/useShop";

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useShop();

  return (
    <main className="min-h-screen bg-[#f5f5f5] px-4 py-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Wishlist</h1>

          <p className="mt-2 text-sm text-gray-500">
            {wishlist.length} product
            {wishlist.length !== 1 ? "s" : ""} in your wishlist.
          </p>
        </div>

        {/* Empty Wishlist */}
        {wishlist.length === 0 ? (
          <div className="rounded-sm bg-white px-6 py-16 text-center shadow-sm">
            <div className="text-5xl">♡</div>

            <h2 className="mt-4 text-xl font-semibold text-gray-900">
              Your wishlist is empty
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Add products you like to your wishlist.
            </p>

            <Link
              href="/products"
              className="mt-6 inline-block rounded-sm bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          /* Wishlist Products */
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {wishlist.map((product) => (
              <div
                key={product.id}
                className="group overflow-hidden rounded-sm border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Image */}
                <Link href={`/products/${product.id}`}>
                  <div className="relative h-36 overflow-hidden bg-gray-50 sm:h-44">
                    <Image
                      src={product.thumbnail}
                      alt={product.title}
                      fill
                      className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </Link>

                {/* Content */}
                <div className="p-3">
                  <p className="text-[10px] uppercase tracking-wide text-gray-400">
                    {product.category}
                  </p>

                  <Link href={`/products/${product.id}`}>
                    <h2 className="mt-1 line-clamp-2 min-h-[40px] text-sm font-medium text-gray-800 hover:text-orange-500">
                      {product.title}
                    </h2>
                  </Link>

                  <p className="mt-2 text-lg font-bold text-orange-500">
                    ${product.price}
                  </p>

                  <Link
                    href={`/products/${product.id}`}
                    className="mt-3 block w-full rounded-sm border border-gray-900 px-3 py-2 text-center text-xs font-semibold text-gray-900 transition hover:bg-gray-900 hover:text-white"
                  >
                    View Details
                  </Link>

                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="mt-2 w-full rounded-sm border border-red-500 px-3 py-2 text-xs font-semibold text-red-500 transition hover:bg-red-500 hover:text-white"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default WishlistPage;
