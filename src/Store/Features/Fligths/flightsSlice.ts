import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Flights } from "../../../Types/Resources/Flight";
import { getFlights } from "./getFlightsThunk";
import { filterFlightsByParams } from "./filterFlightsByParamsThunk";
import { APP_CONFIG } from "../../../AppConfig";
import { FlightsState } from "../../../Types/Store/FlightSliceTypes";
import { applyDiscountByRate } from "../../../Utils/Helpers/ApplyDiscount";

const initialState: FlightsState = {
  loading: true,
  error: null,
  flightsList: [],
  discountedFlights: [],
  hasPromotion: false,
  theme: "dark",
  selectedFlight: null,
};

export const flightsSlice = createSlice({
  name: "flightsData",
  initialState,
  reducers: {
    applyDiscount: (state, action: PayloadAction<boolean>) => {
      if (state.discountedFlights.length === 0)
        state.discountedFlights = applyDiscountByRate(
          state.flightsList,
          APP_CONFIG.discountRate
        );

      state.hasPromotion = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFlights.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getFlights.fulfilled,
        (state, action: PayloadAction<Flights>) => {
          state.loading = false;
          state.flightsList = action.payload;
        }
      )
      .addCase(getFlights.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(filterFlightsByParams.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        filterFlightsByParams.fulfilled,
        (state, action: PayloadAction<Flights>) => {
          state.loading = false;
          state.flightsList = action.payload;
        }
      )
      .addCase(filterFlightsByParams.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { applyDiscount } = flightsSlice.actions;
export default flightsSlice.reducer;
