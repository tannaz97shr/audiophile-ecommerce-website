import Link from "next/link";
import { BurgerMenuIcon, CartIcon, LogoIcon } from "../UI/Icons";

const HeaderMenu = () => {
  return (
    <div className="bg-black h-[90px] flex items-center px-6 py-8">
      <button>
        <BurgerMenuIcon />
      </button>
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
