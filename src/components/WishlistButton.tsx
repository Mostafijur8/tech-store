
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
      type="button"
      onClick={handleWishlist}
      aria-label={
        wishlisted
          ? "Remove from wishlist"
          : "Add to wishlist"
      }
      className="absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 shadow-md transition-all duration-200 hover:scale-110"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill={wishlisted ? "#f97316" : "none"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.84 4.61C20.55 4.32 20.2 4.09 19.81 3.93C19.42 3.77 19 3.69 18.58 3.69C18.16 3.69 17.74 3.77 17.35 3.93C16.96 4.09 16.61 4.32 16.32 4.61L12 8.93L7.68 4.61C7.09 4.02 6.29 3.69 5.45 3.69C4.61 3.69 3.81 4.02 3.22 4.61C2.63 5.2 2.3 6 2.3 6.84C2.3 7.68 2.63 8.48 3.22 9.07L12 17.85L20.78 9.07C21.37 8.48 21.7 7.68 20.84 4.61Z"
          stroke={wishlisted ? "#f97316" : "#6b7280"}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default WishlistButton;

