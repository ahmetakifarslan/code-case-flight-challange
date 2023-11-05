import { Flight, Flights } from "../../Types/Resources/Flight";

export function applyDiscountByRate(
  flightsList: Flights,
  discountRate: number
): Flight[] {
  const discountedFlights = JSON.parse(JSON.stringify(flightsList));
  discountedFlights.map((flight: Flight) => {
    Object.keys(flight.fareCategories).forEach((fareCategory) => {
      flight.fareCategories[fareCategory].subcategories = flight.fareCategories[
        fareCategory
      ].subcategories.map((subcategory) => {
        if (subcategory.brandCode === "ecoFly") {
          const price = subcategory.price.amount;
          subcategory.price.amount = price * discountRate;
        }
        return subcategory;
      });
    });
    return flight;
  });

  return discountedFlights;
}
