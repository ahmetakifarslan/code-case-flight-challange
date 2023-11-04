import { useEffect } from "react";
import FlightSearchForm from "../../Components/Forms/FlightSearchForm/FlightSearchForm";
import { useDispatch } from "react-redux";
import { getFlights } from "../../Store/Features/Fligths/getFlightsThunk";

export default function FlightSearchPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlights());
  }, []);
  return (
    <div>
      <h1 className="text-center text-5xl mt-8">Merahaba</h1>
      <p className="text-center text-3xl mb-8">Neyi keşfetmek istersiniz?</p>
      <FlightSearchForm></FlightSearchForm>
    </div>
  );
}
