export interface Airport {
  name: string;
  code: string;
  city: {
    code: string;
    name: string;
  };
  country: {
    code: string;
    name: string;
  };
}

// TODO: Subcategory => FlightOption
export interface Subcategory {
  brandCode: string;
  price: {
    amount: number;
    currency: string;
  };
  order: number;
  status: "AVAILABLE" | "ERROR";
  rights: string[];
}

export interface ECONOMY {
  subcategories: Subcategory[];
}

export interface BUSINESS {
  subcategories: Subcategory[];
}

export interface FareCategory {
  ECONOMY: ECONOMY;
  BUSINESS: BUSINESS;
}

export interface Flight {
  id: string;
  originAirport: Airport;
  destinationAirport: Airport;
  arrivalDateTimeDisplay: string;
  departureDateTimeDisplay: string;
  flightDuration: string;
  fareCategories: FareCategory;
}
// TODO: Flights => FlightList
export type Flights = Flight[];
