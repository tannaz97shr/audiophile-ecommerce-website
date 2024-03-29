import CheckoutForm from "@/components/CheckoutForm";
import CheckoutSummary from "@/components/CheckoutSummary";
import SubmitButton from "@/components/UI/SubmitButton";
import { H3 } from "@/components/UI/Typography";
import { getCartCookies } from "@/helpers/cookies";

const CheckoutPage = async () => {
  const cartItems = await getCartCookies();
  return (
    <div className=" bg-grey p-3 flex flex-col lg:flex-row lg:gap-4 lg:px-10">
      <div className=" bg-white rounded-lg p-6 lg:w-2/3">
        <H3>checkout</H3>
        <CheckoutForm cartItems={cartItems} />
      </div>
      <div className=" bg-white rounded-lg p-6 mt-8 lg:w-1/3 lg:h-fit lg:mt-0">
        <CheckoutSummary cartItems={cartItems} />
        <SubmitButton
          type="submit"
          form="checkout-form"
          className="w-full justify-center"
        >
          CONTINUE & PAY
        </SubmitButton>
      </div>
    </div>
  );
};

export default CheckoutPage;
