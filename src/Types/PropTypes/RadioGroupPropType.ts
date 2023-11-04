import { ChangeEvent, ReactElement } from "react";
import { RadioButtonProps } from "./RadioButtonPropType";

export interface RadioGroupProps {
  selectedValue: string;
  wrapperClasses?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  children: ReactElement<RadioButtonProps>[];
}
