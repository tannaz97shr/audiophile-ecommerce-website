import Link from "next/link";
import { CartIcon, LogoIcon } from "../UI/Icons";
import Menu from "./Menu";

const HeaderMenu = () => {
  return (
    <div className="bg-black h-[90px] flex items-center px-6 py-8 border-b-grey-dark z-20">
      <Menu />
      <Link href={"/"} className="mx-auto md:ml-11">
        <LogoIcon />
      </Link>
      <button>
        <CartIcon />
      </button>
    </div>
  );
};

export default HeaderMenu;
