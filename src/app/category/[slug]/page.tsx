import BestGrearSection from "@/components/BestGearSection";
import CategorySection from "@/components/CategorySection";
import ClientSideImage from "@/components/ClientSideProductImage";
import { Button } from "@/components/UI/Button";
import { H4, Overline, P } from "@/components/UI/Typography";
import { getProductsByCategory } from "@/helpers/products";
import { IProduct } from "@/models/general";
import { notFound } from "next/navigation";

export const CategoryPage = async ({
  params,
}: {
  params: { slug: string };
}) => {
  // const categories = await getAllCategories();
  // if (!categories.includes(params.slug)) {
  //   notFound();
  // }
  const products: IProduct[] = await getProductsByCategory(params.slug);
  if (!products.length) {
    notFound();
  }
  return (
    <div className="flex flex-col mx-2.5 md:mx-auto md:w-[690px] lg:w-[1020px] xl:w-[1110px]">
      <div className="flex flex-col">
        {products.map((product: IProduct, i: number) => (
          <div
            className={`flex flex-col mt-16 lg:${
              i % 2 === 0 ? "flex-row" : "flex-row-reverse"
            } lg:gap-4`}
            key={product.slug}
          >
            <div
              className="relative w-full aspect-square overflow-hidden rounded-lg
            md:aspect-[2/1] lg:aspect-square"
            >
              <ClientSideImage
                slug={product.slug}
                imageName="image-product.jpg"
              />
            </div>
            <div className="flex flex-col items-center lg:items-start lg:text-left">
              {product.new && <Overline className="mt-8">New Product</Overline>}
              <H4 className="mt-8 px-6 text-center lg:text-left lg:pl-0">
                {product.name}
              </H4>
              <P className="mt-6 text-center text-border-grey lg:text-left">
                {product.description}
              </P>
              <Button href={`/products/${product.slug}`} className="my-6">
                See Product
              </Button>
            </div>
          </div>
        ))}
      </div>
      <CategorySection />
      <BestGrearSection />
    </div>
  );
};

export default CategoryPage;
