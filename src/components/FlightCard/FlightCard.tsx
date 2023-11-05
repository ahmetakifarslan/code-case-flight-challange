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

// Config
import { APP_CONFIG } from "../../AppConfig";

export default function FlightCard({ flight }: { flight: Flight }) {
  const [category, setCategory] = useState<FareCategories>(
    "" as FareCategories
  );
  const [subCategories, setSubCategories] = useState<Subcategory[]>([]);

  const navigate = useNavigate();

  const selectCategory = (category: FareCategories) => {
    setCategory(category);
    const subCategories = flight.fareCategories[category].subcategories;
    setSubCategories(subCategories);
  };

  function handleSubcategoryClick(subcategory: string) {
    navigate(APP_CONFIG.lang.tr.pages.cabinSelectionPage.route, {
      state: { selectedCategory: subcategory },
    });
  }

  function compareFareCategories(a: FareCategories, b: FareCategories) {
    if (a === FareCategoriesEnum.ECONOMY && b === FareCategoriesEnum.BUSINESS) {
      return -1;
    }
    return 0;
  }

  useEffect(() => {
    if (category) {
      const subCategories = flight.fareCategories[category].subcategories;
      setSubCategories(subCategories);
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

        {(Object.keys(flight.fareCategories) as FareCategories[])
          .sort(compareFareCategories)
          .map((fareCategory: FareCategories) => {
            return (
              <FareCategory
                key={fareCategory}
                categoryName={FareCategoriesEnum[fareCategory]}
                activeCategory={category}
                fareCategory={flight.fareCategories[fareCategory]}
                onClick={selectCategory}
              />
            );
          })}
      </div>

      {!!subCategories.length && (
        <FareCategoryDetails
          fareSubcategories={subCategories}
          onClick={handleSubcategoryClick}
        />
      )}
    </div>
  );
}
