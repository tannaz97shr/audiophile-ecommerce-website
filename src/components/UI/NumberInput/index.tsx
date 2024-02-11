"use client";

interface InputNumberProps {
  value: number;
  setValue: (count: number) => void;
}

const InputNumber = ({ value, setValue }: InputNumberProps) => {
  // const [value, setValue] = useState<number>(value);
  return (
    <label className=" bg-grey px-6 py-4 w-32 flex">
      <button
        disabled={value === 0 ? true : false}
        className="text-black-light"
        onClick={() => {
          if (value > 1) {
            setValue(value - 1);
          }
        }}
      >
        -
      </button>
      <input
        defaultValue={value}
        type="number"
        className="text-center focus-visible:outline-none w-full bg-transparent"
      />
      <button
        onClick={() => {
          setValue(value + 1);
        }}
        className="text-black-light"
      >
        +
      </button>
    </label>
  );
};

export default InputNumber;
