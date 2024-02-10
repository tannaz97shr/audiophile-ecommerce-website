"use client";

import { IProduct } from "@/models/general";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ClientSideImageProps {
  product: IProduct;
  imageName: string;
  className?: string;
}

const ClientSideImage = ({ product, imageName }: ClientSideImageProps) => {
  const [deviceType, setDeviceType] = useState<"mobile" | "tablet" | "desktop">(
    "mobile"
  );
  useEffect(() => {
    const width = window.innerWidth;
    setDeviceType(width < 768 ? "mobile" : width < 1024 ? "tablet" : "desktop");
  }, []);
  return (
    <Image
      src={`/assets/product-${product.slug}/${deviceType}/${imageName}`}
      alt={product.slug}
      fill
    />
  );
};

export default ClientSideImage;
