import { ChangeEvent, useEffect, useRef, useState } from "react";
import { FareCategories, FareCategoriesEnum } from "../../../types/constants";
import RadioButton from "../RadioButton/RadioButton";

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
          <div className="p-2">
            <p className="text-gray-500 mb-2 text-md">Kabin ve yolcu seçimi</p>
            <div className="radio-group flex items-center justify-between mb-2">
              <RadioButton
                id={FareCategoriesEnum.economy}
                name="fareCategory"
                label="Economy Class"
                value={FareCategoriesEnum.economy}
                checked={fareCategory === FareCategoriesEnum.economy}
                onChange={handleCategorySelect}
                classNames={{
                  labelClasses: "text-xs",
                }}
              />

              <RadioButton
                id={FareCategoriesEnum.business}
                name="fareCategory"
                label="Business Class"
                value={FareCategoriesEnum.business}
                checked={fareCategory === FareCategoriesEnum.business}
                classNames={{
                  labelClasses: "text-xs",
                }}
                onChange={handleCategorySelect}
              />
            </div>
            <div className="flex justify-between items-center ">
              <p className="text-md">Yolcu</p>
              <div className="flex items-center">
                <button
                  type="button"
                  className="bg-gray-500 bg-opacity-30 h-8 w-8 rounded"
                  onClick={decrease}
                >
                  -
                </button>
                <p className="w-8 text-center">{passengerCount}</p>
                <button
                  type="button"
                  className="bg-gray-500 bg-opacity-30 h-8 w-8 rounded"
                  onClick={increase}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
