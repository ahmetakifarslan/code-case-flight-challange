import { createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import data from "../../Data/flights.json";
import { Flights } from "../../../Types/Resources/Flight";

export const getFlights = createAsyncThunk<
  Flights,
  void,
  { rejectValue: string }
>("flights/getFlights", async (_, thunkAPI) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 100));
    data.flights = data.flights.map((item) => {
      return { id: uuidv4(), ...item };
    });
    return data;
  } catch (error) {
    console.log("error", error);
    return thunkAPI.rejectWithValue("Bir hata oluştu");
  }
});
