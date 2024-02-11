"use client";

import { addRemoveCookies } from "@/helpers/cookies";
import { IProductCookie } from "@/models/general";
import { useState } from "react";
import { Button } from "../UI/Button";
import InputNumber from "../UI/NumberInput";

interface CartFormProps {
  slug: string;
  cartCookiesitems: IProductCookie[];
}

const CartForm = ({ cartCookiesitems, slug }: CartFormProps) => {
  const [value, setValue] = useState<number>(1);
  const oneDay = 24 * 60 * 60 * 1000;
  return (
    <div className="flex mb-2 gap-4">
      <InputNumber value={value} setValue={setValue} />
      <Button
        onClick={() => {
          addRemoveCookies(
            [...cartCookiesitems, { slug: slug, amount: value }],
            "cart",
            7 * oneDay
          );
        }}
      >
        add to cart
      </Button>
    </div>
  );
};

export default CartForm;
