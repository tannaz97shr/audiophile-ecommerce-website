"use server";

import { IProductCookie } from "@/models/general";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";

export async function addRemoveCookies(
  items: IProductCookie[],
  name: string,
  time: number
) {
  "use server";
  cookies().set({
    name: name,
    value: JSON.stringify(items),
    expires: Date.now() + time,
  });
}

export async function getCartCookies() {
  const cookieStore = cookies();
  const cookiesItems: RequestCookie | undefined = cookieStore.get("cart");
  const cartItemsArray: IProductCookie[] = cookiesItems?.value
    ? JSON.parse(cookiesItems?.value)
    : [];
  return cartItemsArray;
}

export async function addRemoveAllCookies() {
  "use server";
  cookies().set({
    name: "cart",
    value: JSON.stringify([]),
  });
}
