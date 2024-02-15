"use server";

import { IProduct } from "@/models/general";

export const getProducts = async (): Promise<IProduct[]> => {
  const file = await fetch(process.env.LOCAL_HOST + "data.json");
  const dataJson = await file.json();
  console.log("datajson", dataJson);
  // const data = JSON.parse(file.json());
  return dataJson;
};

export const getHomeFeaturedProducts = async (): Promise<IProduct[]> => {
  const allProducts = await getProducts();
  const filteredProducts = allProducts.filter(
    (product: IProduct) =>
      product.slug === "zx9-speaker" ||
      product.slug === "zx7-speaker" ||
      product.slug === "yx1-earphones"
  );
  return filteredProducts;
};

export const getProductsByCategory = async (
  category: string
): Promise<IProduct[]> => {
  const allProducts = await getProducts();
  const filteredProducts = allProducts.filter(
    (product: IProduct) => product.category === category
  );
  return filteredProducts;
};

export const getProductBySlug = async (
  slug: string
): Promise<IProduct | null> => {
  const allProducts = await getProducts();
  const filteredProducts = allProducts.filter(
    (product: IProduct) => product.slug === slug
  );
  if (!filteredProducts.length) {
    return null;
  }
  return filteredProducts[0];
};
