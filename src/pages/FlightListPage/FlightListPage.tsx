import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { applyDiscount } from "../../Store/Features/Fligths/flightsSlice";
import { filterFlightsByParams } from "../../Store/Features/Fligths/filterFlightsByParamsThunk";
import { RootState } from "../../Services/StoreService";

import FlightList from "../../Components/FlightList/FlightList";
import Switch from "../../Components/Switch/Switch";
import Spinner from "../../Components/Spinner/Spinner";

import CrossIcon from "../../Assets/Images/Icons/cross.svg?react";

import useQueryParams from "../../Utils/CustomHooks/useQueryParams";
import { removeNullParamsFromURL } from "../../Utils/Helpers/RemoveNullParamsFromUrl";
import { APP_CONFIG } from "../../AppConfig";

export default function FlightListPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const flightsData = useSelector((state: RootState) => state.flightsData);

  const { from, to, fareCategory, passengerCount, searchParams } =
    useQueryParams();

  function onSwitchChange(switchState: boolean) {
    dispatch(applyDiscount(switchState));
  }

  useEffect(() => {
    if (
      from &&
      to &&
      fareCategory &&
      passengerCount &&
      passengerCount !== "0"
    ) {
      dispatch(filterFlightsByParams({ searchParams }));
    } else {
      removeNullParamsFromURL(searchParams);
      navigate({
        pathname: APP_CONFIG.lang.tr.pages.searchPage.route,
        search: searchParams.toString(),
      });
    }
  }, []);

  if (flightsData.loading) {
    return <Spinner />;
  }

  if (flightsData.error) {
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
    <div className="shadow-default px-8 py-4 mb-12 w-10/12">
      <div className="badge bg-red-500 px-12 py-1 w-max text-white mb-2">
        {APP_CONFIG.lang.tr.pages.listPage.staticTexts.titleBadge}
      </div>
      <div className="text-3xl text-gray-500 mb-6 capitalize">
        <span>{from}</span> - <span>{to}</span>,
        <span>{passengerCount} yolcu</span>
      </div>

      <div className="flex items-center gap-6 mb-3">
        <span>{APP_CONFIG.lang.tr.pages.listPage.staticTexts.switchLabel}</span>
        <Switch
          onChange={onSwitchChange}
          initialState={flightsData.hasPromotion}
        />
      </div>
      {flightsData.hasPromotion && (
        <div className="mb-4">
          {APP_CONFIG.lang.tr.pages.listPage.staticTexts.promotionNotifications.map(
            (ntfy: string, index) => {
              return (
                <p key={index} className="text-sm text-gray-500 mb-1">
                  {ntfy}
                </p>
              );
            }
          )}
        </div>
      )}

      <FlightList
        flightList={
          flightsData.hasPromotion
            ? flightsData.discountedFlights
            : flightsData.flightsList
        }
      />
    </div>
  );
}
