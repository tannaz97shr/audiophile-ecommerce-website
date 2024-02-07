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

const Input = ({ label, placeholder, required, error }: InputProps) => {
  return (
    <label className="flex flex-col capitalize text-sm w-fit">
      <div className="flex">
        <span className="font-bold">{label}</span>
        {error ? <span className="ml-auto text-red">{error}</span> : null}
      </div>
      <input
        className={`border border-grey-dark py-4 px-6 rounded-lg mt-2 w-80 focus-visible:outline-none
        focus-visible:border-orange-dark
        ${error && "border-2 border-red"}
        `}
        required={required}
        placeholder={placeholder}
      />
    </label>
  );
};

export default Input;