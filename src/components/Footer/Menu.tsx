"use client";

import { IHeaderMenuItem } from "@/models/general";
import Link from "next/link";
import { MenuItems } from "../HeaderMenu/Menu";

const FooterMenu = () => {
  return (
    <div className="mt-12 text-sm font-bold tracking-wide uppercase flex flex-col items-center">
      <Link href={"/"} className="mb-4">
        home
      </Link>
      {MenuItems.map((item: IHeaderMenuItem) => (
        <Link key={item.name} href={item.href} className="mb-4">
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default FooterMenu;
