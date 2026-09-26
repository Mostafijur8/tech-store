"use client";

import Link from "next/link";
import Image from "next/image";
import { useShop } from "@/hooks/useShop";
import WishlistCard from "@/components/WishlistCard";

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useShop();

  return (
    <main className="min-h-screen bg-[#f5f5f5] px-4 py-8 sm:px-6 lg:px-8">
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
              <WishlistCard
                key={product.id}
                product={product}
                onRemove={removeFromWishlist}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default WishlistPage;
