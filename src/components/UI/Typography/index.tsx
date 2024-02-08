interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export const H1 = ({ children, className }: TextProps) => {
  return (
    <h1
      className={`font-bold text-[56px] uppercase leading-[58px] tracking-[2px] ${
        className && className
      }`}
    >
      {children}
    </h1>
  );
};

export const H2 = ({ children, className }: TextProps) => {
  return (
    <h1
      className={`font-bold text-[40px] uppercase leading-[44px] tracking-[1.5px] ${
        className && className
      }`}
    >
      {children}
    </h1>
  );
};

export const H3 = ({ children, className }: TextProps) => {
  return (
    <h1
      className={`font-bold text-[40px] uppercase leading-[44px] tracking-[1.5px] ${
        className && className
      }`}
    >
      {children}
    </h1>
  );
};

export const H4 = ({ children, className }: TextProps) => {
  return (
    <h1
      className={`font-bold text-[28px] uppercase leading-[38px] tracking-[2px] ${
        className && className
      }`}
    >
      {children}
    </h1>
  );
};

export const H5 = ({ children, className }: TextProps) => {
  return (
    <h1
      className={`font-bold text-[24px] uppercase leading-[33px] tracking-[1.7px] ${
        className && className
      }`}
    >
      {children}
    </h1>
  );
};

export const H6 = ({ children, className }: TextProps) => {
  return (
    <h1
      className={`font-bold text-[18px] uppercase leading-[24px] tracking-[1.3px] ${
        className && className
      }`}
    >
      {children}
    </h1>
  );
};

export const Overline = ({ children, className }: TextProps) => {
  return (
    <h1
      className={`text-orange-dark text-[14px] uppercase leading-[19px] tracking-[10px] ${
        className && className
      }`}
    >
      {children}
    </h1>
  );
};

export const Subtitle = ({ children, className }: TextProps) => {
  return (
    <h1
      className={`text-orange-dark text-[13px] uppercase leading-[25px] tracking-[1px] ${
        className && className
      }`}
    >
      {children}
    </h1>
  );
};

export const P = ({ children, className }: TextProps) => {
  return (
    <h1 className={`text-[15px] leading-[25px]${className && className}`}>
      {children}
    </h1>
  );
};
