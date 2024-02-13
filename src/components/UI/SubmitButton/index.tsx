"use client";

import { useFormStatus } from "react-dom";

interface SubmitButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  form?: string;
}

export const SubmitButton = ({
  children,
  className,
  type,
  form,
}: SubmitButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <button
      className={`flex w-fit py-4 px-7 uppercase text-xs font-bold items-center border border-orange-dark hover:border-orange-light bg-orange-dark text-white hover:bg-orange-light ${
        className && className
      }`}
      type={type}
      form={form}
      aria-disabled={pending}
    >
      {children}
    </button>
  );
};

export default SubmitButton;
