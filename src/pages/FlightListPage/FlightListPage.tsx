import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleSwitch } from "../../Store/Features/Fligths/flightsSlice";
import { getFlightsByKeys } from "../../Store/Features/Fligths/getFlightsByKeysThunk";
import CrossIcon from "../../Assets/Images/Icons/cross.svg?react";

// External Libs
import * as qs from "qs";

// Components
import FlightList from "../../Components/FlightList/FlightList";
import Switch from "../../Components/Switch/Switch";

// Utils - Helpers
import urlController from "../../Utils/Helpers/URLController";
import { RootState } from "../../Services/StoreService";

export default function FlightListPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const originalAirportValue = searchParams.get("from");
  const destinationAirportValue = searchParams.get("to");
  const passengerCount = searchParams.get("passengerCount");

  const navigate = useNavigate();

  const flightsData = useSelector((state: RootState) => state.flightsData);
  const hasPromotion = false;
  const dispatch = useDispatch();

  function onSwitchChange(switchState: boolean) {
    dispatch(toggleSwitch(switchState));
  }

  useEffect(() => {
    dispatch(getFlightsByKeys({ searchParams }));
  }, []);

  useEffect(() => {
    /*-  const controlledParams = [
      originalAirportValue,
      destinationAirportValue,
      passengerCount,
    ];*/
    if (flightsData.flightsList.length) {
      const checkedParams = urlController(
        searchParams,
        flightsData.flightsList
      );
      if (Object.values(checkedParams).includes(undefined)) {
        navigate(`/?${qs.stringify(checkedParams)}`);
      }
    }

    // if (!isEveryQueryParamSetted) {
    //   navigate("/");
    // }
  }, [flightsData.flightsList, searchParams]);

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

  if (flightsData.loading) {
    return <p>Yükleniyor</p>;
  }

  return (
    <div>
      <div className="badge bg-red-500 px-12 py-1 w-max text-white mb-2">
        UÇUŞ
      </div>
      <div className="text-3xl text-gray-500 mb-6 capitalize">
        <span>{originalAirportValue}</span> -{" "}
        <span>{destinationAirportValue}</span>,{" "}
        <span>{passengerCount} yolcu</span>
      </div>

      <div className="flex items-center gap-6 mb-3">
        <span>Promosyon kodu</span>
        <Switch onChange={onSwitchChange} initialState={hasPromotion} />
      </div>
      {hasPromotion && (
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
