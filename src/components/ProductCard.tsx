import Image from "next/image";
import Link from "next/link";
import { IProduct } from "@/types/product";

interface ProductCardProps {
  product: IProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group overflow-hidden rounded-sm border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* Product Image */}
      <div className="relative h-32 w-full overflow-hidden bg-gray-50 sm:h-36 md:h-40 lg:h-44">
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="p-2 sm:p-3">
        
        {/* Category */}
        <p className="mb-0.5 text-[9px] font-medium uppercase tracking-wide text-gray-400 sm:text-[10px]">
          {product.category}
        </p>

        {/* Title */}
        <h2 className="line-clamp-2 min-h-[28px] text-xs font-medium leading-4 text-gray-800 transition-colors group-hover:text-orange-500 sm:min-h-[32px] sm:text-sm">
          {product.title}
        </h2>

        {/* Price */}
        <p className="mt-1 text-base font-semibold text-orange-500 sm:text-lg">
          ${product.price}
        </p>

        {/* Rating & Stock */}
        <div className="mt-0.5 flex items-center gap-1.5 text-[9px] text-gray-500 sm:text-[10px]">
          <span>⭐ {product.rating}</span>

          <span className="text-gray-300">|</span>

          <span>{product.stock} available</span>
        </div>

        {/* View Details */}
        <Link
          href={`/products/${product.id}`}
          className="mt-2 inline-flex w-full items-center justify-center rounded-sm border border-orange-500 px-2 py-1.5 text-[10px] font-semibold text-orange-500 transition-all duration-300 hover:bg-orange-500 hover:text-white sm:text-xs"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;