import { useSelector } from "react-redux";

import FlightSelectButton from "./FlightCardSelectButton";

import { v4 as uuidv4 } from "uuid";
import { RootState } from "../../Services/StoreService";
import { APP_CONFIG } from "../../AppConfig";
import { FlightCardNameSpace } from "../../Types/PropTypes/FlightCardPropType";
import { Subcategory } from "../../Types/Resources/Flight";

export default function FareCategoryDetails({
  fareSubcategories,
  onClick,
}: FlightCardNameSpace.FareCategoryDetailsProps) {
  const hasPromotion = useSelector(
    (state: RootState) => state.flightsData.hasPromotion
  );

  function handleClick(subCategory: Subcategory) {
    onClick(subCategory);
  }
  return (
    <div className="flex gap-4 my-4 bg-white p-4 ">
      {fareSubcategories.map((subCategory) => {
        return (
          <div
            key={uuidv4()}
            className="flex flex-col justify-between flex-1 shadow-md bg-[#f9f9f9]"
          >
            <div className="flex justify-between items-center pt-4 py-8 px-4">
              <p className="font-bold capitalize">{subCategory.brandCode}</p>
              <p className="flex items-start gap-1">
                <span className="text-sm ">{subCategory.price.currency}</span>
                <span className="text-xl font-bold">
                  {subCategory.price.amount}
                </span>
              </p>
            </div>
            <ul className="bg-white flex-1 mx-1 min-h-[240px]">
              {subCategory.rights.map((right: string) => (
                <li key={uuidv4()} className="border-b-2 border-black-400 p-2">
                  {right}
                </li>
              ))}
            </ul>

            <FlightSelectButton
              label={
                APP_CONFIG.lang.tr.pages.listPage.staticTexts.flightCard
                  .selectButtonLabel
              }
              brandCode={subCategory.brandCode}
              hasPromotion={hasPromotion}
              onClick={() => handleClick(subCategory)}
            />
          </div>
        );
      })}
    </div>
  );
}
