
import { notFound } from "next/navigation";
import ProductDetails from "@/components/ProductDetails";
import { getProduct } from "@/lib/api";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { id } = await params;

  let product;

  try {
    product = await getProduct(id);
  } catch {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f5f5f5] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <ProductDetails product={product} />
      </div>
    </main>
  );
};

export default ProductPage;
