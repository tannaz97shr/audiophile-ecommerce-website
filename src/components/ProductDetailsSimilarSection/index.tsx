import { ISimilarProduct } from "@/models/general";
import ClientSideImage from "../ClientSideProductImage";
import { Button } from "../UI/Button";
import { H3, H5 } from "../UI/Typography";

interface ProductDetailsSimilarProps {
  others: ISimilarProduct[];
}

const ProductDetailsSimilarSection = ({
  others,
}: ProductDetailsSimilarProps) => {
  console.log("others", others);
  return (
    <div>
      <H3 className="mt-10 mb-8 md:text-center">You may also like</H3>
      <div className="flex flex-col md:flex-row gap-4">
        {others.map((item: ISimilarProduct) => {
          const splitImage = item.image.desktop.split("/");
          const imageName = splitImage[splitImage.length - 1];
          return (
            <div className="flex flex-col w-full">
              <div className="relative w-full aspect-[8/3] md:aspect-[11/16] lg:aspect-square rounded-lg overflow-hidden">
                <ClientSideImage slug={item.slug} imageName={imageName} />
              </div>
              <H5 className="my-8 text-center">{item.name}</H5>
              <Button href={`/products/${item.slug}`} className="mx-auto mb-8">
                see product
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductDetailsSimilarSection;
