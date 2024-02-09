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
    <div className="flex flex-col mt-12">
      {product3 && (
        <div
          className="flex flex-col bg-orange-dark rounded-lg items-center py-12 
        bg-[url('/assets/pattern-circles.svg')] bg-cover bg-center bg-no-repeat
        lg:flex-row"
        >
          <div className="w-48 h-60 lg:w-[410px] lg:h-[493px] relative">
            <ClientSideImage product={product3} png />
          </div>
          <div className="flex flex-col items-center lg:items-start lg:w-1/2 lg:ml-auto">
            <div className=" text-white text-center font-bold text-[24px] lg:text-[56px] mt-4">
              {product3.name}
            </div>
            <P className="text-grey-dark mt-6 text-center lg:text-left mx-6 lg:mx-0 max-w-80 lg:ml-0">
              {product3.description}
            </P>
            <Button variant="secondary" className="mt-6">
              See Product
            </Button>
          </div>
        </div>
      )}
      {product2 && (
        <div className="w-full relative min-h-80 mt-6 rounded-lg overflow-hidden">
          <ClientSideImage product={product2} />
          <div className="flex flex-col absolute left-0 top-0 bottom-0 my-auto h-fit items-center pl-6">
            <div className=" text-black text-center font-bold text-[24px] lg:text-[56px] mt-4">
              {product2.name}
            </div>
            <Button variant="secondary" className="mt-6">
              See Product
            </Button>
          </div>
        </div>
      )}
      {product1 && (
        <div className="w-full flex gap-2 mt-6 md:min-h-[320px]">
          <div className="relative flex flex-1 rounded-lg overflow-hidden">
            <ClientSideImage product={product1} />
          </div>
          <div className="bg-grey w-[48%] rounded-lg p-2 flex flex-col justify-center">
            <div className=" text-black text-left font-bold text-[24px] lg:text-[56px] mt-4">
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
