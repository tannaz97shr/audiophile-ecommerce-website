import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "text";
  className?: string;
  href?: string;
  onClick?: () => void;
}

export const Button = ({
  children,
  variant,
  className,
  href,
  onClick,
}: ButtonProps) => {
  const primaryClass =
    "border border-orange-dark hover:border-orange-light bg-orange-dark text-white hover:bg-orange-light";
  const secondaryClass =
    "border border-black text-black hover:text-white bg-transparent hover:bg-black";
  const textClass = "text-black hover:text-orange-dark";
  if (href) {
    return (
      <Link
        className={`flex w-fit py-4 px-7 uppercase text-xs font-bold items-center ${
          variant === "secondary"
            ? secondaryClass
            : variant === "text"
            ? textClass
            : primaryClass
        } ${className && className}`}
        href={href}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      className={`flex w-fit py-4 px-7 uppercase text-xs font-bold items-center ${
        variant === "secondary"
          ? secondaryClass
          : variant === "text"
          ? textClass
          : primaryClass
      } ${className && className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
