import { useState } from "react";
import { Flight, Subcategory } from "../../types/flights";
import { FareCategories, FareCategoriesEnum } from "../../types/constants";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onSelectFlight } from "../../redux/features/flights/flightsSlice";
import FlightDetails from "./FlightDetails";
import FareCategory from "./FareCategory";
import FareCategoryDetails from "./FareCategoryDetails";

export default function FlightCard({ flight }: { flight: Flight }) {
  const [activeCategory, setActiveCategory] = useState<FareCategories>(
    "" as FareCategories
  );
  const [fareSubcategories, setFareSubcategories] =
    useState<Subcategory | null>(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFareCategoryChange = (category: FareCategories) => {
    setActiveCategory(category);
    const subCategories = flight.fareCategories[category].subcategories;
    setFareSubcategories(subCategories);
  };

  // function handleClick(flight) {
  //   console.log(flight);
  //   dispatch(onSelectFlight(flight));
  //   navigate("/cabin-selection");
  // }

  return (
    <div className="card">
      <div className="flex gap-2">
        <FlightDetails
          arrivalDateTimeDisplay={flight.arrivalDateTimeDisplay}
          departureDateTimeDisplay={flight.departureDateTimeDisplay}
          destinationAirport={flight.destinationAirport}
          originAirport={flight.originAirport}
          flightDuration={flight.flightDuration}
        ></FlightDetails>
        <FareCategory
          fareCategory={flight.fareCategories.ECONOMY}
          activeCategory={activeCategory}
          categoryName={FareCategoriesEnum.economy}
          onClick={handleFareCategoryChange}
        ></FareCategory>
        <FareCategory
          fareCategory={flight.fareCategories.BUSINESS}
          activeCategory={activeCategory}
          categoryName={FareCategoriesEnum.business}
          onClick={handleFareCategoryChange}
        ></FareCategory>
      </div>

      {fareSubcategories && (
        <FareCategoryDetails fareSubcategories={fareSubcategories} />
      )}
    </div>
  );
}
