"use client";

import { checkoutAction } from "@/helpers/checkout";
import { IProductCookie } from "@/models/general";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import Input from "../UI/Input";
import Radio from "../UI/Radio";
import { Subtitle } from "../UI/Typography";
import ConfirmationModal from "./ConfirmationModal";

interface CheckoutFormProps {
  cartItems: IProductCookie[];
}

const CheckoutForm = ({ cartItems }: CheckoutFormProps) => {
  const [state, formAction] = useFormState(checkoutAction, {
    message: "",
    status: 100,
  });
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState<string>("eMoney");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const item = cartItems[0];

  let total = 0;
  cartItems.forEach((item) => {
    total = total + item.price;
  });

  useEffect(() => {
    if (state.status === 200) {
      setIsSuccessModalOpen(true);
    }
  }, [state]);

  const modalCloseHandler = () => {
    setIsSuccessModalOpen(false);
    router.push("/");
  };

  return (
    <>
      {isSuccessModalOpen && (
        <ConfirmationModal
          onCloseHandler={modalCloseHandler}
          total={total}
          cartLength={cartItems.length}
          item={cartItems[0]}
        />
      )}

      <form id="checkout-form" action={formAction}>
        <Subtitle className="mt-8 mb-4 font-bold">Billing details</Subtitle>
        <div className="flex flex-col md:flex-row md:gap-4 md:w-full">
          <Input
            required
            className="mb-6 md:w-1/2"
            label={"name"}
            placeholder="Alexie Ward"
            name="name"
          />
          <Input
            className="mb-6 md:w-1/2"
            label={"email address"}
            name="email"
            required
            placeholder="alexei@mail.com"
          />
        </div>
        <Input
          className="mb-6 md:w-1/2"
          label={"phone number"}
          placeholder="+1 202-555-0136"
          name="phone"
          required
        />
        <Subtitle className="mt-8 mb-4 font-bold">shopping info</Subtitle>
        <Input
          required
          className="mb-6"
          name="address"
          label={"Your Address"}
          placeholder="1137 Williams Avenue"
        />
        <div className="flex flex-col md:flex-row md:gap-4 md:w-full">
          <Input
            required
            className="mb-6 md:w-1/2"
            name="zipcode"
            label={"ZIP Code"}
            placeholder="10001"
          />
          <Input
            required
            className="mb-6 md:w-1/2"
            name="city"
            label={"City"}
            placeholder="New York"
          />
        </div>
        <Input
          required
          className="mb-6 md:w-1/2"
          name="country"
          label={"Country"}
          placeholder="United States"
        />
        <Subtitle className="mb-4 font-bold mt-8">payment details</Subtitle>
        <div className=" flex flex-col md:flex-row md:items-baseline">
          <div className="md:w-1/2">
            <div className="text-sm font-bold mb-4">Payment Method</div>
          </div>
          <div className="flex flex-col md:w-1/2">
            <Radio
              onChange={(val: string) => {
                setPaymentMethod(val);
              }}
              label="e-Money"
              name="paymentMethod"
              value={"eMoney"}
            />
            <Radio
              onChange={(val: string) => {
                setPaymentMethod(val);
              }}
              className="my-6"
              label="Cash on Delivery"
              name="paymentMethod"
              value={"cash"}
            />
          </div>
        </div>
        {paymentMethod === "eMoney" && (
          <div className=" flex flex-col md:flex-row md:gap-4">
            <Input
              required
              className="mb-6 md:w-1/2"
              name="eMoneyNumber"
              label={"e-Money Number"}
              placeholder="238521993"
            />
            <Input
              required
              className="mb-6 md:w-1/2"
              name="eMoneyPin"
              label={"e-Money PIN"}
              placeholder="6891"
            />
          </div>
        )}
      </form>
    </>
  );
};

export default CheckoutForm;
