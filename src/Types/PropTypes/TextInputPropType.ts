import { ChangeEvent, KeyboardEvent, ReactNode } from "react";

export interface TextInputProps {
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
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
}
