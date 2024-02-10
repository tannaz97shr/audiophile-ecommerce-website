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
    <div
      className="bg-black flex mt-auto text-white flex-col items-center 
    md:items-start md:pl-10 lg:px-40"
    >
      {/* <div className="flex flex-col mx-2.5 md:mx-auto md:w-[690px] lg:w-[1020px] xl:w-[1110px]"> */}
      <div className="w-24 border-t-4 border-orange-dark" />
      <div className="lg:flex w-full lg:justify-between">
        <LogoIcon className="mt-12 mx-auto md:ml-0" />
        <FooterMenu />
      </div>
      <P className=" text-border-grey text-center md:text-start mt-10 mx-6 md:ml-0 lg:w-[540px]">
        Audiophile is an all in one stop to fulfill your audio needs. We&apos;re
        a small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we&apos;re open 7 days a week.
      </P>
      <div
        className="lg:relative mb-4 flex items-center flex-col mx-6 mt-10 
      md:flex-row md:justify-between md:w-full md:pr-6 md:ml-0"
      >
        <P className=" text-border-grey text-center">
          Copyright 2021. All Rights Reserved
        </P>
        <div className="flex gap-4 mt-10 md:mt-0 lg:absolute lg:right-0 lg:top-[-50px]">
          <Link href="#">
            <IconFacebook className=" fill-white hover:fill-orange-dark" />
          </Link>
          <Link href="#">
            <IconInstagram className=" fill-white hover:fill-orange-dark" />
          </Link>
          <Link href="#">
            <IconTwitter className=" fill-white hover:fill-orange-dark" />
          </Link>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Footer;
