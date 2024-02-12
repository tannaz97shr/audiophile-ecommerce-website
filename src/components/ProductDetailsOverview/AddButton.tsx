import { addRemoveCookies } from "@/helpers/cookies";
import { IProductCookie } from "@/models/general";
import { Button } from "../UI/Button";

interface AddButtonProps {
  cartCookiesitems: IProductCookie[];
  slug: string;
  value: number;
}

const AddButton = ({ cartCookiesitems, slug, value }: AddButtonProps) => {
  const oneDay = 24 * 60 * 60 * 1000;
  return (
    <Button
      onClick={() => {
        const existItem = cartCookiesitems.filter(
          (item: IProductCookie) => item.slug === slug
        );
        // if (value === 0) return;
        if (existItem.length) {
          const index = cartCookiesitems.indexOf(existItem[0]);
          const newArray = cartCookiesitems.filter((_item, i) => i !== index);
          addRemoveCookies(
            [...newArray, { slug: slug, amount: value }],
            "cart",
            7 * oneDay
          );
          return;
        }
        addRemoveCookies(
          [...cartCookiesitems, { slug: slug, amount: value }],
          "cart",
          7 * oneDay
        );
      }}
    >
      add to cart
    </Button>
  );
};

export default AddButton;
