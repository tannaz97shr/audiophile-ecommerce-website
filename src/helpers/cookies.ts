"use server";

import { IProductCookie } from "@/models/general";
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
