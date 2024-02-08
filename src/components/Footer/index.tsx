import Link from "next/link";
import {
  IconFacebook,
  IconInstagram,
  IconTwitter,
  LogoIcon,
} from "../UI/Icons";
import { P } from "../UI/Typography";
import FooterMenu from "./Menu";

const Footer = () => {
  return (
    <div className=" bg-black flex mt-auto text-white flex-col items-center">
      <div className="w-24 border-t-4 border-orange-dark" />
      <LogoIcon className="mt-12" />
      <FooterMenu />
      <P className=" text-border-grey text-center mt-10 mx-6">
        Audiophile is an all in one stop to fulfill your audio needs. We&apos;re
        a small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we&apos;re open 7 days a week.
      </P>
      <P className=" text-border-grey text-center mt-10 mx-6">
        Copyright 2021. All Rights Reserved
      </P>
      <div className="mt-12 flex gap-2 mb-4">
        <Link href="#">
          <IconFacebook />
        </Link>
        <Link href="#">
          <IconInstagram />
        </Link>
        <Link href="#">
          <IconTwitter />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
