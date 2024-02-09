"use client";

import { IProduct } from "@/models/general";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ClientSideImageProps {
  product: IProduct;
  png?: boolean;
  className?: string;
}

const ClientSideImage = ({ product, png }: ClientSideImageProps) => {
  const [deviceType, setDeviceType] = useState<"mobile" | "tablet" | "desktop">(
    "mobile"
  );
  useEffect(() => {
    const width = window.innerWidth;
    setDeviceType(width < 768 ? "mobile" : width < 1024 ? "tablet" : "desktop");
  }, []);
  console.log(
    `/assets/${product.slug}/${deviceType}/image-${
      product.category
    }-${product.slug.slice(0, 3)}.jpg`
  );
  //   if (fill) {
  return (
    <Image
      src={`/assets/${product.slug}/${deviceType}/image-${
        product.category
      }-${product.slug.slice(0, 3)}.${png ? "png" : "jpg"}`}
      alt={product.slug}
      fill
    />
  );
  //   }
  //   return (
  //     <Image
  //       src={`/assets/${product.slug}/${deviceType}/image-${
  //         product.category
  //       }-${product.slug.slice(0, 3)}.${png ? "png" : "jpg"}`}
  //       alt={product.slug}
  //       width={100}
  //       height={100}
  //     />
  //   );
};

export default ClientSideImage;
