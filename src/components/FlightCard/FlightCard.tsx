import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
import { APP_CONFIG } from "../../AppConfig";

export default function FlightCard({ flight }: { flight: Flight }) {
  const [activeCategory, setActiveCategory] = useState<FareCategories>(
    "" as FareCategories
  );
  const [fareSubcategories, setFareSubcategories] =
    useState<Subcategory | null>(null);

  const navigate = useNavigate();

  const handleFareCategoryChange = (category: FareCategories) => {
    setActiveCategory(category);
    const subCategories = flight.fareCategories[category].subcategories;
    setFareSubcategories(subCategories);
  };

  function handleClick(subcategory: string) {
    navigate(APP_CONFIG.pages.cabinSelectionPage.route, {
      state: { selectedCategory: subcategory },
    });
  }

  useEffect(() => {
    if (activeCategory) {
      const subCategories = flight.fareCategories[activeCategory].subcategories;
      setFareSubcategories(subCategories);
    }
  }, [flight]);

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
