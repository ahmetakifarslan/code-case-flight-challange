import { useState } from "react";
import { useSelector } from "react-redux";

// Types
import { Flight } from "../../Types/flights";
import FlightCard from "../FlightCard/FlightCard";

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

  // useEffect(() => {
  //   SetlistSortByEconomy(fligts.sort);
  //   SetlistSortByDate(fligts.sort);
  // }, [flights]);

  return (
    <>
      <div className="bg-sky-900 text-white p-4 flex gap-2 items-center justify-end">
        <span className="mr-4">Sıralama Kriterleri</span>
        <button
          className="border p-2 rounded"
          onClick={() => handleClick("economy")}
        >
          Ekonomi Ücreti
        </button>
        <button
          className="border p-2 rounded"
          onClick={() => handleClick("arrivalDateTimeDisplay")}
        >
          Kalkış saati
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
