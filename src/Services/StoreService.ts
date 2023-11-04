import { combineReducers, configureStore } from "@reduxjs/toolkit";
import flightsSlice from "../Store/Features/Fligths/flightsSlice";

const rootReducer = combineReducers({
  flightsData: flightsSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
