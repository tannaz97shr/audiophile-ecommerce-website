interface InputProps {
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  label: string;
  className?: string;
  error?: string;
}

const Input = ({
  label,
  placeholder,
  required,
  error,
  className,
  ...rest
}: InputProps) => {
  return (
    <label className={`flex flex-col capitalize text-sm ${className}`}>
      <div className="flex">
        <span className="font-bold">{label}</span>
        {error ? <span className="ml-auto text-red">{error}</span> : null}
      </div>
      <input
        className={`border border-grey-dark py-4 px-6 rounded-lg mt-2 focus-visible:outline-none
        focus-visible:border-orange-dark
        ${error && "border-2 border-red"}`}
        required={required}
        placeholder={placeholder}
        {...rest}
      />
    </label>
  );
};

export default Input;
