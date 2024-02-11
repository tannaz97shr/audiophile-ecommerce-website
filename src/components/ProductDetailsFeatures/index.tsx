import { H3, P } from "../UI/Typography";

interface ProductDetailsFeaturesProps {
  features: string;
}

const ProductDetailsFeatures = ({ features }: ProductDetailsFeaturesProps) => {
  return (
    <>
      <H3 className="mt-10 mb-8">Features</H3>
      <P className=" text-border-grey">{features}</P>
    </>
  );
};

export default ProductDetailsFeatures;
