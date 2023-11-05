import { createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import data from "../../Data/flights.json";
import { APP_CONFIG } from "../../../AppConfig";

export const getFlights = createAsyncThunk(
  "flights/getFlights",
  async (_, thunkAPI) => {
    try {
      await new Promise((resolve) =>
        setTimeout(resolve, APP_CONFIG.pendingDurationMilliseconds)
      );
      data.flights = data.flights.map((item) => {
        return { id: uuidv4(), ...item };
      });
      return data.flights;
    } catch (error) {
      return thunkAPI.rejectWithValue("Bir hata oluştu");
    }
  }
);
