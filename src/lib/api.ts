import { IProduct } from "@/types/product";

const API_URL = "https://dummyjson.com/products";

export async function getProducts(): Promise<IProduct[]> {
  const res = await fetch(API_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();

  return data.products;
}

export async function getProduct(id: string): Promise<IProduct> {
  const res = await fetch(`${API_URL}/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
}