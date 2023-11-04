import { Flights } from "../../Types/Resources/Flight";

export function filterFlightsByCity(
  originAirportCityName: string,
  destinationAirportCityName: string,
  flightsList: Flights
) {
  const filteredFlights = flightsList.filter((flight) => {
    return (
      flight.originAirport.city.name.toLocaleLowerCase() ===
        originAirportCityName.toLocaleLowerCase() &&
      flight.destinationAirport.city.name.toLocaleLowerCase() ===
        destinationAirportCityName.toLocaleLowerCase()
    );
  });

  return filteredFlights;
}
