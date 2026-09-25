import Link from "next/link";
import ProductGrid from "@/components/ProductGrid";
import { getProducts } from "@/lib/api";

const HomePage = async () => {
  const products = await getProducts();

  const featuredProducts = products.slice(0, 6);

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      {/* Hero */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold">
          Welcome to Tech Store
        </h1>

        <p className="mt-3 text-gray-600">
          Find the best products for your needs.
        </p>
      </section>

      {/* Featured Products */}
      <section>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            Featured Products
          </h2>

          <Link
            href="/products"
            className="rounded-lg bg-black px-4 py-2 text-sm text-white"
          >
            View All Products
          </Link>
        </div>

        <ProductGrid products={featuredProducts} />
      </section>
    </main>
  );
};

export default HomePage;