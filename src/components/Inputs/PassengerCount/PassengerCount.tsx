import { ChangeEvent, useEffect, useRef, useState } from "react";
import { FareCategories, FareCategoriesEnum } from "../../../types/constants";
import RadioButton from "../RadioButton/RadioButton";
import Counter from "./Counter";
import RadioGroup from "../RadioGroup/RadioGroup";

export interface PassengerCountForm {
  fareCategory: FareCategories;
  passengerCount: number;
}

interface Props {
  icon?: React.ReactNode;
  fareCategory: FareCategories;
  passengerCount: number;
  onChange: (form: PassengerCountForm) => void;
  onClick: (width: number) => void;
}

export default function PassengerCount({
  icon,
  onChange,
  passengerCount,
  fareCategory,
}: Props) {
  const wrapperRef = useRef();

  const [showDropDown, setShowDropdown] = useState(false);

  const [radioGroupValue, setRadioGroupValue] = useState<FareCategories>(
    FareCategoriesEnum.economy
  );

  function increase(event) {
    console.log(event);
    event.stopPropagation();
    const form = { fareCategory, passengerCount: passengerCount + 1 };
    onChange(form);
  }

  function decrease(event) {
    event.stopPropagation();

    const form = { fareCategory, passengerCount: passengerCount - 1 };
    onChange(form);
  }

  function handleCategorySelect(event: ChangeEvent<HTMLInputElement>) {
    const form = {
      fareCategory: event.target.value,
      passengerCount: 1,
    };
    onChange(form);
  }

  function handleClick(event: any) {
    setShowDropdown(true);
  }

  function handleClickOutside(event) {
    const isInsideClick =
      wrapperRef.current && !wrapperRef.current.contains(event.target);
    setShowDropdown(!isInsideClick);
  }

  function handleRadioGroupChange(event: ChangeEvent<HTMLInputElement>) {
    setRadioGroupValue(event.target.value as FareCategories);
  }

  // useEffect(() => {
  //   // showDropDown && document.addEventListener("click", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // }, [wrapperRef, showDropDown]);

  return (
    <div
      className="h-full w-full border-2 cursor-pointer text-black"
      onClick={handleClick}
      ref={wrapperRef}
    >
      <div className="flex items-center justify-center h-full bg-blue-950">
        <span>{icon}</span>
        <div className=" bg-red-500 px-2 text-white rounded">
          {passengerCount}
        </div>
      </div>
      {showDropDown && (
        <div className="overlay absolute w-full mt-3 left-1/2 -translate-x-2/4 bg-white shadow-md p-4 top-full">
          <svg
            className="absolute text-white h-4 bottom-full rotate-180"
            style={{ left: 150 }}
            x="0px"
            y="0px"
            viewBox="0 0 255 255"
          >
            <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
          </svg>

          <p className="text-gray-500 text-md">Kabin ve yolcu seçimi</p>

          <RadioGroup
            onChange={handleRadioGroupChange}
            selectedValue={radioGroupValue}
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
            increaseFn={increase}
            decreaseFn={decrease}
          />
        </div>
      )}
    </div>
  );
}
