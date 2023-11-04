import { useState, ChangeEvent } from "react";

// Components
import { TextInput } from "../TextInput/TextInput";

// Types
import { Airport, Flight, Flights } from "../../../Types/Resources/Flight";
import {
  ComboboxProps,
  ComboBoxDropDownProps,
} from "../../../Types/PropTypes/ComboBoxPropType";
import { useSelector } from "react-redux";
import { RootState } from "../../../Services/StoreService";

function ComboBoxDropdown({
  dropdownItems,
  selectedIndex,
  onClick,
}: ComboBoxDropDownProps<Airport>) {
  return (
    <ul className="dropdown bg-white text-black">
      {dropdownItems.map((airport, index) => {
        return (
          <li
            key={index}
            className={`p-2 first:pt-3 last:pb-3 cursor-pointer hover:bg-gray-200 text-black ${
              selectedIndex === index ? "bg-gray-200" : ""
            }`}
            onClick={() => onClick(airport)}
          >
            {airport.name}
          </li>
        );
      })}
    </ul>
  );
}

export default function ComboBox({
  icon,
  placeholder,
  onChange,
  value,
  name,
  validator,
}: ComboboxProps<string>) {
  const [error, setError] = useState(false);
  const flightsList = useSelector(
    (state: RootState) => state.flightsData.flightsList
  );
  const [dropdownItems, setDropdownItems] = useState<Airport[]>([]);
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (validator) {
      setError(!validator(event.target.value));
      console.log(error);
    }
    onChange(event.target.value);
    setDropdownItems(getDropdownItems(event.target.value, flightsList));
  }

  function getDropdownItems(
    querytext: string,
    flightsList: Flights
  ): Airport[] {
    const cache = new Map();

    const airportNames: string[] = [];
    const dropDownItems = flightsList.reduce((unique: Airport[], flight) => {
      const airportObj = flight[name];
      const airportname = airportObj.name.toLowerCase().replace(/\s/g, "");

      if (
        airportname.includes(querytext) &&
        !airportNames.includes(airportObj.name)
      ) {
        airportNames.push(airportObj.name);
        unique.push(airportObj);
      }
      return unique;
    }, []);

    cache.set(querytext, dropDownItems);

    return querytext !== "" ? dropDownItems : [];
  }

  function handleDropdownItemClick(airport: Airport) {
    onChange(airport.city.name);
    setDropdownItems([]);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setSelectedItemIndex((prevIndex) =>
        Math.min(prevIndex + 1, dropdownItems.length - 1)
      );
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setSelectedItemIndex((prevIndex) => Math.max(prevIndex - 1, -1));
    } else if (event.key === "Enter") {
      if (selectedItemIndex >= 0) {
        event.preventDefault();
        const selectedItem = dropdownItems[selectedItemIndex];
        handleDropdownItemClick(selectedItem);
        setSelectedItemIndex(-1);
      }
    }
  }

  return (
    <div className="relative">
      <TextInput
        name={name}
        label={icon}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        classNames={{
          inputClasses:
            "border-0 p-2 flex-0 focus:border-transparent focus:ring-0 focus:outline-none",
        }}
        onKeyDown={handleKeyDown}
      />

      {!!dropdownItems.length && (
        <div className="absolute top-full w-full">
          <ComboBoxDropdown
            dropdownItems={dropdownItems}
            selectedIndex={selectedItemIndex}
            onClick={handleDropdownItemClick}
          />
        </div>
      )}
    </div>
  );
}
