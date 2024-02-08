"use client";

import { IHeaderMenuItem } from "@/models/general";
import Image from "next/image";
import { useState } from "react";
import Backdrop from "../UI/Backdrop";
import { Button } from "../UI/Button";
import { BurgerMenuIcon, IconArrowRight } from "../UI/Icons";

const Menu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const items: IHeaderMenuItem[] = [
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
      image: "/assets/earphones.png",
    },
  ];
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
      {isOpen && (
        <div className="bg-white absolute top-[90px] z-20 w-full left-0 rounded-b px-4 py-6">
          <div>
            {items.map((item: IHeaderMenuItem) => (
              <div
                key={item.name}
                className="bg-grey h-40 rounded-lg mt-16 relative"
              >
                <Image
                  alt={item.name}
                  src={item.image}
                  width={90}
                  height={90}
                  className="absolute mx-auto left-0 right-0 top-[-20px]"
                />
                <div className="mx-auto w-fit pt-20 text-center">
                  <span className=" uppercase font-bold">{item.name}</span>
                  <Button variant="text" href={item.href}>
                    <span>shop</span>
                    <IconArrowRight className="ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
