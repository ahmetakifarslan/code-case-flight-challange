import ToolTipArrowIcon from "../../../Assets/Images/Icons/tooltip-arrow.svg?react";
import { PassengerCountDropdownProps } from "../../../Types/PropTypes/PassengerCountPropType";

export default function PassengerCountDropdown({
  children,
}: PassengerCountDropdownProps) {
  return (
    <div className="overlay absolute w-full mt-3 left-1/2 -translate-x-2/4 bg-white shadow-md p-4 top-full">
      <ToolTipArrowIcon
        className="absolute text-white h-4 bottom-full rotate-180"
        style={{ left: 150 }}
      />
      {children}
    </div>
  );
}
