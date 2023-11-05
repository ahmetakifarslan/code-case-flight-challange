import { Flights } from "../../Types/Resources/Flight";

export function airportValidator(
  location: string,
  flightsList: Flights,
  keyName: "destinationAirport" | "originAirport"
): boolean {
  location = location.toLocaleLowerCase();

  const exists = flightsList.some((flight) => {
    return flight[keyName].city.name.toLocaleLowerCase() === location;
  });

  return !exists;
}

export function requiredValidator(value: string) {
  return value === "";
}
