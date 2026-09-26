import Image from "next/image";
import Link from "next/link";
import { IProduct } from "@/types/product";

interface WishlistCardProps {
  product: IProduct;
  onRemove: (id: number) => void;
}

const WishlistCard = ({
  product,
  onRemove,
}: WishlistCardProps) => {
  return (
    <div className="group overflow-hidden rounded-sm border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
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
          onClick={() => onRemove(product.id)}
          className="mt-2 w-full rounded-sm border border-red-500 px-3 py-2 text-xs font-semibold text-red-500 transition hover:bg-red-500 hover:text-white"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default WishlistCard;