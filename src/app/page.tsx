
import Link from "next/link";
import ProductGrid from "@/components/ProductGrid";
import { getProducts } from "@/lib/api";

const HomePage = async () => {
  const products = await getProducts();

  const featuredProducts = products.slice(0, 8);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Main Container */}
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="mb-12 rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-black px-6 py-10 text-white shadow-lg sm:px-10 sm:py-14 lg:px-14">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
            Smart Shopping
          </p>

          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Welcome to{" "}
            <span className="text-indigo-500">Tech Store</span>
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-300 sm:text-base">
            Find the best products for your needs. Explore our collection of
            quality tech products at great prices.
          </p>

          <Link
            href="/products"
            className="mt-6 inline-flex rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-indigo-500 hover:text-white"
          >
            Shop Now
          </Link>
        </section>

        {/* Featured Products */}
        <section>
          {/* Section Header */}
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-indigo-500">
                Our Collection
              </p>

              <h2 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
                Featured Products
              </h2>
            </div>

            <Link
              href="/products"
              className="shrink-0 rounded-lg bg-black px-3 py-2 text-xs font-semibold text-white transition-all duration-300 hover:bg-indigo-600 sm:px-4 sm:py-2.5 sm:text-sm"
            >
              View All Products
            </Link>
          </div>

          {/* Product Grid */}
          <ProductGrid products={featuredProducts} />
        </section>
      </div>
    </main>
  );
};

export default HomePage;

