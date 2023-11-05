import { ChangeEvent } from "react";
import { TextInputProps } from "../../../Types/PropTypes/TextInputPropType";

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
      <label className={labelClasses} htmlFor={id}>
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
