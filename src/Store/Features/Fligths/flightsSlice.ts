import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Flight, Flights } from "../../../Types/Resources/Flight";
import { getFlights } from "./getFlightsThunk";
import { getFlightsByKeys } from "./getFlightsByKeysThunk";

export interface FlightsState {
  flightsList: Flights;
  orderBy: "economy" | "arrivalDateTimeDisplay";
  flightSearchForm: any; // Uygun bir tür ekleyin
  hasPromotion: boolean;
  selectedFlight: Flight | null; // Uygun bir tür ekleyin
  searchForm: any; // Uygun bir tür ekleyin
  loading: boolean;
  error: null | Error;
  theme: "dark" | "light"; // Uygun bir tür ekleyin
}

const initialState: FlightsState = {
  flightsList: [],
  flightSearchForm: null,
  orderBy: "economy",
  hasPromotion: false,
  selectedFlight: null,
  searchForm: null,
  loading: true,
  error: null,
  theme: "dark",
};

export const flightsSlice = createSlice({
  name: "flightsData",
  initialState,
  reducers: {
    setFlightForm: (state, action: PayloadAction<any>) => {
      state.searchForm = action.payload;
    },
    toggleSwitch: (state, action: PayloadAction<any>) => {
      state.flightsList = state.flightsList.map((item) => {
        item.fareCategories.BUSINESS.subcategories =
          item.fareCategories.BUSINESS.subcategories.map((item) => {
            if (item.brandCode === "ecoFly") {
              const price = item.price.amount;

              item.price.amount = price / 2;
            }

            return item;
          });

        item.fareCategories.ECONOMY.subcategories =
          item.fareCategories.ECONOMY.subcategories.map((item) => {
            if (item.brandCode === "ecoFly") {
              const price = item.price.amount;

              item.price.amount = price / 2;
            }
            return item;
          });

        return item;
      });

      state.hasPromotion = action.payload;
    },
    onSelectFlight: (state, action: PayloadAction<any>) => {
      state.selectedFlight = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFlights.pending, (state) => {
        state.loading = true;
      })
      .addCase(getFlights.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.flightsList = action.payload.flights;
      })
      .addCase(getFlights.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getFlightsByKeys.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getFlightsByKeys.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.flightsList = action.payload;
        }
      )
      .addCase(getFlightsByKeys.rejected, (state, action) => {
        state.loading = false;
        state.error = new Error(action.payload);
      });
  },
});

export const { setFlightForm, toggleSwitch, onSelectFlight } =
  flightsSlice.actions;
export default flightsSlice.reducer;
