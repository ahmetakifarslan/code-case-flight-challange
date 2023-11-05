import { useState } from "react";
import { Flight } from "../../Types/Resources/Flight";
import FlightCard from "../FlightCard/FlightCard";
import { APP_CONFIG } from "../../AppConfig";

type SortType = "economy" | "arrivalDateTimeDisplay";

const sortFunctions: Record<SortType, (a: Flight, b: Flight) => number> = {
  economy: (a, b) =>
    a.fareCategories.ECONOMY.subcategories[0].price.amount -
    b.fareCategories.ECONOMY.subcategories[0].price.amount,
  arrivalDateTimeDisplay: (a, b) =>
    a.arrivalDateTimeDisplay.localeCompare(b.arrivalDateTimeDisplay),
};

export default function FlightList({ flightList }: { flightList: Flight[] }) {
  const [sortFlightsBy, setSortFlightsBy] = useState<SortType>("economy");
  const sortedFlights = [...flightList].sort(sortFunctions[sortFlightsBy]);

  function handleClick(sortType: SortType) {
    setSortFlightsBy(sortType);
  }

  return (
    <>
      <div className="bg-sky-900 text-white p-4 flex gap-2 items-center justify-end">
        <span className="mr-4">
          {APP_CONFIG.lang.tr.pages.listPage.staticTexts.sortOptions.title}
        </span>
        <button
          className="border p-2 rounded"
          onClick={() => handleClick("economy")}
        >
          {
            APP_CONFIG.lang.tr.pages.listPage.staticTexts.sortOptions
              .economyLabel
          }
        </button>
        <button
          className="border p-2 rounded"
          onClick={() => handleClick("arrivalDateTimeDisplay")}
        >
          {
            APP_CONFIG.lang.tr.pages.listPage.staticTexts.sortOptions
              .arrivalTimeLabel
          }
        </button>
      </div>

      <ul className="p-6 flex bg-gray-100 flex-col gap-4">
        {sortedFlights.map((item) => (
          <li key={item.id}>
            <FlightCard flight={item} />
          </li>
        ))}
      </ul>
    </>
  );
}
