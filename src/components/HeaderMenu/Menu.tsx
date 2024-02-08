"use client";

import { IHeaderMenuItem } from "@/models/general";
import Link from "next/link";
import { useState } from "react";
import Backdrop from "../UI/Backdrop";
import { BurgerMenuIcon } from "../UI/Icons";
import MenuItem from "./MenuItem";

export const MenuItems: IHeaderMenuItem[] = [
  {
    name: "headphones",
    href: "/headphones",
    image: "/assets/image-category-thumbnail-headphones.png",
  },
  {
    name: "speakers",
    href: "/speakers",
    image: "/assets/image-category-thumbnail-speakers.png",
  },
  {
    name: "earphones",
    href: "/earphones",
    image: "/assets/image-category-thumbnail-earphones.png",
  },
];

const Menu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <button
        className="lg:hidden"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <BurgerMenuIcon />
      </button>
      {isOpen && (
        <Backdrop
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
      )}
      {isOpen && (
        <div className="bg-white absolute top-[90px] z-20 w-full left-0 rounded-b px-4 py-6 lg:hidden">
          <div className="flex flex-col md:flex-row">
            {MenuItems.map((item: IHeaderMenuItem) => (
              <MenuItem item={item} />
            ))}
          </div>
        </div>
      )}
      <div className="hidden lg:flex lg:order-2">
        <Link
          href={"/"}
          className=" text-white mx-8 uppercase font-bold text-sm tracking-wide"
        >
          home
        </Link>
        {MenuItems.map((item: IHeaderMenuItem) => (
          <Link
            key={item.name}
            href={item.href}
            className=" text-white mx-8 uppercase font-bold text-sm tracking-wide"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Menu;
