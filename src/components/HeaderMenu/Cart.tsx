"use client";

import { addRemoveAllCookies } from "@/helpers/cookies";
import { IProductCookie } from "@/models/general";
import { useState } from "react";
import Backdrop from "../UI/Backdrop";
import { CartIcon } from "../UI/Icons";
import { H6 } from "../UI/Typography";

interface CartProps {
  items: IProductCookie[];
}
const Cart = ({ items }: CartProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
        className="lg:order-3"
      >
        <CartIcon />
      </button>
      {isOpen && (
        <>
          <Backdrop onClick={() => setIsOpen(false)} />
          <div className="absolute bg-white top-[100px] z-30 right-0 left-0 w-[90%] mx-auto rounded-lg p-7">
            <div className="flex justify-between">
              <H6>cart ({items.length})</H6>
              <button onClick={() => addRemoveAllCookies()}>Remove all</button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
