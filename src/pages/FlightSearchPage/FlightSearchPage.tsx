import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getFlights } from "../../Store/Features/Fligths/getFlightsThunk";
import { RootState } from "../../Services/StoreService";
import FlightSearchForm from "../../Components/Forms/FlightSearchForm/FlightSearchForm";
import Spinner from "../../Components/Spinner/Spinner";
import { APP_CONFIG } from "../../AppConfig";
import CrossIcon from "../../Assets/Images/Icons/cross.svg?react";

export default function FlightSearchPage() {
  const flightsData = useSelector((state: RootState) => state.flightsData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (flightsData.flightsList.length === 0) {
      dispatch(getFlights());
    }
  }, []);

  if (flightsData.loading) {
    return <Spinner />;
  }

  if (flightsData.flightsList.length === 0 && flightsData.error) {
    return (
      <div className="p-8 shadow-default w-8/12 h-max">
        <div className="border-b pb-6 mb-6 flex items-center gap-4">
          <div className="bg-red-500 p-2 rounded-full">
            <CrossIcon fill="white" />
          </div>

          <span className="font-bold">{flightsData.error.message}</span>
        </div>
        <div className="flex items-center justify-end">
          <button
            onClick={() => navigate(APP_CONFIG.lang.tr.pages.searchPage.route)}
            className="bg-red-500 py-2 px-6 text-white font-medium text-sm"
          >
            Başa dön
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-48 flex flex-col justify-center">
      <h1 className="text-center text-5xl mt-8">
        {APP_CONFIG.lang.tr.pages.searchPage.staticTexts.pageTitle}
      </h1>
      <p className="text-center text-3xl mb-8">
        {APP_CONFIG.lang.tr.pages.searchPage.staticTexts.pageSubtitle}
      </p>
      <FlightSearchForm></FlightSearchForm>
    </div>
  );
}
