"use client";

import { checkoutAction } from "@/helpers/checkout";
import { useState } from "react";
import { useFormState } from "react-dom";
import Input from "../UI/Input";
import Radio from "../UI/Radio";
import { Subtitle } from "../UI/Typography";

const CheckoutForm = () => {
  const [state, formAction] = useFormState(checkoutAction, { message: "" });
  const [paymentMethod, setPaymentMethod] = useState<string>("eMoney");

  return (
    <form id="checkout-form" action={formAction}>
      <Subtitle className="mt-8 mb-4 font-bold">Billing details</Subtitle>
      <Input
        required
        className="mb-6"
        label={"name"}
        placeholder="Alexie Ward"
        name="name"
      />
      <Input
        className="mb-6"
        label={"email address"}
        name="email"
        required
        placeholder="alexei@mail.com"
      />
      <Input
        className="mb-6"
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
      <Input
        required
        className="mb-6"
        name="zipcode"
        label={"ZIP Code"}
        placeholder="10001"
      />
      <Input
        required
        className="mb-6"
        name="city"
        label={"City"}
        placeholder="New York"
      />
      <Input
        required
        className="mb-6"
        name="country"
        label={"Country"}
        placeholder="United States"
      />
      <Subtitle className="mt-8 mb-4 font-bold">payment details</Subtitle>
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
      {paymentMethod === "eMoney" && (
        <>
          <Input
            required
            className="mb-6"
            name="eMoneyNumber"
            label={"e-Money Number"}
            placeholder="238521993"
          />
          <Input
            required
            className="mb-6"
            name="eMoneyPin"
            label={"e-Money PIN"}
            placeholder="6891"
          />
        </>
      )}
    </form>
  );
};

export default CheckoutForm;
