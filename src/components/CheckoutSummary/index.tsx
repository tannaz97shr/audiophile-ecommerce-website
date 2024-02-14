import { getCartCookies } from "@/helpers/cookies";
import { IProductCookie } from "@/models/general";
import Image from "next/image";

const CheckoutSummary = async () => {
  const cartItems = await getCartCookies();
  let total = 0;
  const shipping = 50;
  const vat = 1079;
  return (
    <div>
      {cartItems.map((item: IProductCookie, index) => {
        total = total + item.price * item.amount;
        return (
          <div className="flex flex-row my-6" key={item.slug}>
            <Image
              width={64}
              height={64}
              className="rounded-lg"
              alt={item.name}
              src={`/assets/product-${item.slug}/desktop/image-product.jpg`}
            />
            <div className="flex flex-1 flex-col mx-4 text-sm uppercase font-bold">
              <span>{item.name}</span>
              <span className=" text-border-grey">
                $ {item.price * item.amount}
              </span>
            </div>
            <span className="text-sm font-bold text-border-grey">
              x{item.amount}
            </span>
          </div>
        );
      })}
      <div className=" flex justify-between mb-4">
        <span className="text-border-grey uppercase">total</span>
        <span className="font-bold">$ {total}</span>
      </div>
      <div className=" flex justify-between mb-4">
        <span className="text-border-grey uppercase">shipping</span>
        <span className="font-bold">$ {shipping}</span>
      </div>
      <div className=" flex justify-between mb-10">
        <span className="text-border-grey uppercase">vat (included)</span>
        <span className="font-bold">$ {vat}</span>
      </div>
      <div className=" flex justify-between mb-10">
        <span className="text-border-grey uppercase">grand total</span>
        <span className="font-bold">$ {shipping + total}</span>
      </div>
    </div>
  );
};

export default CheckoutSummary;
