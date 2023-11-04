// Types
import { APP_CONFIG } from "../../AppConfig";
import { OriginAirport, DestinationAirport } from "../../Types/flights";

interface Props {
  arrivalDateTimeDisplay: string;
  departureDateTimeDisplay: string;
  flightDuration: string;
  originAirport: OriginAirport;
  destinationAirport: DestinationAirport;
}

export default function FlightDetails({
  arrivalDateTimeDisplay,
  departureDateTimeDisplay,
  flightDuration,
  originAirport,
  destinationAirport,
}: Props) {
  return (
    <div className="flex items-center justify-between shadow-md flex-1 p-4 bg-white">
      <div className=" text-left ">
        <p className="font-bold">{arrivalDateTimeDisplay}</p>
        <p className="text-gray-500 font-medium">{originAirport.city.code}</p>
        <p className="text-gray-500 font-medium">{originAirport.city.name}</p>
      </div>
      <div className="h-px w-full bg-black"></div>
      <div className=" text-right ">
        <p className="font-bold">{departureDateTimeDisplay}</p>
        <p className="text-gray-500 font-medium">
          {destinationAirport.city.code}
        </p>
        <p className="text-gray-500 font-medium">
          {destinationAirport.city.name}
        </p>
      </div>

      <div className="w-[250px] pl-20">
        <p className="text-xs text-gray-500 font-medium">
          {APP_CONFIG.pages.listPage.flightCard.flightDuration}
        </p>
        <p className="text-xl font-bold">{flightDuration}</p>
      </div>
    </div>
  );
}
