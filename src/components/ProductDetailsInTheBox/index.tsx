import { H3 } from "../UI/Typography";

interface ProductDetailsInTheBoxProps {
  includes: {
    quantity: number;
    item: string;
  }[];
}

const ProductDetailsInTheBox = ({ includes }: ProductDetailsInTheBoxProps) => {
  return (
    <div className="flex flex-col md:flex-row md:items-baseline lg:flex-col lg:ml-24">
      <H3 className="mt-10 mb-8 md:w-1/2 text-nowrap">In The Box</H3>
      <div className="flex flex-col">
        {includes.map((item: { quantity: number; item: string }) => (
          <div key={item.item} className="flex items-center mb-2 text-sm">
            <span className="text-orange-dark font-bold mr-6">
              {item.quantity}x
            </span>
            <span className="text-border-grey">{item.item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetailsInTheBox;
