// Types
import { APP_CONFIG } from "../../AppConfig";
import { Airport } from "../../Types/Resources/Flight";

interface Props {
  arrivalDateTimeDisplay: string;
  departureDateTimeDisplay: string;
  flightDuration: string;
  originAirport: Airport;
  destinationAirport: Airport;
}

export default function FlightDetails({
  arrivalDateTimeDisplay,
  departureDateTimeDisplay,
  flightDuration,
  originAirport,
  destinationAirport,
}: Props) {
  const airportDetails = (airport: Airport) => (
    <>
      <p className="text-gray-500 font-medium">{airport.city.code}</p>
      <p className="text-gray-500 font-medium">{airport.city.name}</p>
    </>
  );

  return (
    <div className="flex items-center justify-between shadow-md flex-1 p-4 bg-white">
      <div className="text-left">
        <p className="font-bold">{arrivalDateTimeDisplay}</p>
        {airportDetails(originAirport)}
      </div>
      <div className="h-px w-full bg-black"></div>
      <div className="text-right">
        <p className="font-bold">{departureDateTimeDisplay}</p>
        {airportDetails(destinationAirport)}
      </div>
      <div className="w-[250px] pl-20">
        <p className="text-xs text-gray-500 font-medium">
          {
            APP_CONFIG.lang.tr.pages.listPage.staticTexts.flightCard
              .flightDuration
          }
        </p>
        <p className="text-xl font-bold">{flightDuration}</p>
      </div>
    </div>
  );
}
