import { FormEvent, ReactNode, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSearchParams, json, useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";

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

import {
  airportValidator,
  requiredValidator,
} from "../../../Utils/Helpers/Validators";
import { RootState } from "../../../Services/StoreService";
import useQueryParams from "../../../Utils/CustomHooks/useQueryParams";
import { APP_CONFIG } from "../../../AppConfig";

export interface PassengerCountForm {
  fareCategory: FareCategories;
  passengerCount: number;
}

export default function FlightSearchForm() {
  const navigate = useNavigate();
  const { from, to, fareCategory, passengerCount } = useQueryParams();
  const [isFormSubmittedBefore, setIsFormSubmittedBefore] = useState(false);

  const {
    value: fromInputValue,
    onChange: onFromInputChange,
    errors: fromInputErrors,
    errorMessages: fromInputErrorMessages,
  } = useInput<string>(from || "", {
    validators: {
      required: (value) => requiredValidator(value),
      locationValidator: (value) =>
        airportValidator(value, flights, "originAirport"),
    },
    errorMessages: {
      required: "Kalkış noktasını boş bırakamazsınız",
      locationValidator: "Farklı bir kalkış noktası seçin. Örn; Istanbul",
    },
  });

  const {
    value: toInputValue,
    onChange: onToInputChange,
    errors: toInputErrors,
    errorMessages: toInputErrorMessages,
  } = useInput<string>(to || "", {
    validators: {
      required: (value) => requiredValidator(value),
      locationValidator: (value) =>
        airportValidator(value, flights, "destinationAirport"),
    },
    errorMessages: {
      required: "Varış noktasını boş bırakamazsınız",
      locationValidator: "Farklı bir varış noktası seçin. Örn; Antalya",
    },
  });

  const { value: passengerCountForm, onChange: onPassengerCountChange } =
    useInput<PassengerCountForm>({
      fareCategory: fareCategory || FareCategoriesEnum.ECONOMY,
      passengerCount: passengerCount || 1,
    } as PassengerCountForm);

  const [modalOptions, setModalOptions] = useState<ModalOptions>({
    header: "Lütfen formu gözden geçirin",
    isOpen: false,
    children: "",
  });

  const [formErrorMessages, setFormErrorMessages] = useState([]);

  const flights = useSelector(
    (state: RootState) => state.flightsData.flightsList
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const hasErrors =
      fromInputErrors?.locationValidator ||
      fromInputErrors?.required ||
      toInputErrors?.locationValidator ||
      toInputErrors?.required;

    if (hasErrors) {
      const newFormErrorMessages = createFormErrorMessages([
        fromInputErrorMessages,
        toInputErrorMessages,
      ]);
      setFormErrorMessages(newFormErrorMessages);
    } else {
      const params = createSearchParams({
        from: fromInputValue,
        to: toInputValue,
        passengerCount: String(passengerCountForm.passengerCount),
        fareCategory: passengerCountForm.fareCategory,
      });

      navigate({
        pathname: APP_CONFIG.lang.tr.pages.listPage.route,
        search: params.toString(),
      });
    }

    setIsFormSubmittedBefore(true);
  }

  function createFormErrorMessages(errorMessages: any[]) {
    const formErrorMessages = new Set();

    errorMessages.forEach((error) => {
      const keysOfError = Object.keys(error);
      if (keysOfError.length) {
        keysOfError.forEach((key) => {
          formErrorMessages.add(error[key]);
        });
      }
    });

    return [...formErrorMessages];
  }

  function handleFormChange() {
    if (isFormSubmittedBefore) {
      const newFormErrorMessages = createFormErrorMessages([
        fromInputErrorMessages,
        toInputErrorMessages,
      ]);
      setFormErrorMessages(newFormErrorMessages);
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        onChange={handleFormChange}
        className="bg-gray-500 flex gap-2 p-4 items-stretch text-dark w-max mx-auto flex-nowrap relative"
      >
        <div className="form-field flex-0 bg-white 16">
          <ComboBox
            name="originAirport"
            placeholder={
              APP_CONFIG.lang.tr.pages.searchPage.staticTexts.form.from
                .placeholder
            }
            icon={
              <AirPlaneLandingIcon
                width="1.5rem"
                height="1.5rem"
                fill="text-sky-900"
              />
            }
            onChange={onFromInputChange}
            value={fromInputValue}
          />
        </div>
        <div className="form-field flex-0  bg-white 16">
          <ComboBox
            name="destinationAirport"
            placeholder={
              APP_CONFIG.lang.tr.pages.searchPage.staticTexts.form.to
                .placeholder
            }
            icon={
              <AirPlaneTakeOffIcon
                width="1.5rem"
                height="1.5rem"
                fill="text-sky-900"
              />
            }
            onChange={onToInputChange}
            value={toInputValue}
          ></ComboBox>
        </div>
        <div className="flex gap-2 relative">
          <div className="form-field w-[100px] bg-blue-950 16">
            <DatePicker
              label={
                APP_CONFIG.lang.tr.pages.searchPage.staticTexts.form.date.label
              }
              icon={<DatePickerIcon width="2rem" height="2rem" fill="white" />}
            />
          </div>
          <div className="form-field w-[100px] bg-blue-950 16">
            <PassengerCount
              icon={<PersonIcon width="2rem" height="2rem" fill="white" />}
              onChange={onPassengerCountChange}
              fareCategory={passengerCountForm.fareCategory}
              passengerCount={Number(passengerCountForm.passengerCount)}
            />
          </div>
        </div>

        <button type="submit" className="bg-red-400 p-4 16">
          <RightArrowIcon />
        </button>
        <ul className="absolute top-full right-4 mt-2">
          {formErrorMessages.map((errorMessage, index) => {
            return (
              <li key={index} className="text-sm text-right ">
                {errorMessage}
              </li>
            );
          })}
        </ul>
      </form>
    </>
  );
}
