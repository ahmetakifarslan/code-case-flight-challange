import { useLocation, useNavigate } from "react-router-dom";

// Icons
import CrossIcon from "../../Assets/Images/Icons/cross.svg?react";
import CheckMarkIcon from "../../Assets/Images/Icons/checkmark.svg?react";
import { APP_CONFIG } from "../../AppConfig";

export default function CabinSelectionConfirmationPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedCategory = location.state?.selectedCategory;

  if (selectedCategory.status === "AVAILABLE") {
    return (
      <div className="p-8 w-8/12 shadow-default h-max">
        <div className="border-b pb-6 mb-6 flex items-center gap-4">
          <CheckMarkIcon fill="green" width={"2rem"} height={"2rem"} />
          <span className="font-bold">
            {
              APP_CONFIG.lang.tr.pages.cabinSelectionPage.staticTexts.success
                .selectionStatus
            }
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-4xl font-thin">
            {
              APP_CONFIG.lang.tr.pages.cabinSelectionPage.staticTexts.success
                .totalAmountLabel
            }
          </span>
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

          <span className="font-bold">
            {
              APP_CONFIG.lang.tr.pages.cabinSelectionPage.staticTexts.error
                .selectionStatus
            }
          </span>
        </div>
        <div className="flex items-center justify-end">
          <button
            onClick={() => navigate(APP_CONFIG.lang.tr.pages.searchPage.route)}
            className="bg-red-500 py-2 px-6 text-white font-medium text-sm"
          >
            {
              APP_CONFIG.lang.tr.pages.cabinSelectionPage.staticTexts.error
                .turnbackButtonLabel
            }
          </button>
        </div>
      </div>
    );
  }
}
