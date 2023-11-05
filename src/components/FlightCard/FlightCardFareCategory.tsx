// Components
import RadioButton from "../Inputs/RadioButton/RadioButton";

// Types
import { FareCategories as FareCategoryTypes } from "../../Types/Constants/Constants";
import { BUSINESS, ECONOMY } from "../../Types/Resources/Flight";
import { APP_CONFIG } from "../../AppConfig";

interface Props {
  activeCategory: FareCategoryTypes;
  categoryName: FareCategoryTypes;
  fareCategory: BUSINESS | ECONOMY;
  onClick: (fareCategory: FareCategoryTypes) => void;
}

export default function FlightCardFareCategory({
  categoryName,
  activeCategory,
  fareCategory,
  onClick,
}: Props) {
  const ecoFly = fareCategory.subcategories.find(
    (subCat) => subCat.brandCode === "ecoFly"
  );

  const isActiveCategory = activeCategory === categoryName;
  const wrapperClassName = isActiveCategory
    ? "ml-auto p-4 min-w-[200px] flex items-center bg-white relative after:absolute after:-bottom-[20px] after:left-0 after:content-[''] after:h-[40px] after:bg-white after:w-full"
    : "ml-auto p-4 min-w-[200px] flex items-center bg-white relative shadow-default";

  const formattedPrice = new Intl.NumberFormat("tr-TR")
    .format(ecoFly.price.amount)
    .toString();

  return (
    <div className={wrapperClassName}>
      <RadioButton
        id={categoryName}
        name="fareCategory"
        label={categoryName}
        value={categoryName}
        checked={isActiveCategory}
        onChange={(event) => onClick(event.target.value)}
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
}
