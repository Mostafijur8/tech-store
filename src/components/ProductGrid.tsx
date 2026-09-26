
import { IProduct } from "@/types/product";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: IProduct[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-3 gap-1.5 sm:gap-4 lg:grid-cols-4 lg:gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
