import { useState } from "react";
import { useSelector } from "react-redux";

// Types
import { Flight } from "../../Types/flights";
import FlightCard from "../FlightCard/FlightCard";
import { APP_CONFIG } from "../../AppConfig";

type SortType = "economy" | "arrivalDateTimeDisplay";

const sortFunctions = {
  economy: (a, b) =>
    a.fareCategories.ECONOMY.subcategories[0].price.amount -
    b.fareCategories.ECONOMY.subcategories[0].price.amount,
  arrivalDateTimeDisplay: (a, b) =>
    a.arrivalDateTimeDisplay - b.arrivalDateTimeDisplay,
};

export default function FlightList({ flightList }) {
  const [sortFlightsBy, setSortFlightsBy] = useState("economy");
  const sortedFlights = [...flightList].sort(sortFunctions[sortFlightsBy]);

  function handleClick(params: SortType) {
    setSortFlightsBy(params);
  }

  return (
    <>
      <div className="bg-sky-900 text-white p-4 flex gap-2 items-center justify-end">
        <span className="mr-4">
          {APP_CONFIG.pages.listPage.sortOptions.title}
        </span>
        <button
          className="border p-2 rounded"
          onClick={() => handleClick("economy")}
        >
          {APP_CONFIG.pages.listPage.sortOptions.economyLabel}
        </button>
        <button
          className="border p-2 rounded"
          onClick={() => handleClick("arrivalDateTimeDisplay")}
        >
          {APP_CONFIG.pages.listPage.sortOptions.arrivalTimeLabel}
        </button>
      </div>

      <ul className="p-6 flex bg-gray-100 flex-col gap-4">
        {sortedFlights.map((item: Flight) => {
          return (
            <li key={item.id}>
              <FlightCard flight={item} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
