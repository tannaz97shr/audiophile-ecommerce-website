import ClientSideImage from "@/components/ClientSideProductImage";
import { H4, Overline, P } from "@/components/UI/Typography";
import { getProductBySlug } from "@/helpers/products";
import { notFound } from "next/navigation";

export const ProductPage = async ({ params }: { params: { slug: string } }) => {
  const product = await getProductBySlug(params.slug);
  if (!product) {
    notFound();
  }
  console.log("product : ", product);
  return (
    <div className="flex flex-col mx-3 md:mx-auto md:w-[690px] lg:w-[1020px] xl:w-[1110px]">
      <div className="flex flex-col mt-6">
        <div className="relative w-full aspect-square rounded-lg overflow-hidden">
          <ClientSideImage product={product} imageName={"image-product.jpg"} />
        </div>
        <div className="flex flex-col text-left">
          {product.new && <Overline className="mt-8">New Product</Overline>}
          <H4 className="mt-8 text-left lg:pl-0">{product.name}</H4>
          <P className="mt-6 text-border-grey text-left">
            {product.description}
          </P>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
