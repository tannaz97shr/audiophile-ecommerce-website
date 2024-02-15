"use client";

import { useRouter } from "next/navigation";

const GoBackButton = () => {
  const router = useRouter();
  return (
    <button
      className="text-border-grey mt-6 mr-auto"
      onClick={() => {
        router.back();
      }}
    >
      Go Back
    </button>
  );
};

export default GoBackButton;
