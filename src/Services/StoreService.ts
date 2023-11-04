import { configureStore } from "@reduxjs/toolkit";
import flightsSlice from "../Store/Features/Fligths/flightsSlice";

export const store = configureStore({
  reducer: {
    flights: flightsSlice,
  },
  devTools: true,
});
