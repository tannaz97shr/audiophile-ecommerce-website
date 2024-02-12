import { H2, P } from "../UI/Typography";

const BestGrearSection = () => {
  return (
    <div className="my-12 flex flex-col lg:flex-row-reverse ">
      <div
        className=" relative rounded-lg w-full aspect-square bg-[url('/assets/bestGear/mobile.jpg')] bg-cover bg-top 
      md:aspect-[23/10] md:bg-[url('/assets/bestGear/tablet.jpg')] lg:aspect-square lg:bg-[url('/assets/bestGear/desktop.jpg')] lg:w-[540px]"
      ></div>
      <div className=" flex flex-col lg:w-1/2 lg:pr-4 lg:justify-center">
        <H2 className="text-center lg:text-left mt-12">
          Bringing you the <span className=" text-orange-dark">best</span> audio
          gear
        </H2>
        <P className="mt-10 text-border-grey text-center text-sm lg:text-left">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </P>
      </div>
    </div>
  );
};

export default BestGrearSection;
