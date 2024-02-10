import { Button } from "@/components/UI/Button";
import { H4, Overline, P } from "@/components/UI/Typography";
import { getAllCategories, getProductsByCategory } from "@/helpers/products";
import { IProduct } from "@/models/general";
import Image from "next/image";
import { notFound } from "next/navigation";

export const CategoryPage = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const categories = await getAllCategories();
  if (!categories.includes(params.slug)) {
    notFound();
  }
  const products: IProduct[] = await getProductsByCategory(params.slug);
  console.log(products);
  return (
    <div className="flex flex-col mx-2.5 md:mx-auto md:w-[690px] lg:w-[1020px] xl:w-[1110px]">
      <div className="flex flex-col">
        {products.map((product: IProduct) => (
          <div className="flex flex-col mt-16" key={product.slug}>
            <div className="relative w-full aspect-square overflow-hidden rounded-lg">
              <Image
                alt={product.slug}
                fill
                src={`/assets/${product.slug}/image-product.jpg`}
              />
            </div>
            <div className="flex flex-col items-center">
              <Overline className="mt-8">New Product</Overline>
              <H4 className="mt-8 px-6 text-center">{product.name}</H4>
              <P className="mt-6 text-center text-border-grey">
                {product.description}
              </P>
              <Button className="my-6">See Product</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
