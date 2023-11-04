import { useState, ChangeEvent } from "react";

// Components
import { TextInput } from "../TextInput/TextInput";

// Types
import { Airport, Flight } from "../../../Types/Resources/Flight";
import {
  ComboboxProps,
  ComboBoxDropDownProps,
} from "../../../Types/PropTypes/ComboBoxPropType";

function ComboBoxDropdown({
  dropdownItems,
  selectedIndex,
  onClick,
}: ComboBoxDropDownProps<Airport>) {
  console.log(selectedIndex);
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
  const [dropdownItems, setDropdownItems] = useState<Airport[]>([]);
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (validator) {
      setError(!validator(event.target.value));
      console.log(error);
    }
    onChange(event.target.value);
    setDropdownItems(getDropdownItems(event.target.value));
  }

  function getDropdownItems(querytext: string): Airport[] {
    const flights: Flight[] = [
      {
        originAirport: {
          name: "Istanbul Airport",
          code: "IST",
          city: {
            code: "IST",
            name: "Istanbul",
          },
          country: {
            code: "TR",
            name: "Turkey",
          },
        },
        destinationAirport: {
          name: "Antalya Airport",
          code: "AYT",
          city: {
            code: "AYT",
            name: "Antalya",
          },
          country: {
            code: "TR",
            name: "Turkey",
          },
        },
        arrivalDateTimeDisplay: "01:15",
        departureDateTimeDisplay: "02:45",
        flightDuration: "1s 30d",
        fareCategories: {
          BUSINESS: {
            subcategories: [
              {
                brandCode: "ecoFly",
                price: {
                  amount: 400.0,
                  currency: "TRY",
                },
                order: 1,
                status: "AVAILABLE",
                rights: ["20 kg Bagaj", "Ucresiz Yemek Secimi"],
              },
              {
                brandCode: "extraFly",
                price: {
                  amount: 500.0,
                  currency: "TRY",
                },
                order: 2,
                status: "AVAILABLE",
                rights: [
                  "30 kg Bagaj",
                  "Standart Koltuk Secimi",
                  "Ucresiz Yemek Secimi",
                ],
              },
              {
                brandCode: "primeFly",
                price: {
                  amount: 800.99,
                  currency: "TRY",
                },
                order: 3,
                status: "AVAILABLE",
                rights: [
                  "50 kg Bagaj",
                  "Standart Koltuk Secimi",
                  "Ucretsiz Degisiklik",
                  "Ucresiz Yemek Secimi",
                ],
              },
            ],
          },
          ECONOMY: {
            subcategories: [
              {
                brandCode: "ecoFly",
                price: {
                  amount: 242.0,
                  currency: "TRY",
                },
                order: 1,
                status: "AVAILABLE",
                rights: ["15 kg Bagaj"],
              },
              {
                brandCode: "extraFly",
                price: {
                  amount: 290.0,
                  currency: "TRY",
                },
                order: 2,
                status: "AVAILABLE",
                rights: ["20 kg Bagaj", "Standart Koltuk Secimi"],
              },
              {
                brandCode: "primeFly",
                price: {
                  amount: 351.99,
                  currency: "TRY",
                },
                order: 3,
                status: "AVAILABLE",
                rights: [
                  "25 kg Bagaj",
                  "Standart Koltuk Secimi",
                  "Ucretsiz Degisiklik",
                ],
              },
            ],
          },
        },
      },
      {
        originAirport: {
          name: "Istanbul Airport",
          code: "IST",
          city: {
            code: "IST",
            name: "Istanbul",
          },
          country: {
            code: "TR",
            name: "Turkey",
          },
        },
        destinationAirport: {
          name: "Antalya Airport",
          code: "AYT",
          city: {
            code: "AYT",
            name: "Antalya",
          },
          country: {
            code: "TR",
            name: "Turkey",
          },
        },
        arrivalDateTimeDisplay: "09:50",
        departureDateTimeDisplay: "11:20",
        flightDuration: "1s 30d",
        fareCategories: {
          BUSINESS: {
            subcategories: [
              {
                brandCode: "ecoFly",
                price: {
                  amount: 676.0,
                  currency: "TRY",
                },
                order: 1,
                status: "ERROR",
                rights: ["20 kg Bagaj", "Ucresiz Yemek Secimi"],
              },
              {
                brandCode: "extraFly",
                price: {
                  amount: 800.0,
                  currency: "TRY",
                },
                order: 2,
                status: "AVAILABLE",
                rights: [
                  "30 kg Bagaj",
                  "Standart Koltuk Secimi",
                  "Ucresiz Yemek Secimi",
                ],
              },
              {
                brandCode: "primeFly",
                price: {
                  amount: 1200.99,
                  currency: "TRY",
                },
                order: 3,
                status: "AVAILABLE",
                rights: [
                  "50 kg Bagaj",
                  "Standart Koltuk Secimi",
                  "Ucretsiz Degisiklik",
                  "Ucresiz Yemek Secimi",
                ],
              },
            ],
          },
          ECONOMY: {
            subcategories: [
              {
                brandCode: "ecoFly",
                price: {
                  amount: 250.0,
                  currency: "TRY",
                },
                order: 1,
                status: "AVAILABLE",
                rights: ["15 kg Bagaj"],
              },
              {
                brandCode: "extraFly",
                price: {
                  amount: 380.0,
                  currency: "TRY",
                },
                order: 2,
                status: "AVAILABLE",
                rights: ["20 kg Bagaj", "Standart Koltuk Secimi"],
              },
              {
                brandCode: "primeFly",
                price: {
                  amount: 470.99,
                  currency: "TRY",
                },
                order: 3,
                status: "ERROR",
                rights: [
                  "25 kg Bagaj",
                  "Standart Koltuk Secimi",
                  "Ucretsiz Degisiklik",
                ],
              },
            ],
          },
        },
      },
      {
        originAirport: {
          name: "Istanbul Airport",
          code: "IST",
          city: {
            code: "IST",
            name: "Istanbul",
          },
          country: {
            code: "TR",
            name: "Turkey",
          },
        },
        destinationAirport: {
          name: "Antalya Airport",
          code: "AYT",
          city: {
            code: "AYT",
            name: "Antalya",
          },
          country: {
            code: "TR",
            name: "Turkey",
          },
        },
        arrivalDateTimeDisplay: "11:25",
        departureDateTimeDisplay: "12:55",
        flightDuration: "1s 30d",
        fareCategories: {
          BUSINESS: {
            subcategories: [
              {
                brandCode: "ecoFly",
                price: {
                  amount: 692.0,
                  currency: "TRY",
                },
                order: 1,
                status: "AVAILABLE",
                rights: ["20 kg Bagaj", "Ucresiz Yemek Secimi"],
              },
              {
                brandCode: "extraFly",
                price: {
                  amount: 950.0,
                  currency: "TRY",
                },
                order: 2,
                status: "AVAILABLE",
                rights: [
                  "30 kg Bagaj",
                  "Standart Koltuk Secimi",
                  "Ucresiz Yemek Secimi",
                ],
              },
              {
                brandCode: "primeFly",
                price: {
                  amount: 1400.0,
                  currency: "TRY",
                },
                order: 3,
                status: "AVAILABLE",
                rights: [
                  "50 kg Bagaj",
                  "Standart Koltuk Secimi",
                  "Ucretsiz Degisiklik",
                  "Ucresiz Yemek Secimi",
                ],
              },
            ],
          },
          ECONOMY: {
            subcategories: [
              {
                brandCode: "ecoFly",
                price: {
                  amount: 368.0,
                  currency: "TRY",
                },
                order: 1,
                status: "AVAILABLE",
                rights: ["15 kg Bagaj"],
              },
              {
                brandCode: "extraFly",
                price: {
                  amount: 425.0,
                  currency: "TRY",
                },
                order: 2,
                status: "AVAILABLE",
                rights: ["20 kg Bagaj", "Standart Koltuk Secimi"],
              },
              {
                brandCode: "primeFly",
                price: {
                  amount: 580.99,
                  currency: "TRY",
                },
                order: 3,
                status: "ERROR",
                rights: [
                  "25 kg Bagaj",
                  "Standart Koltuk Secimi",
                  "Ucretsiz Degisiklik",
                ],
              },
            ],
          },
        },
      },
      {
        originAirport: {
          name: "Istanbul Airport",
          code: "IST",
          city: {
            code: "IST",
            name: "Istanbul",
          },
          country: {
            code: "TR",
            name: "Turkey",
          },
        },
        destinationAirport: {
          name: "Antalya Airport",
          code: "AYT",
          city: {
            code: "AYT",
            name: "Antalya",
          },
          country: {
            code: "TR",
            name: "Turkey",
          },
        },
        arrivalDateTimeDisplay: "18:20",
        departureDateTimeDisplay: "19:50",
        flightDuration: "1s 30d",
        fareCategories: {
          BUSINESS: {
            subcategories: [
              {
                brandCode: "ecoFly",
                price: {
                  amount: 670.0,
                  currency: "TRY",
                },
                order: 1,
                status: "AVAILABLE",
                rights: ["20 kg Bagaj", "Ucresiz Yemek Secimi"],
              },
              {
                brandCode: "extraFly",
                price: {
                  amount: 956.0,
                  currency: "TRY",
                },
                order: 2,
                status: "AVAILABLE",
                rights: [
                  "30 kg Bagaj",
                  "Standart Koltuk Secimi",
                  "Ucresiz Yemek Secimi",
                ],
              },
              {
                brandCode: "primeFly",
                price: {
                  amount: 1358.0,
                  currency: "TRY",
                },
                order: 3,
                status: "AVAILABLE",
                rights: [
                  "50 kg Bagaj",
                  "Standart Koltuk Secimi",
                  "Ucretsiz Degisiklik",
                  "Ucresiz Yemek Secimi",
                ],
              },
            ],
          },
          ECONOMY: {
            subcategories: [
              {
                brandCode: "ecoFly",
                price: {
                  amount: 195.0,
                  currency: "TRY",
                },
                order: 1,
                status: "AVAILABLE",
                rights: ["15 kg Bagaj"],
              },
              {
                brandCode: "extraFly",
                price: {
                  amount: 290.5,
                  currency: "TRY",
                },
                order: 2,
                status: "AVAILABLE",
                rights: ["20 kg Bagaj", "Standart Koltuk Secimi"],
              },
              {
                brandCode: "primeFly",
                price: {
                  amount: 458.0,
                  currency: "TRY",
                },
                order: 3,
                status: "AVAILABLE",
                rights: [
                  "25 kg Bagaj",
                  "Standart Koltuk Secimi",
                  "Ucretsiz Degisiklik",
                ],
              },
            ],
          },
        },
      },
    ];

    const cache = new Map();

    const airportNames: string[] = [];
    const dropDownItems = flights.reduce((unique: Airport[], flight) => {
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

        console.log("dro", selectedItem);
      }
    }
    console.log("lkdfdklsjfds");
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
