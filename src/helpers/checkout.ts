"use server";

import { z } from "zod";

const schema = z.object({
  email: z.coerce.string().email().min(5),
  phone: z.coerce.number(),
});

export async function checkoutAction(_prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    email: formData.get("email"),
    phone: formData.get("phone"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: validatedFields.error.message,
    };
  }
  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    address: formData.get("address"),
    zipcode: formData.get("zipcode"),
    city: formData.get("city"),
    country: formData.get("country"),
    eMoneyNumber: formData.get("eMoneyNumber"),
    eMoneyPin: formData.get("eMoneyPin"),
  };
  return {
    message: "success",
  };
}
