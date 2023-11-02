import {
  FareCategories as FareCategroyTypes,
  FareCategoriesEnum,
} from "../../types/constants";
import { Business, Economy } from "../../types/flights";

interface Props {
  activeCategory: FareCategroyTypes;
  categoryName: FareCategroyTypes;
  fareCategory: Economy | Business;
  onClick: (fareCategory: FareCategroyTypes) => void;
}

export default function FareCategory({
  categoryName,
  activeCategory,
  fareCategory,
  onClick,
}: Props) {
  return (
    <div
      className={`${
        activeCategory === categoryName
          ? "ml-auto p-4 min-w-[200px] flex items-center bg-white relative after:absolute after:-bottom-[20px] after:left-0 after:content-[''] after:h-[40px] after:bg-white after:w-full"
          : "ml-auto p-4 min-w-[200px] flex items-center bg-white relative shadow-default"
      }`}
    >
      <div className="flex items-center">
        <input
          id={categoryName}
          type="radio"
          name="fareCategory"
          value={categoryName}
          checked={activeCategory === categoryName}
          onChange={(event) => onClick(event.target.value)}
        />
        <label
          htmlFor={categoryName}
          className="ml-1 text-sm text-gray-500 font-medium underline underline-offset-4"
        >
          {categoryName}
        </label>
      </div>
      <div className="text-left ml-4">
        <p className="text-xs text-gray-500">Yolcu Başına</p>
        <p className="font-bold">
          <span className="mr-1">
            {fareCategory.subcategories[0].price.currency}
          </span>
          <span>{fareCategory.subcategories[0].price.amount}</span>
        </p>
      </div>
    </div>
  );
}
