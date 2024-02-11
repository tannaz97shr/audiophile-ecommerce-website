import { IProduct } from "@/models/general";
import ClientSideImage from "../ClientSideProductImage";

interface ProductDetailsGalleryProps {
  product: IProduct;
}

const ProductDetailsGallery = ({ product }: ProductDetailsGalleryProps) => {
  return (
    <div className="flex flex-col md:flex-row mt-12 md:gap-4 w-full">
      <div className="flex flex-col w-full aspect-[3/4] gap-4 md:w-3/5">
        <div className="w-full h-1/2 relative rounded-lg overflow-hidden mb-4">
          <ClientSideImage product={product} imageName="image-gallery-1.jpg" />
        </div>
        <div className="w-full h-1/2 relative rounded-lg overflow-hidden mb-4">
          <ClientSideImage product={product} imageName="image-gallery-2.jpg" />
        </div>
      </div>
      <div className="w-full aspect-square">
        <div className="w-full h-full relative rounded-lg overflow-hidden mb-4">
          <ClientSideImage product={product} imageName="image-gallery-3.jpg" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsGallery;
