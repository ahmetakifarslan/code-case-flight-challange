import { ChangeEvent } from "react";

export interface RadioButtonProps {
  id?: string;
  name: string;
  label: string;
  value: string;
  checked?: boolean;
  classNames?: {
    wrapperClasses?: string;
    inputClasses?: string;
    labelClasses?: string;
  };
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function RadioButton({
  id,
  name,
  label,
  value,
  checked,
  onChange,
  classNames,
}: RadioButtonProps) {
  const wrapperClasses =
    "flex items-center gap-1 " + classNames?.wrapperClasses ?? "";
  const inputClasses = classNames?.inputClasses ?? "";
  const labelClasses = classNames?.labelClasses ?? "";
  return (
    <div className={wrapperClasses}>
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className={inputClasses}
      />
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
    </div>
  );
}
