"use client";

import { useState } from "react";
import Backdrop from "../UI/Backdrop";
import { CartIcon } from "../UI/Icons";

const Cart = () => {
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
          <div className="absolute bg-white top-[100px] z-30 right-0 left-0 w-[90%] mx-auto rounded-lg">
            this is cart Modal
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
