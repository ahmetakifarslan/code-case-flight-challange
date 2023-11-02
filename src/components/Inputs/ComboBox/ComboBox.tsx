import { useState, ChangeEvent } from "react";

import { Flight } from "../../../types/flights";

interface Props<T> {
  placeholder: string;
  icon?: React.ReactNode;
  value: T;
  name: string;
  onChange: (e: T) => void;
  validator?: (value: T) => boolean;
}

export default function ComboBox({
  icon,
  placeholder,
  onChange,
  value,
  name,
  validator,
}: Props<string>) {
  const [error, setError] = useState(false);
  const flights = [
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

  const [dropDownItems, setDropDownItems] = useState<Flight[]>([]);
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    // setValue(event.target.value);
    // setDropDownItems(filterFlights(event.target.value));
    // console.log(dropDownItems);

    if (validator) {
      setError(!validator(event.target.value));
      console.log(error);
    }
    onChange(event.target.value);
  }

  function filterFlights(param: string) {
    return flights.filter((p) => {
      return p.originAirport.name.toLowerCase().includes(param.toLowerCase());
    });
  }

  return (
    <div className="h-full w-full">
      <div className="flex items-stretch border-2 h-full bg-white">
        <span className="p-2">{icon}</span>
        <input
          className="border-0 focus:border-transparent focus:ring-0 focus:outline-none p-2 flex-1"
          type="text"
          name={name}
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
        />
      </div>

      <div className="dropdown">
        {dropDownItems.map((p, index) => (
          <p key={index}>{p.originAirport.name}</p>
        ))}
      </div>
    </div>
  );
}
