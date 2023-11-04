import { useLocation, useNavigate } from "react-router-dom";

// Icons
import CrossIcon from "../../Assets/Images/Icons/cross.svg?react";
import CheckMarkIcon from "../../Assets/Images/Icons/checkmark.svg?react";

export default function CabinSelectionConfirmationPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedCategory = location.state?.selectedCategory;
  console.log(selectedCategory);

  if (selectedCategory.status === "AVAILABLE") {
    return (
      <div className="p-8 w-8/12 shadow-default h-max">
        <div className="border-b pb-6 mb-6 flex items-center gap-4">
          <CheckMarkIcon fill="green" width={"2rem"} height={"2rem"} />
          <span className="font-bold">Kabin seçiminiz tamamlanamadı</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-4xl font-thin">Toplam Tutar</span>{" "}
          <span className="text-3xl text-medium font-medium text-sky-600">
            {selectedCategory.price.currency} {selectedCategory.price.amount}
          </span>
        </div>
      </div>
    );
  }

  if (selectedCategory.status === "ERROR") {
    return (
      <div className="p-8 w-8/12 shadow-default h-max">
        <div className="border-b pb-6 mb-6 flex items-center gap-4">
          <div className="bg-red-500 p-2 rounded-full">
            <CrossIcon fill="white" />
          </div>

          <span className="font-bold">Kabin seçiminiz tamamlanamadı</span>
        </div>
        <div className="flex items-center justify-end">
          <button
            onClick={() => navigate("/")}
            className="bg-red-500 py-2 px-6 text-white font-medium text-sm"
          >
            Başa dön
          </button>
        </div>
      </div>
    );
  }
}
