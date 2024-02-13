"use client";

interface InputProps {
  value: string;
  required?: boolean;
  className?: string;
  checked?: boolean;
  name: string;
  label: string;
  onChange: (e: string) => void;
}

const Radio = ({
  className,
  value,
  checked,
  name,
  label,
  onChange,
}: InputProps) => {
  return (
    <label
      className={`border px-6 py-4 font-bold rounded-lg text-sm 
    border-grey-dark hover:border-orange-dark flex items-center ${className}`}
    >
      <input
        type="radio"
        value={value}
        checked={checked}
        name={name}
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          onChange(e.currentTarget.value);
        }}
        className="appearance-none m-0 w-6 h-6 border border-grey-dark rounded-full -translate-x-2 grid place-content-center 
        before:content-[''] before:w-3 before:h-3 before:rounded-full before:scale-0 
        before:bg-orange-dark checked:before:scale-100"
      />
      {label}
    </label>
  );
};

export default Radio;
