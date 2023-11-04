import { RadioButtonProps } from "../../../Types/PropTypes/RadioButtonPropType";

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
