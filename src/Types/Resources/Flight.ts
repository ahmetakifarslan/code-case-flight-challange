import { FareCategoryStatus } from "../Constants/Constants";

export interface Root {
  flights: Flight[];
}

export type Flights = Flight[];

export interface Flight {
  id: string;
  originAirport: Airport;
  destinationAirport: Airport;
  arrivalDateTimeDisplay: string;
  departureDateTimeDisplay: string;
  flightDuration: string;
  fareCategories: FareCategories;
}

export interface Airport {
  name: string;
  code: string;
  city: City;
  country: Country;
}

export interface City {
  code: string;
  name: string;
}

export interface Country {
  code: string;
  name: string;
}

export interface FareCategories {
  BUSINESS: Business;
  ECONOMY: Economy;
}

export interface Business {
  subcategories: Subcategory[];
}

export interface Economy {
  subcategories: Subcategory[];
}

export interface Subcategory {
  brandCode: string;
  price: Price;
  order: number;
  status: FareCategoryStatus;
  rights: string[];
}

export interface Price {
  amount: number;
  currency: string;
}
