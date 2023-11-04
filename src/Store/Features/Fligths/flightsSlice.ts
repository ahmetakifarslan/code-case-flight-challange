import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Flight, Flights } from "../../../Types/Resources/Flight";
import { getFlights } from "./getFlightsThunk";
import { getFlightsByKeys } from "./getFlightsByKeysThunk";
import { APP_CONFIG } from "../../../AppConfig";

export interface FlightsState {
  loading: boolean;
  error: null | Error;
  flightsList: Flights;
  hasPromotion: boolean;
  theme: "dark" | "light";
  isDiscountApllied: boolean;
}

const initialState: FlightsState = {
  loading: true,
  error: null,
  flightsList: [],
  hasPromotion: false,
  theme: "dark",
  isDiscountApllied: false,
};

export const flightsSlice = createSlice({
  name: "flightsData",
  initialState,
  reducers: {
    setFlightForm: (state, action: PayloadAction<any>) => {
      state.searchForm = action.payload;
    },
    toggleSwitch: (state, action: PayloadAction<any>) => {
      if (!state.isDiscountApllied) {
        state.flightsList = state.flightsList.map((item) => {
          Object.keys(item.fareCategories).forEach((fareCategory) => {
            item.fareCategories[fareCategory].subcategories =
              item.fareCategories[fareCategory].subcategories.map((item) => {
                if (item.brandCode === "ecoFly") {
                  const price = item.price.amount;

                  item.price.amount = (price * APP_CONFIG.discount) / 100;
                }

                return item;
              });
          });

          return item;
        });
      }

      state.hasPromotion = action.payload;
      state.isDiscountApllied = true;
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
