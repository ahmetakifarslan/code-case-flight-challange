interface Props {
  subCategoryStatus: "AVAILABLE" | "ERROR";
  brandCode: "ecoFly" | "extraFly" | "primeFly";
  label: string;
  hasPromotion: boolean;
  onClick: () => void;
}

export default function FlightSelectButton({
  subCategoryStatus,
  brandCode,
  hasPromotion,
  label,
  onClick,
}: Props) {
  const isSubcategoryAvailable = subCategoryStatus === "AVAILABLE";
  const isEcoFly = brandCode === "ecoFly";
  const isDisabled = !isSubcategoryAvailable || (hasPromotion && !isEcoFly);

  const buttonClass = `w-full self-end text-white py-4 font-medium ${
    isDisabled ? "bg-gray-500 bg-opacity-60" : "bg-red-500"
  }`;

  return (
    <button
      type="button"
      disabled={isDisabled}
      className={buttonClass}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
