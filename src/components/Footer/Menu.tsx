"use client";

import { ICategoryItem } from "@/models/general";
import Link from "next/link";
import { CategoryItems } from "../HeaderMenu/Menu";

const FooterMenu = () => {
  return (
    <div
      className="mt-12 text-sm font-bold tracking-wide uppercase flex flex-col items-center
     md:flex-row"
    >
      <Link href={"/"} className="mb-4 hover:text-orange-dark">
        home
      </Link>
      {CategoryItems.map((item: ICategoryItem) => (
        <Link
          key={item.name}
          href={item.href}
          className="mb-4 md:ml-8 hover:text-orange-dark"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default FooterMenu;
