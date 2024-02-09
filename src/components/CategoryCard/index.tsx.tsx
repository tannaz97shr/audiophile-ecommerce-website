import { ICategoryItem } from "@/models/general";
import Image from "next/image";
import { Button } from "../UI/Button";
import { IconArrowRight } from "../UI/Icons";

interface MenuItemProps {
  item: ICategoryItem;
}

const MenuItem = ({ item }: MenuItemProps) => {
  return (
    <div
      key={item.name}
      className="flex bg-grey h-40 rounded-lg mt-16 relative md:flex-1 mx-2.5"
    >
      <Image
        alt={item.name}
        src={item.image}
        width={90}
        height={90}
        className="absolute mx-auto left-0 right-0 top-[-20px]"
      />
      <div className="mx-auto w-fit pt-20 text-center">
        <span className=" uppercase font-bold">{item.name}</span>
        <Button variant="text" href={item.href}>
          <span>shop</span>
          <IconArrowRight className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default MenuItem;
