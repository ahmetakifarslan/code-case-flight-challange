import { FareCategories as FareCategroyTypes } from "../../types/constants";
import { Business, Economy } from "../../types/flights";
import RadioButton from "../Inputs/RadioButton/RadioButton";

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
  const ecoFly = fareCategory.subcategories[0];
  const isActiveCategory = activeCategory === categoryName;
  const wrapperClassName = isActiveCategory
    ? "ml-auto p-4 min-w-[200px] flex items-center bg-white relative after:absolute after:-bottom-[20px] after:left-0 after:content-[''] after:h-[40px] after:bg-white after:w-full"
    : "ml-auto p-4 min-w-[200px] flex items-center bg-white relative shadow-default";

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
        <p className="text-xs text-gray-500">Yolcu Başına</p>
        <p className="font-bold">
          <span className="mr-1">{ecoFly.price.currency}</span>
          <span>{ecoFly.price.amount}</span>
        </p>
      </div>
    </div>
  );
}
