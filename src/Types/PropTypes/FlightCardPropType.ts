import { MouseEvent } from "react";
import { FareCategories } from "../Constants/Constants";
import {
  Airport,
  BUSINESS,
  SubcategoryBrandCode,
  ECONOMY,
  Flight,
  Subcategory,
} from "../Resources/Flight";

export namespace FlightCardNameSpace {
  export interface Props {
    flight: Flight;
  }

  export interface FlightCardFareCategoryProps {
    activeCategory: FareCategories;
    categoryName: FareCategories;
    fareCategory: ECONOMY | BUSINESS;
    onClick: (fareCategory: FareCategories) => void;
  }

  export interface FareCategoryDetailsProps {
    fareSubcategories: Subcategory[];
    onClick: (subCategory: Subcategory) => void;
  }

  export interface FlightDetailsProps {
    arrivalDateTimeDisplay: string;
    departureDateTimeDisplay: string;
    flightDuration: string;
    originAirport: Airport;
    destinationAirport: Airport;
  }

  export interface FlightSelectButtonProps {
    brandCode: SubcategoryBrandCode;
    label: string;
    hasPromotion: boolean;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  }
}
