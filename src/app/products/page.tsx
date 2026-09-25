import ProductGrid from "@/components/ProductGrid";
import { getProducts } from "@/lib/api";

const ProductsPage = async () => {
  const products = await getProducts();
 

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      {/* Page Header */}
      <section className="mb-10">
        <h1 className="text-4xl font-bold">
          All Products
        </h1>

        <p className="mt-3 text-gray-600">
          Explore all of our available products.
        </p>
      </section>

      {/* All Products */}
      <ProductGrid products={products} />
    </main>
  );
};

export default ProductsPage;