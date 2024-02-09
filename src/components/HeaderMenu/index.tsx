import Link from "next/link";
import { CartIcon, LogoIcon } from "../UI/Icons";
import Menu from "./Menu";

const HeaderMenu = () => {
  return (
    <div className="bg-black h-[90px] flex items-center px-6 py-8 border-b-grey-dark z-20 lg:justify-between">
      <Menu />
      <Link href={"/"} className="mx-auto md:ml-11 lg:order-1 lg:mr-0">
        <LogoIcon />
      </Link>
      <button className="lg:order-3">
        <CartIcon />
      </button>
    </div>
  );
};

export default HeaderMenu;
