"use client";

import { IProduct } from "@/types/product";
import { useShop } from "@/hooks/useShop";

interface WishlistButtonProps {
  product: IProduct;
}

const WishlistButton = ({ product }: WishlistButtonProps) => {
  const {
    addToWishlist,
    removeFromWishlist,
    isWishlisted,
  } = useShop();

  const wishlisted = isWishlisted(product.id);

  const handleWishlist = () => {
    if (wishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <button
      onClick={handleWishlist}
      className={`mt-3 w-full rounded-sm border px-6 py-3 font-semibold transition sm:w-auto ${
        wishlisted
          ? "border-red-500 bg-red-500 text-white hover:bg-red-600"
          : "border-red-500 text-red-500 hover:bg-red-50"
      }`}
    >
      {wishlisted ? "♥ Remove from Wishlist" : "♡ Add to Wishlist"}
    </button>
  );
};

export default WishlistButton;