import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onSelectFlight } from "../../Store/Features/Fligths/flightsSlice";

// Components
import FlightDetails from "./FlightCardFlightDetails";
import FareCategory from "./FlightCardFareCategory";
import FareCategoryDetails from "./FlightCardFareCategoryDetails";

// Types
import { Flight, Subcategory } from "../../Types/Resources/Flight";
import {
  FareCategories,
  FareCategoriesEnum,
} from "../../Types/Constants/Constants";

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

  function handleClick(subcategory: string) {
    navigate("/cabin-selection", { state: { selectedCategory: subcategory } });
  }

  // Todo : geçilen propları referans objelerin kendisiyle değiştir

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
        <FareCategoryDetails
          fareSubcategories={fareSubcategories}
          onClick={handleClick}
        />
      )}
    </div>
  );
}
