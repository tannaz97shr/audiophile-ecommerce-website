import { IProductCookie } from "@/models/general";
import Image from "next/image";
import Backdrop from "../UI/Backdrop";
import { Button } from "../UI/Button";
import { IconOrderConfirmation } from "../UI/Icons";
import { H5, P } from "../UI/Typography";

interface ConfirmationModalProps {
  onCloseHandler: () => void;
  total: number;
  cartLength: number;
  item: IProductCookie;
}
const ConfirmationModal = ({
  onCloseHandler,
  total,
  cartLength,
  item,
}: ConfirmationModalProps) => {
  return (
    <>
      <Backdrop onClick={onCloseHandler} />
      <div className="absolute bg-white top-[224px] z-30 right-0 left-0 w-[90%] mx-auto rounded-lg p-7 max-w-[380px]">
        <IconOrderConfirmation />
        <H5 className="mt-6">THANK YOU FOR YOUR ORDER</H5>
        <P className="mt-6 text-border-grey">
          You will receive an email confirmation shortly.
        </P>
        <div className=" rounded-lg mt-6 items-center overflow-hidden">
          <div className=" bg-grey p-6">
            <div className="flex flex-row" key={item.slug}>
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
              <span className="text-sm font-bold text-border-grey h-fit my-auto">
                x{item.amount}
              </span>
            </div>
            {cartLength > 1 && (
              <div className=" pt-3 border-t border-border-grey text-center text-sm font-bold text-border-grey">
                and {cartLength - 1} more item(s)
              </div>
            )}
          </div>
          <div className="bg-black text-white flex flex-col p-6">
            <span className=" text-border-grey uppercase">grand total</span>
            <span>$ {total + 50}</span>
          </div>
        </div>
        <Button onClick={onCloseHandler} className="mt-6 justify-center w-full">
          Back to home
        </Button>
      </div>
    </>
  );
};

export default ConfirmationModal;
