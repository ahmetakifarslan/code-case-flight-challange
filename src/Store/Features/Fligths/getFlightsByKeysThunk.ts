import { createAsyncThunk } from "@reduxjs/toolkit";
import data from "../../Data/flights.json";
import { filterFlightsByCity } from "../../../Utils/Helpers/FilterByCity";

export const getFlightsByKeys = createAsyncThunk(
  "flights/getFlightsByKeys",
  async (payload, thunkAPI) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const originAirportCity = payload.searchParams.get("from");
      const destinationAirportCity = payload.searchParams.get("to");

      const filteredFlights = filterFlightsByCity(
        originAirportCity,
        destinationAirportCity,
        data.flights
      );

      return filteredFlights.length
        ? filteredFlights
        : thunkAPI.rejectWithValue("Uygun uçuş bulunamadı");
    } catch (error) {
      throw new Error("Bir hata oluştu");
    }
  }
);
