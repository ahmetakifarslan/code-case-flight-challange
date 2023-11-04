export interface ComboboxProps<T> {
  placeholder: string;
  icon?: React.ReactNode;
  value: T;
  name: string;
  onChange: (e: T) => void;
  validator?: (value: T) => boolean;
}

export interface ComboBoxDropDownProps<T> {
  dropdownItems: T[];
  selectedIndex: number;
  onClick: (airport: T) => void;
}
