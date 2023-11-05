import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import FlightDetails from "./FlightCardFlightDetails";
import FareCategory from "./FlightCardFareCategory";
import FareCategoryDetails from "./FlightCardFareCategoryDetails";

import { Subcategory } from "../../Types/Resources/Flight";
import {
  FareCategories,
  FareCategoriesEnum,
} from "../../Types/Constants/Constants";

import { APP_CONFIG } from "../../AppConfig";
import { FlightCardNameSpace } from "../../Types/PropTypes/FlightCardPropType";
import { formatPrice } from "../../Utils/Helpers/FormatPrice";

export default function FlightCard({ flight }: FlightCardNameSpace.Props) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const passengerCountParam = searchParams.get("passengerCount");
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

  function handleSubcategoryClick(subcategory: Subcategory) {
    const passengerCount = Number(passengerCountParam);
    const newPriceAmount = subcategory.price.amount * passengerCount;

    const updatedSubCategory = {
      ...subcategory,
      price: {
        ...subcategory.price,
        amount: formatPrice(newPriceAmount),
      },
    };

    navigate(APP_CONFIG.lang.tr.pages.cabinSelectionPage.route, {
      state: { selectedCategory: updatedSubCategory },
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
  }, [flight, category]);

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
                radioGroupName={flight.id}
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
