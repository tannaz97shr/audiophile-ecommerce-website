import { Button } from "../UI/Button";
import { P } from "../UI/Typography";

const HomeBanner = () => {
  return (
    <div
      className="relative flex w-full h-[510px] bg-cover bg-center bg-no-repeat 
    bg-[url('/assets/newProduct/mobile.jpg')] md:bg-[url('/assets/newProduct/tablet.jpg')] lg:bg-[url('/assets/newProduct/desktop.jpg')]"
    >
      <div className="flex flex-col m-auto items-center lg:items-start lg:ml-40">
        <div className=" text-sm uppercase text-border-grey tracking-[10px]">
          New Product
        </div>
        <div className=" text-white font-bold text-[36px] md:text-[56px] mt-4">
          XX99 Mark II
          <br />
          HeadphoneS
        </div>
        <P className="text-border-grey mt-6 text-center lg:text-left mx-6 max-w-80 lg:ml-0">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </P>
        <Button className="mt-6">See Product</Button>
      </div>
    </div>
  );
};

export default HomeBanner;
