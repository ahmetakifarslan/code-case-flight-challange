interface Props {
  brandCode: "ecoFly" | "extraFly" | "primeFly";
  label: string;
  hasPromotion: boolean;
  onClick: () => void;
}

export default function FlightSelectButton({
  brandCode,
  hasPromotion,
  label,
  onClick,
}: Props) {
  const isEcoFly = brandCode === "ecoFly";
  const isDisabled = hasPromotion && !isEcoFly;

  const buttonClassName = `w-full self-end text-white py-4 font-medium ${
    isDisabled ? "bg-gray-500 bg-opacity-60" : "bg-red-500"
  }`;

  return (
    <button
      type="button"
      disabled={isDisabled}
      className={buttonClassName}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
