import { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  simulateGetFlights,
  toggleSwitch,
} from "../../Store/Features/Fligths/flightsSlice";

// External Libs
import * as qs from "qs";

// Components
import FlightList from "../../Components/FlightList/FlightList";
import Switch from "../../Components/Switch/Switch";

// Utils - Helpers
import urlController from "../../Utils/Helpers/URLController";

export default function FlightListPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const originalAirportValue = searchParams.get("from");
  const destinationAirportValue = searchParams.get("to");
  const passengerCount = searchParams.get("passengerCount");

  const navigate = useNavigate();

  const flights = useSelector((state) => state.flights);
  const hasPromotion = false;
  const dispatch = useDispatch();

  function onSwitchChange(switchState: boolean) {
    dispatch(toggleSwitch(switchState));
  }

  useEffect(() => {
    dispatch(simulateGetFlights(originalAirportValue, destinationAirportValue));
  }, []);

  useEffect(() => {
    /*-  const controlledParams = [
      originalAirportValue,
      destinationAirportValue,
      passengerCount,
    ];*/
    if (flights?.flights.length) {
      const checkedParams = urlController(searchParams, flights.flights);
      if (Object.values(checkedParams).includes(undefined)) {
        navigate(`/?${qs.stringify(checkedParams)}`);
      }
    }

    // if (!isEveryQueryParamSetted) {
    //   navigate("/");
    // }
  }, [flights, searchParams]);

  if (flights.error) {
    return <p>Bir hata oluştu</p>;
  }

  if (flights.loading) {
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

      <FlightList />
    </div>
  );
}
