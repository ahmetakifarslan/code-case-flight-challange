import { useState } from "react";
import { SwitchProps } from "../../Types/PropTypes/SwitchPropType";

const Switch = ({ onChange, initialState }: SwitchProps) => {
  const [isOn, setIsOn] = useState(initialState);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    onChange(!isOn);
  };

  const closedLabel = null;
  const openedLabel = null;

  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      {closedLabel && <span className="text-gray-600">{closedLabel}</span>}
      <div
        className={`w-12 h-6 flex items-center p-1 rounded-full ${
          isOn ? "bg-blue-500" : "bg-gray-300"
        }`}
        onClick={toggleSwitch}
      >
        <div
          className={`w-5 h-5 rounded-full shadow-md transform duration-300 ${
            isOn ? "translate-x-6" : "translate-x-0"
          } bg-white`}
        ></div>
      </div>
      {openedLabel && <span className="text-gray-600">{openedLabel}</span>}
    </label>
  );
};

export default Switch;
