import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from "react";

// Components
import RadioGroup from "../RadioGroup/RadioGroup";
import RadioButton from "../RadioButton/RadioButton";
import Counter from "./Counter";
import PassengerCountDropdown from "./PassengerCountDropdown";

// Types
import {
  FareCategories,
  FareCategoriesEnum,
} from "../../../Types/Constants/Constants";
import {
  PassengerCountForm,
  PassengerCountProps,
} from "../../../Types/PropTypes/PassengerCountPropType";

export default function PassengerCount({
  icon,
  onChange,
  passengerCount,
  fareCategory,
}: PassengerCountProps<PassengerCountForm>) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [showDropDown, setShowDropdown] = useState(false);

  function handleIconClick() {
    setShowDropdown(true);
  }

  function handleClickOutside(event: MouseEvent<HTMLElement>) {
    const isInsideClick = wrapperRef.current.contains(event.target as Node);
    setShowDropdown(isInsideClick);
  }

  function handleCounterClick(event: MouseEvent<HTMLElement>) {
    const count =
      event.target.name === "increase"
        ? passengerCount + 1
        : passengerCount === 1
        ? passengerCount
        : passengerCount - 1;

    const form = { fareCategory: fareCategory, passengerCount: count };
    onChange(form);
  }

  function handleCategorySelect(fareCagegory: FareCategories) {
    const form = {
      fareCategory: fareCagegory,
      passengerCount: 1,
    };
    onChange(form);
  }

  function handleRadioGroupChange(event: ChangeEvent<HTMLInputElement>) {
    handleCategorySelect(event.target.value as FareCategories);
  }

  useEffect(() => {
    showDropDown && document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [wrapperRef, showDropDown]);

  return (
    <div
      className="h-full w-full border-2 cursor-pointer text-black"
      onClick={handleIconClick}
      ref={wrapperRef}
    >
      <div className="flex items-center justify-center h-full bg-blue-950">
        <span>{icon}</span>
        <div className=" bg-red-500 px-2 text-white rounded">
          {passengerCount}
        </div>
      </div>

      {showDropDown && (
        <PassengerCountDropdown>
          <p className="text-gray-500 text-md">Kabin ve yolcu seçimi</p>

          <RadioGroup
            onChange={handleRadioGroupChange}
            selectedValue={fareCategory}
            wrapperClasses="my-3"
          >
            <RadioButton
              id={FareCategoriesEnum.economy}
              name="fareCategory"
              label="Economy Class"
              value={FareCategoriesEnum.economy}
              classNames={{
                labelClasses: "text-xs",
              }}
            />

            <RadioButton
              id={FareCategoriesEnum.business}
              name="fareCategory"
              label="Business Class"
              value={FareCategoriesEnum.business}
              classNames={{
                labelClasses: "text-xs",
              }}
            />
          </RadioGroup>

          <Counter
            count={passengerCount}
            increaseFn={handleCounterClick}
            decreaseFn={handleCounterClick}
          />
        </PassengerCountDropdown>
      )}
    </div>
  );
}
