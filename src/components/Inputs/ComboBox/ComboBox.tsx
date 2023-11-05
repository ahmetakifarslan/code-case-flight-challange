import { useState, ChangeEvent } from "react";

import { TextInput } from "../TextInput/TextInput";

import { Airport, Flights } from "../../../Types/Resources/Flight";
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
  const [error, setError] = useState(true);
  const flightsList = useSelector(
    (state: RootState) => state.flightsData.flightsList
  );
  const [dropdownItems, setDropdownItems] = useState<Airport[]>([]);
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (validator) {
      setError(!validator(event.target.value));
    }
    onChange(event.target.value);
    setDropdownItems(getFilteredAirports(event.target.value, flightsList));
  }

  function getFilteredAirports(
    querytext: string,
    flightsList: Flights
  ): Airport[] {
    const filteredAirports = [];
    const seenAirportNames = new Set();

    for (const flight of flightsList) {
      const airportObj = flight[name];

      const airportName = airportObj.name.toLowerCase().replace(/\s/g, "");

      if (
        airportName.includes(querytext) &&
        !seenAirportNames.has(airportObj.name)
      ) {
        filteredAirports.push(airportObj);
        seenAirportNames.add(airportObj.name);
      }
    }

    return filteredAirports;
  }

  function selectAirpor(airport: Airport) {
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
        selectAirpor(selectedItem);
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
        <div className="absolute top-full w-full z-10">
          <ComboBoxDropdown
            dropdownItems={dropdownItems}
            selectedIndex={selectedItemIndex}
            onClick={selectAirpor}
          />
        </div>
      )}
    </div>
  );
}
