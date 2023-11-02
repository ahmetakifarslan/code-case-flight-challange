import React, { ChangeEvent, ReactElement } from "react";
import { RadioButtonProps } from "../RadioButton/RadioButton";

interface RadioGroupProps {
  selectedValue: string;
  wrapperClasses?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  children: ReactElement<RadioButtonProps>[];
}

export default function RadioGroup({
  selectedValue,
  wrapperClasses,
  onChange,
  children,
}: RadioGroupProps) {
  const wrapperClass = "flex items-center gap-2 " + wrapperClasses ?? "";
  const handleChildChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event);
  };

  return (
    <div className={wrapperClass}>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          onChange: handleChildChange,
          checked: child?.props.value === selectedValue,
        });
      })}
    </div>
  );
}
