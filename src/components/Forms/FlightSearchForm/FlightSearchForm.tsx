import { FormEvent, ReactNode, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import { setFlightForm } from "../../../Store/Features/Fligths/flightsSlice";

// Components
import ComboBox from "../../Inputs/ComboBox/ComboBox";
import DatePicker from "../../Inputs/DatePicker/DatePicker";
import PassengerCount from "../../Inputs/PassengerCount/PassengerCount";
import Modal from "../../Modal/Modal";

// Icons
import AirPlaneLandingIcon from "../../../Assets/Images/Icons/airplane-landing.svg?react";
import AirPlaneTakeOffIcon from "../../../Assets/Images/Icons/airplane-takeoff.svg?react";
import DatePickerIcon from "../../../Assets/Images/Icons/date-picker-icon.svg?react";
import PersonIcon from "../../../Assets/Images/Icons/person.svg?react";
import RightArrowIcon from "../../../Assets/Images/Icons/arrow-right.svg?react";

// Types
import { ModalOptions } from "../../../Types/Modal";
import {
  FareCategories,
  FareCategoriesEnum,
} from "../../../Types/Constants/Constants";

// Utils - Helpers
import useInput from "../../../Utils/CustomHooks/useInput";
import urlController from "../../../Utils/Helpers/URLController";
import {
  isValidDestination,
  isValidOrigin,
} from "../../../Utils/Helpers/Validators";

export interface PassengerCountForm {
  fareCategory: FareCategories;
  passengerCount: number;
}

export default function FlightSearchForm() {
  const location = useLocation();
  const flights = useSelector((state) => state.flights);
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

  const [modalOptions, setModalOptions] = useState<ModalOptions>({
    header: "Lütfen formu gözden geçirin",
    isOpen: false,
    children: "",
  });

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

    const params = createSearchParams({
      from: formValues.originalAirportValue,
      to: formValues.destinationAirportValue,
      passengerCount: String(formValues.passengerCountForm.passengerCount),
      fareCategory: formValues.passengerCountForm.fareCategory,
    });

    const checkedParams = urlController(params, flights.flights);
    const hasError = Object.values(checkedParams).includes(undefined);
    hasError
      ? openModal("Bir hata algılandı", createModalContent(checkedParams))
      : navigate({
          pathname: "flight-list-page",
          search: params.toString(),
        });
  }

  function openModal(header: string, children: string | ReactNode) {
    setModalOptions({ header, isOpen: true, children });
  }

  function closeModal() {
    setModalOptions({ ...modalOptions, isOpen: false });
  }

  function createModalContent(checkedParams: any) {
    const errorMessages = {
      from: "Nereden bineceğinizi seçmediniz",
      to: "Nereye gideceğinizi seçmediniz",
    };

    return (
      <div>
        <ul>
          {Object.entries(checkedParams).map(([key, value]) => {
            return value === undefined ? <li>{errorMessages[key]}</li> : null;
          })}
        </ul>
      </div>
    );
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-500 flex gap-2 p-4 items-stretch text-dark w-max mx-auto flex-nowrap"
      >
        <div className="form-field flex-0 bg-white 16">
          <ComboBox
            name="originAirport"
            placeholder="Nereden"
            icon={
              <AirPlaneLandingIcon
                width="1.5rem"
                height="1.5rem"
                fill="text-sky-900"
              />
            }
            onChange={originalAirpotInput.onChange}
            value={originalAirpotInput.value}
            validator={isValidOrigin}
          />
        </div>
        <div className="form-field flex-0  bg-white 16">
          <ComboBox
            name="destinationAirport"
            placeholder="Nereye"
            icon={
              <AirPlaneTakeOffIcon
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
              icon={<PersonIcon width="2rem" height="2rem" fill="white" />}
              onChange={passengerCountInput.onChange}
              fareCategory={passengerCountInput.value.fareCategory}
              passengerCount={Number(passengerCountInput.value.passengerCount)}
            />
          </div>

          <button type="submit" className="bg-red-400 p-4 16">
            <RightArrowIcon />
          </button>
        </div>
      </form>
      {modalOptions.isOpen &&
        createPortal(
          <Modal {...modalOptions} onClose={closeModal} />,
          document.body
        )}
    </>
  );
}
