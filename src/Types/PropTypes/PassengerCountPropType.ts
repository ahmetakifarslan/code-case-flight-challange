import { ReactNode } from "react";
import { FareCategories } from "../Constants/Constants";

export interface PassengerCountProps<T> {
  icon?: React.ReactNode;
  fareCategory: FareCategories;
  passengerCount: number;
  onChange: (form: T) => void;
}

export interface PassengerCountForm {
  fareCategory: FareCategories;
  passengerCount: number;
}

export interface PassengerCountDropdownProps {
  children: ReactNode;
}
