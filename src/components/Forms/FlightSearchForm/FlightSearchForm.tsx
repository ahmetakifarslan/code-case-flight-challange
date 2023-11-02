import AirPlaneLanding from "../../Icons/AirPlaneLanding";
import AirPlaneTakeOff from "../../Icons/AirPlaneTakeOff";
import ArrowRight from "../../Icons/ArrowRight";
import DatePickerIcon from "../../Icons/DatePickerIcon";
import Person from "../../Icons/Person";
import ComboBox from "../../Inputs/ComboBox/ComboBox";
import DatePicker from "../../Inputs/DatePicker/DatePicker";
import PassengerCount from "../../Inputs/PassengerCount/PassengerCount";
import useInput from "../../../utils/custom-hooks/useInput";
import { FareCategories, FareCategoriesEnum } from "../../../types/constants";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setFlightForm } from "../../../redux/features/flights/flightsSlice";
import { isValidDestination, isValidOrigin } from "../../../utils/validators";
import { FormEvent } from "react";

export interface PassengerCountForm {
  fareCategory: FareCategories;
  passengerCount: number;
}

export default function FlightSearchForm() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const originalAirportValue = searchParams.get("from") || "";
  const destinationAirportValue = searchParams.get("to") || "";
  const passengerCount = searchParams.get("passengerCount") || 1;
  const fareCategory =
    searchParams.get("fareCategory") || FareCategoriesEnum.economy;

  const originalAirpotInput = useInput<string>(originalAirportValue);
  const destinationAirportInput = useInput<string>(destinationAirportValue);
  const passengerCountInput = useInput<PassengerCountForm>({
    fareCategory: fareCategory,
    passengerCount: passengerCount,
  } as PassengerCountForm);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formValues = {
      originalAirportValue: originalAirpotInput.value,
      destinationAirportValue: destinationAirportInput.value,
      passengerCountForm: passengerCountInput.value,
    };

    dispatch(setFlightForm(formValues));

    navigate({
      pathname: "flight-list-page",
      search: createSearchParams({
        from: formValues.originalAirportValue,
        to: formValues.destinationAirportValue,
        passengerCount: String(formValues.passengerCountForm.passengerCount),
        fareCategory: formValues.passengerCountForm.fareCategory,
      }).toString(),
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-500 flex gap-2 p-4 items-stretch text-dark w-max mx-auto flex-nowrap"
    >
      <div className="form-field flex-0 bg-white 16">
        <ComboBox
          name="originAirport"
          placeholder="Nereden"
          icon={
            <AirPlaneTakeOff
              width="1.5rem"
              height="1.5rem"
              fill="text-sky-900"
            />
          }
          onChange={originalAirpotInput.onChange}
          value={originalAirpotInput.value}
          validator={isValidOrigin}
        ></ComboBox>
      </div>
      <div className="form-field flex-0  bg-white 16">
        <ComboBox
          name="destinationAirport"
          placeholder="Nereye"
          icon={
            <AirPlaneLanding
              width="1.5rem"
              height="1.5rem"
              fill="text-sky-900"
            />
          }
          onChange={destinationAirportInput.onChange}
          value={destinationAirportInput.value}
          validator={isValidDestination}
        ></ComboBox>
      </div>
      <div className="flex gap-2 relative">
        <div className="form-field w-[100px] bg-blue-950 16">
          <DatePicker
            label="Tarih"
            icon={<DatePickerIcon width="2rem" height="2rem" fill="white" />}
          />
        </div>
        <div className="form-field w-[100px] bg-blue-950 16">
          <PassengerCount
            icon={<Person width="2rem" height="2rem" fill="white" />}
            onChange={passengerCountInput.onChange}
            fareCategory={passengerCountInput.value.fareCategory}
            passengerCount={passengerCountInput.value.passengerCount}
          />
        </div>

        <button type="submit" className="bg-red-400 p-4 16">
          <ArrowRight />
        </button>
      </div>
    </form>
  );
}
