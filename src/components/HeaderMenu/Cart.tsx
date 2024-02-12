"use client";

import { useState } from "react";
import CartModal from "../CartModal";
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
      {isOpen && <CartModal closeHandler={() => setIsOpen(false)} />}
    </>
  );
};

export default Cart;
