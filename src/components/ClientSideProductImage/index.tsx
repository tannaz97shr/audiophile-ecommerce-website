"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface ClientSideImageProps {
  slug: string;
  imageName: string;
  className?: string;
}
const ClientSideImage = ({ slug, imageName }: ClientSideImageProps) => {
  const [deviceType, setDeviceType] = useState<"mobile" | "tablet" | "desktop">(
    "mobile"
  );
  useEffect(() => {
    const width = window.innerWidth;
    setDeviceType(width < 768 ? "mobile" : width < 1024 ? "tablet" : "desktop");
  }, []);
  return (
    <Image
      src={`/assets/product-${slug}/${deviceType}/${imageName}`}
      alt={slug}
      fill
    />
  );
};

export default ClientSideImage;
