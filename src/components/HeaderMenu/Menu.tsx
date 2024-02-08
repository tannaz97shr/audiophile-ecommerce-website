"use client";

import { useState } from "react";
import Backdrop from "../UI/Backdrop";
import { BurgerMenuIcon } from "../UI/Icons";

const Menu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <BurgerMenuIcon />
      </button>
      {isOpen && <Backdrop />}
    </>
  );
};

export default Menu;
