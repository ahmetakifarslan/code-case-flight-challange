import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleSwitch } from "../../Store/Features/Fligths/flightsSlice";
import { getFlightsByKeys } from "../../Store/Features/Fligths/getFlightsByKeysThunk";

// Components
import FlightList from "../../Components/FlightList/FlightList";
import Switch from "../../Components/Switch/Switch";

// Images - Icons
import CrossIcon from "../../Assets/Images/Icons/cross.svg?react";

// Utils - Helpers
import { RootState } from "../../Services/StoreService";
import useQueryParams from "../../Utils/CustomHooks/useQueryParams";
import { removeNullParamsFromURL } from "../../Utils/Helpers/RemoveNullParamsFromUrl";
import Spinner from "../../Components/Spinner/Spinner";

export default function FlightListPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const flightsData = useSelector((state: RootState) => state.flightsData);

  const { from, to, fareCategory, passengerCount, searchParams } =
    useQueryParams();

  function onSwitchChange(switchState: boolean) {
    dispatch(toggleSwitch(switchState));
  }

  useEffect(() => {
    if (
      from &&
      to &&
      fareCategory &&
      passengerCount &&
      passengerCount !== "0"
    ) {
      dispatch(getFlightsByKeys({ searchParams }));
    } else {
      console.log("passengerCount", passengerCount);
      removeNullParamsFromURL(searchParams);
      navigate({ pathname: "/", search: searchParams.toString() });
    }
  }, []);

  if (flightsData.loading) {
    return <Spinner />;
  }

  if (flightsData.error) {
    return (
      <div className="p-8">
        <div className="border-b pb-6 mb-6 flex items-center gap-4">
          <div className="bg-red-500 p-2 rounded-full">
            <CrossIcon fill="white" />
          </div>

          <span className="font-bold">{flightsData.error.message}</span>
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

  return (
    <div>
      <div className="badge bg-red-500 px-12 py-1 w-max text-white mb-2">
        UÇUŞ
      </div>
      <div className="text-3xl text-gray-500 mb-6 capitalize">
        <span>{from}</span> - <span>{to}</span>,
        <span>{passengerCount} yolcu</span>
      </div>

      <div className="flex items-center gap-6 mb-3">
        <span>Promosyon kodu</span>
        <Switch
          onChange={onSwitchChange}
          initialState={flightsData.hasPromotion}
        />
      </div>
      {flightsData.hasPromotion && (
        <div className="mb-4">
          <p className="text-sm text-gray-500 mb-1">
            Promosyon kodu seçeneği ile tüm Economy kabini ECO paketlerini %50
            indirimle satın alabilirsiniz!
          </p>
          <p className="text-sm text-gray-500">
            Promosyon kodu seçeneği aktifken Eco Fly paketi haricinde seçim
            yapılamamaktadır.
          </p>
        </div>
      )}

      <FlightList flightList={flightsData.flightsList} />
    </div>
  );
}
