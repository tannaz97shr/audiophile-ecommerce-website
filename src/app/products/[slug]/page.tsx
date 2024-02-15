import BestGrearSection from "@/components/BestGearSection";
import CategorySection from "@/components/CategorySection";
import GoBackButton from "@/components/GoBackButton";
import ProductDetailsFeatures from "@/components/ProductDetailsFeatures";
import ProductDetailsGallery from "@/components/ProductDetailsGallery";
import ProductDetailsInTheBox from "@/components/ProductDetailsInTheBox";
import ProductDetailsOverview from "@/components/ProductDetailsOverview";
import ProductDetailsSimilarSection from "@/components/ProductDetailsSimilarSection";
import { getProductBySlug } from "@/helpers/products";
import { notFound } from "next/navigation";

export const ProductPage = async ({ params }: { params: { slug: string } }) => {
  const product = await getProductBySlug(params.slug);
  if (!product) {
    notFound();
  }
  return (
    <div className="flex flex-col mx-3 md:mx-auto md:w-[690px] lg:w-[1020px] xl:w-[1110px]">
      <GoBackButton />
      <ProductDetailsOverview product={product} />
      <div className="flex flex-col lg:flex-row">
        <ProductDetailsFeatures features={product.features} />
        <ProductDetailsInTheBox includes={product.includes} />
      </div>
      <ProductDetailsGallery product={product} />
      <ProductDetailsSimilarSection others={product.others} />
      <CategorySection />
      <BestGrearSection />
    </div>
  );
};

export default ProductPage;
