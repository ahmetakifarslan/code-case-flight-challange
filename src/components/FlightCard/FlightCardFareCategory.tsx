import RadioButton from "../Inputs/RadioButton/RadioButton";

import { FlightCardNameSpace } from "../../Types/PropTypes/FlightCardPropType";
import { APP_CONFIG } from "../../AppConfig";
import { Subcategory } from "../../Types/Resources/Flight";
import { ChangeEvent } from "react";
import { FareCategories } from "../../Types/Constants/Constants";
import { formatPrice } from "../../Utils/Helpers/FormatPrice";

export default function FlightCardFareCategory({
  categoryName,
  activeCategory,
  fareCategory,
  radioGroupName,
  onClick,
}: FlightCardNameSpace.FlightCardFareCategoryProps) {
  const brandCodeQuery = "ecoFly";
  const ecoFly = fareCategory.subcategories.find(
    (subCat: Subcategory) => subCat.brandCode === brandCodeQuery
  );

  if (ecoFly) {
    const isActiveCategory = activeCategory === categoryName;
    const wrapperClassName = isActiveCategory
      ? "cursor-pointer ml-auto p-4 min-w-[200px] flex items-center bg-white relative after:absolute after:-bottom-[20px] after:left-0 after:content-[''] after:h-[40px] after:bg-white after:w-full"
      : "cursor-pointer ml-auto p-4 min-w-[200px] flex items-center bg-white relative shadow-default";

    const formattedPrice = formatPrice(ecoFly.price.amount).toString();

    return (
      <div className={wrapperClassName} onClick={() => onClick(categoryName)}>
        <RadioButton
          id={categoryName}
          name={radioGroupName}
          label={categoryName}
          value={categoryName}
          checked={isActiveCategory}
          classNames={{
            labelClasses:
              "ml-1 text-sm text-gray-500 font-medium underline underline-offset-4",
          }}
        />
        <div className="text-left ml-4">
          <p className="text-xs text-gray-500">
            {
              APP_CONFIG.lang.tr.pages.listPage.staticTexts.flightCard
                .pricingLabel
            }
          </p>
          <p className="font-bold">
            <span className="mr-1">{ecoFly.price.currency}</span>
            <span>{formattedPrice}</span>
          </p>
        </div>
      </div>
    );
  } else {
    return <p>{brandCodeQuery} paketi bulunamadı</p>;
  }
}
