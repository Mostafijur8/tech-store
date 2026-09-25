"use client";

import { IProduct } from "@/types/product";
import { useShop } from "@/hooks/useShop";

interface AddToCartButtonProps {
  product: IProduct;
}

const AddToCartButton = ({
  product,
}: AddToCartButtonProps) => {
  const {
    addToCart,
    removeFromCart,
    isInCart,
  } = useShop();

  const inCart = isInCart(product.id);

  const handleCart = () => {
    if (inCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };

  return (
    <button
      onClick={handleCart}
      className={`mt-6 w-full rounded-sm px-6 py-3 font-semibold transition sm:w-auto ${
        inCart
          ? "bg-gray-800 text-white hover:bg-gray-900"
          : "bg-orange-500 text-white hover:bg-orange-600"
      }`}
    >
      {inCart ? "✓ Remove from Cart" : "Add to Cart"}
    </button>
  );
};

export default AddToCartButton;