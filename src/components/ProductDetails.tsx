import { IProduct } from "@/types/product";
import WishlistButton from "@/components/WishlistButton";
import AddToCartButton from "./AddToCartButton";

interface ProductDetailsProps {
  product: IProduct;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <div className="rounded-sm bg-white p-4 shadow-sm sm:p-6 md:p-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Product Image */}
        <div className="flex min-h-[350px] items-center justify-center bg-gray-50">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="max-h-[350px] w-full object-contain p-6"
          />
        </div>

        {/* Product Info */}
        <div>
          <p className="text-sm uppercase text-gray-400">{product.category}</p>

          <h1 className="mt-2 text-2xl font-semibold text-gray-900 sm:text-3xl">
            {product.title}
          </h1>

          <p className="mt-3 text-sm text-gray-500">⭐ {product.rating}</p>

          <p className="mt-5 text-3xl font-bold text-orange-500">
            ${product.price}
          </p>

          <p className="mt-4 leading-7 text-gray-600">{product.description}</p>

          <div className="mt-6 space-y-2 text-sm text-gray-600">
            <p>
              <span className="font-semibold">Brand:</span> {product.brand}
            </p>

            <p>
              <span className="font-semibold">Stock:</span> {product.stock}
            </p>
          </div>

          <div className="mt-6 space-y-3">
            <AddToCartButton product={product} />

            <WishlistButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
