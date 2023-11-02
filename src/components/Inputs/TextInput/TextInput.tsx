import { ChangeEvent, ReactNode } from "react";

interface TextInputProps {
  id?: string;
  name: string;
  label: string | ReactNode;
  value: string;
  placeholder: string;
  classNames?: {
    wrapperClasses?: string;
    inputClasses?: string;
    labelClasses?: string;
  };
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  validator?: (value: string) => boolean;
  onKeyDown: (event: any) => void;
}

export function TextInput({
  id,
  name,
  label,
  value,
  placeholder,
  onChange,
  classNames,
  onKeyDown,
}: TextInputProps) {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event);
  };

  const wrapperClasses =
    "flex items-center gap-1 h-full p-2 text-black " +
      classNames?.wrapperClasses ?? "";
  const inputClasses = classNames?.inputClasses ?? "";
  const labelClasses = classNames?.labelClasses ?? "";

  return (
    <div className={wrapperClasses}>
      <label className={labelClasses} htmlFor="">
        {label}
      </label>
      <input
        id={id}
        type="text"
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={handleInputChange}
        className={inputClasses}
        autoComplete="off"
        onKeyDown={onKeyDown}
      />
    </div>
  );
}
