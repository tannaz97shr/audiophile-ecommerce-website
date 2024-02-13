import Input from "../UI/Input";
import { Subtitle } from "../UI/Typography";

const CheckoutForm = () => {
  async function checkoutAction(formData: FormData) {
    "use server";
    const rawFormData = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
    };
    console.log("raw form data", rawFormData);
  }
  return (
    <form id="checkout-form" action={checkoutAction}>
      <Subtitle className="mt-8 mb-4 font-bold">Billing details</Subtitle>
      <Input
        required
        className="mb-6"
        label={"name"}
        placeholder="Alexie Ward"
      />
      <Input
        className="mb-6"
        label={"email address"}
        name="email"
        required
        placeholder="alexei@mail.com"
      />
      <Input
        className="mb-6"
        label={"phone number"}
        placeholder="+1 202-555-0136"
        name="phone"
        required
      />
    </form>
  );
};

export default CheckoutForm;
