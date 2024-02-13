import CheckoutForm from "@/components/CheckoutForm";
import SubmitButton from "@/components/UI/SubmitButton";
import { H3 } from "@/components/UI/Typography";

const CheckoutPage = () => {
  return (
    <div className=" bg-grey p-3">
      <div className=" bg-white rounded-lg p-6">
        <H3>checkout</H3>
        <CheckoutForm />
      </div>
      <div className=" bg-white rounded-lg p-6">
        <SubmitButton type="submit" form="checkout-form">
          CONTINUE & PAY
        </SubmitButton>
      </div>
    </div>
  );
};

export default CheckoutPage;
