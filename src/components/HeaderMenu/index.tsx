import { addRemoveAllCookies, getCartCookies } from "@/helpers/cookies";
import Link from "next/link";
import { LogoIcon } from "../UI/Icons";
import Cart from "./Cart";
import Menu from "./Menu";

const HeaderMenu = async () => {
  const cartItems = await getCartCookies();
  const removeAll = async () => {
    await addRemoveAllCookies();
  };
  console.log("items:", cartItems);
  return (
    <div className="bg-black h-[90px] flex items-center px-6 py-8 border-b-grey-dark z-20 lg:justify-between">
      <Menu />
      <Link href={"/"} className="mx-auto md:ml-11 lg:order-1 lg:mr-0">
        <LogoIcon />
      </Link>
      <Cart items={cartItems} />
    </div>
  );
};

export default HeaderMenu;
