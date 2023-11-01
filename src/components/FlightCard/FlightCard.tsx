import { useState } from "react";
import { Flight } from "../../types/flights";
import { v4 as uuidv4 } from "uuid";
import { FareCategoriesEnum } from "../../types/constants";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onSelectFlight } from "../../redux/features/flights/flightsSlice";

export default function FlightCard({ flight }: { flight: Flight }) {
  const [activeCategory, setActiveCategory] = useState("");
  const [fareSubcategories, setFareSubcategories] = useState(null);
  const hasPromotion = useSelector((state) => state.flights.hasPromotion);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFareCategoryChange = (category: string) => {
    setActiveCategory(category);
    const subCategories = flight.fareCategories[category].subcategories;
    setFareSubcategories(subCategories);
  };

  function handleClick(flight) {
    console.log(flight);
    dispatch(onSelectFlight(flight));
    navigate("/cabin-selection");
  }

  return (
    <div key={uuidv4()}>
      <div className="flex items-stretch gap-2 h-[140px]">
        <div className="flex items-center justify-between shadow-md flex-1 p-4 bg-white">
          <div className=" text-left ">
            <p className="font-bold">{flight.arrivalDateTimeDisplay}</p>
            <p className="text-gray-500 font-medium">
              {flight.originAirport.city.code}
            </p>
            <p className="text-gray-500 font-medium">
              {flight.originAirport.city.name}
            </p>
          </div>
          <div className="h-px w-full bg-black"></div>
          <div className=" text-right ">
            <p className="font-bold">{flight.departureDateTimeDisplay}</p>
            <p className="text-gray-500 font-medium">
              {flight.destinationAirport.city.code}
            </p>
            <p className="text-gray-500 font-medium">
              {flight.destinationAirport.city.name}
            </p>
          </div>

          <div className="w-[250px] pl-20">
            <p className="text-xs text-gray-500 font-medium">Uçuş Süresi</p>
            <p className="text-xl font-bold">{flight.flightDuration}</p>
          </div>
        </div>

        <div
          className={`${
            activeCategory === FareCategoriesEnum.economy
              ? "ml-auto p-4 min-w-[200px] flex items-center bg-white relative after:absolute after:-bottom-[20px] after:left-0 after:content-[''] after:h-[40px] after:bg-white after:w-full"
              : "ml-auto p-4 min-w-[200px] flex items-center bg-white relative shadow-default"
          }`}
        >
          <div className="flex items-center">
            <input
              id={FareCategoriesEnum.economy}
              type="radio"
              name="fareCategory"
              value={FareCategoriesEnum.economy}
              checked={activeCategory === FareCategoriesEnum.economy}
              onChange={(event) => handleFareCategoryChange(event.target.value)}
            />
            <label
              htmlFor={FareCategoriesEnum.economy}
              className="ml-1 text-sm text-gray-500 font-medium underline underline-offset-4"
            >
              ECONOMY
            </label>
          </div>
          <div className="text-left ml-4">
            <p className="text-xs text-gray-500">Yolcu Başına</p>
            <p className="font-bold">
              <span className="mr-1">
                {flight.fareCategories.ECONOMY.subcategories[0].price.currency}
              </span>
              <span>
                {flight.fareCategories.ECONOMY.subcategories[0].price.amount}
              </span>
            </p>
          </div>
        </div>
        <div
          className={`${
            activeCategory === FareCategoriesEnum.business
              ? "ml-auto p-4 min-w-[200px] flex items-center bg-white relative after:absolute after:-bottom-[20px] after:left-0 after:content-[''] after:h-[40px] after:bg-white after:w-full"
              : "ml-auto p-4 min-w-[200px] flex items-center bg-white relative shadow-default"
          }`}
        >
          <div className="flex items-center">
            <input
              id={FareCategoriesEnum.business}
              type="radio"
              name="fareCategory"
              value={FareCategoriesEnum.business}
              checked={activeCategory === FareCategoriesEnum.business}
              onChange={(event) => handleFareCategoryChange(event.target.value)}
            />
            <label
              htmlFor={FareCategoriesEnum.business}
              className="ml-1 text-sm text-gray-500 font-medium underline underline-offset-4"
            >
              BUSINESS
            </label>
          </div>
          <div className="text-left ml-4">
            <p className="text-xs text-gray-500">Yolcu Başına</p>
            <p className="font-bold">
              <span className="mr-1">
                {flight.fareCategories.BUSINESS.subcategories[0].price.currency}
              </span>
              <span>
                {flight.fareCategories.BUSINESS.subcategories[0].price.amount}
              </span>
            </p>
            <p></p>
          </div>
        </div>
      </div>
      {fareSubcategories && (
        <div className="flex gap-4 my-4 bg-white p-4 ">
          {fareSubcategories.map((item) => {
            return (
              <div
                key={uuidv4()}
                className="flex flex-col justify-between flex-1 shadow-md bg-[#f9f9f9]"
              >
                <div className="flex justify-between items-center pt-4 py-8 px-4">
                  <p className="font-bold capitalize">{item.brandCode}</p>
                  <p className="flex items-start gap-1">
                    <span className="text-sm ">{item.price.currency}</span>
                    <span className="text-xl font-bold">
                      {item.price.amount}
                    </span>
                  </p>
                </div>
                <ul className="bg-white flex-1 mx-1 min-h-[240px]">
                  {item.rights.map((item) => (
                    <li
                      key={uuidv4()}
                      className="border-b-2 border-black-400 p-2"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                {item.brandCode}
                {hasPromotion ? "true" : "false"}
                {hasPromotion && item.brandCode == "ecoFly"
                  ? "disabled - true"
                  : "disabled -false"}

                {hasPromotion ? (
                  <button
                    disabled={
                      item.status != "AVAILABLE" || item.brandCode != "ecoFly"
                    }
                    className={` w-full self-end text-white p-6 font-medium ${
                      item.status != "AVAILABLE" || item.brandCode === "ecoFly"
                        ? "bg-red-500"
                        : "bg-gray-500 bg-opacity-60"
                    }`}
                  >
                    Uçuşu Seç
                  </button>
                ) : (
                  <button
                    disabled={item.status != "AVAILABLE"}
                    className={` w-full self-end text-white p-6 font-medium ${
                      item.status === "AVAILABLE"
                        ? "bg-red-500"
                        : "bg-gray-500 bg-opacity-60"
                    }`}
                    onClick={() => {
                      handleClick(item);
                    }}
                  >
                    Uçuşu Seç
                  </button>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
