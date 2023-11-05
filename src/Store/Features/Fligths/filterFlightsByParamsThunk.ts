import { createAsyncThunk } from "@reduxjs/toolkit";
import data from "../../Data/flights.json";
import { v4 as uuidv4 } from "uuid";
import { APP_CONFIG } from "../../../AppConfig";
import { filterFlightsByCity } from "../../../Utils/Helpers/FilterByCity";

export const filterFlightsByParams = createAsyncThunk(
  "flights/filterFlightsByParams",
  async (payload, thunkAPI) => {
    try {
      await new Promise((resolve) =>
        setTimeout(resolve, APP_CONFIG.pendingDurationMilliseconds)
      );
      const originAirportCity = payload.searchParams.get("from");
      const destinationAirportCity = payload.searchParams.get("to");

      data.flights = data.flights.map((item) => {
        return { id: uuidv4(), ...item };
      });

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
