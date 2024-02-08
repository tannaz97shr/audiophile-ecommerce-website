"use client";

interface InputProps {
  value: string;
  required?: boolean;
  className?: string;
  checked?: boolean;
  name: string;
}

const Radio = ({ className, value, checked, name }: InputProps) => {
  return (
    <label
      className="border px-6 py-4 font-bold rounded-lg text-sm 
    border-grey-dark hover:border-orange-dark flex items-center"
    >
      <input
        type="radio"
        value={value}
        checked={checked}
        className="appearance-none m-0 w-6 h-6 border border-grey-dark rounded-full -translate-x-2 grid place-content-center 
        before:content-[''] before:w-3 before:h-3 before:rounded-full before:scale-0 
        before:bg-orange-dark checked:before:scale-100"
      />
      {name}
    </label>
  );
};

export default Radio;
