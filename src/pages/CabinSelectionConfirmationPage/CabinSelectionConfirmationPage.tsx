import { useSelector } from "react-redux";
import CheckMarkIcon from "../../components/Icons/CheckMark";
import CrossIcon from "../../components/Icons/CrossIcon";
import { Navigate } from "react-router-dom";

export default function CabinSelectionConfirmationPage() {
  const status =
    useSelector((state) => state.flights.selectedFlight.status) || "ERROR";

  if (status === "AVAILABLE") {
    return (
      <div className="p-8">
        <div className="border-b pb-6 mb-6 flex items-center gap-4">
          <div className="bg-red-500 p-2 rounded-full">
            <CrossIcon fill="white" />
          </div>

          <span className="font-bold">Kabin seçiminiz tamamlanamadı</span>
        </div>
        <div className="flex items-center justify-end">
          <button className="bg-red-500 py-2 px-6 text-white font-medium text-sm">
            Başa dön
          </button>
        </div>
      </div>
    );
  }
}
