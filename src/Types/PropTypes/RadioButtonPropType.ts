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
