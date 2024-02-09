import { getHomeFeaturedProducts } from "@/helpers/products";
import { IProduct } from "@/models/general";
import { Button } from "../UI/Button";
import { P } from "../UI/Typography";
import ClientSideImage from "./clientSideImage";

const HomeFeaturesSection = async () => {
  // todo link products to slug page
  const products: IProduct[] = await getHomeFeaturedProducts();
  const [product1, product2, product3] = products;
  console.log("products", products);
  return (
    <div className="flex flex-col mt-12 mx-2.5">
      {product3 && (
        <div
          className="flex flex-col bg-orange-dark rounded-lg items-center py-12 
        bg-[url('/assets/pattern-circles.svg')] bg-cover bg-center bg-no-repeat"
        >
          <ClientSideImage product={product3} png />
          <div className=" text-white text-center font-bold text-[36px] md:text-[56px] mt-4">
            {product3.name}
          </div>
          <P className="text-grey-dark mt-6 text-center lg:text-left mx-6 max-w-80 lg:ml-0">
            {product3.description}
          </P>
          <Button variant="secondary" className="mt-6">
            See Product
          </Button>
        </div>
      )}
      {product2 && (
        <div className="w-full relative min-h-80 mt-6 rounded-lg overflow-hidden">
          <ClientSideImage product={product2} fill />
          <div className="flex flex-col absolute left-0 top-0 bottom-0 my-auto h-fit items-center pl-6">
            <div className=" text-black text-center font-bold text-[36px] md:text-[56px] mt-4">
              {product2.name}
            </div>
            <Button variant="secondary" className="mt-6">
              See Product
            </Button>
          </div>
        </div>
      )}
      {product1 && (
        <div className="w-full flex gap-2 mt-6">
          <div className="relative flex flex-1 rounded-lg overflow-hidden">
            <ClientSideImage product={product1} fill />
          </div>
          <div className="bg-grey w-[48%] rounded-lg p-2">
            <div className=" text-black text-left font-bold text-[24px] md:text-[56px] mt-4">
              {product1.name}
            </div>
            <Button variant="secondary" className="mt-6">
              See Product
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeFeaturesSection;
