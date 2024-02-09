import { IProduct } from "@/models/general";
import { promises as fs } from "fs";

export const getProducts = async (): Promise<IProduct[]> => {
  const file = await fs.readFile(process.cwd() + "/public/data.json", "utf8");
  const data = JSON.parse(file);
  return data;
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
