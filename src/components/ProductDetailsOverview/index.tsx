import { IProduct, IProductCookie } from "@/models/general";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";
import ClientSideImage from "../ClientSideProductImage";
import { H4, Overline, P } from "../UI/Typography";
import CartForm from "./CartForm";

interface ProductDetailsOverviewProps {
  product: IProduct;
}
const ProductDetailsOverview = ({ product }: ProductDetailsOverviewProps) => {
  const cookieStore = cookies();
  const cookiesItems: RequestCookie | undefined = cookieStore.get("cart");
  const cartItemsArray: IProductCookie[] = cookiesItems?.value
    ? JSON.parse(cookiesItems?.value)
    : [];
  console.log("cartItemsArray", cartItemsArray);
  return (
    <div className="flex flex-col mt-6 md:flex-row">
      <div className="relative w-full aspect-square rounded-lg overflow-hidden md:aspect-[7/12] lg:aspect-square">
        <ClientSideImage slug={product.slug} imageName={"image-product.jpg"} />
      </div>
      <div className="flex flex-col text-left md:ml-16">
        {product.new && <Overline className="mt-8">New Product</Overline>}
        <H4 className="mt-8 text-left lg:pl-0">{product.name}</H4>
        <P className="mt-6 text-border-grey text-left">{product.description}</P>
        <div className="my-6 font-bold">
          ${" "}
          {product.price.toLocaleString("en-US", {
            style: "decimal",
          })}
        </div>
        <CartForm cartCookiesitems={cartItemsArray} slug={product.slug} />
      </div>
    </div>
  );
};

export default ProductDetailsOverview;
