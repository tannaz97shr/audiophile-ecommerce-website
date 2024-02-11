import { H3 } from "../UI/Typography";

interface ProductDetailsInTheBoxProps {
  includes: {
    quantity: number;
    item: string;
  }[];
}

const ProductDetailsInTheBox = ({ includes }: ProductDetailsInTheBoxProps) => {
  return (
    <>
      <H3 className="mt-10 mb-8">In The Box</H3>
      {includes.map((item: { quantity: number; item: string }) => (
        <div className="flex items-center mb-2 text-sm">
          <span className="text-orange-dark font-bold mr-6">
            {item.quantity}x
          </span>
          <span className="text-border-grey">{item.item}</span>
        </div>
      ))}
    </>
  );
};

export default ProductDetailsInTheBox;
