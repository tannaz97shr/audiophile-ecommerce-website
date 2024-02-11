import ProductDetailsFeatures from "@/components/ProductDetailsFeatures";
import ProductDetailsInTheBox from "@/components/ProductDetailsInTheBox";
import ProductDetailsOverview from "@/components/ProductDetailsOverview";
import { getProductBySlug } from "@/helpers/products";
import { notFound } from "next/navigation";

export const ProductPage = async ({ params }: { params: { slug: string } }) => {
  const product = await getProductBySlug(params.slug);
  if (!product) {
    notFound();
  }
  console.log(product);
  return (
    <div className="flex flex-col mx-3 md:mx-auto md:w-[690px] lg:w-[1020px] xl:w-[1110px]">
      <ProductDetailsOverview product={product} />
      <div className="flex flex-col lg:flex-row">
        <ProductDetailsFeatures features={product.features} />
        <ProductDetailsInTheBox includes={product.includes} />
      </div>
    </div>
  );
};

export default ProductPage;
