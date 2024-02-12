"use client";

import { IProductCookie } from "@/models/general";
import { useState } from "react";
import InputNumber from "../UI/NumberInput";
import AddButton from "./AddButton";

interface CartFormProps {
  slug: string;
  cartCookiesitems: IProductCookie[];
}

const CartForm = ({ cartCookiesitems, slug }: CartFormProps) => {
  const [value, setValue] = useState<number>(1);
  return (
    <div className="flex mb-2 gap-4">
      <InputNumber value={value} setValue={setValue} />
      <AddButton
        cartCookiesitems={cartCookiesitems}
        slug={slug}
        value={value}
      />
    </div>
  );
};

export default CartForm;
