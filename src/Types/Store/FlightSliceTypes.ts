import { Flight, Flights } from "../Resources/Flight";

export interface FlightsState {
  loading: boolean;
  error: null | Error;
  flightsList: Flights;
  discountedFlights: Flights;
  hasPromotion: boolean;
  theme: "dark" | "light";
  selectedFlight: Flight | null;
}
