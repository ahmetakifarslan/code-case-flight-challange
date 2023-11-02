import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Flight } from "../../../types/flights";
import { v4 as uuidv4 } from "uuid";

export interface FlightsState {
  flights: Flight[];
  orderBy: "economy" | "arrivalDateTimeDisplay";
}

export const simulateGetFlights = createAsyncThunk(
  "flights/simulateAsyncOperation",
  async (payload, thunkAPI) => {
    try {
      // Bekleme süresini simüle etmek için setTimeout kullanıyoruz
      await new Promise((resolve) => setTimeout(resolve, 100)); // 2 saniye beklemek

      return [
        {
          originAirport: {
            name: "Istanbul Airport",
            code: "IST",
            city: {
              code: "IST",
              name: "Istanbul",
            },
            country: {
              code: "TR",
              name: "Turkey",
            },
          },
          destinationAirport: {
            name: "Antalya Airport",
            code: "AYT",
            city: {
              code: "AYT",
              name: "Antalya",
            },
            country: {
              code: "TR",
              name: "Turkey",
            },
          },
          arrivalDateTimeDisplay: "01:15",
          departureDateTimeDisplay: "02:45",
          flightDuration: "1s 30d",
          fareCategories: {
            BUSINESS: {
              subcategories: [
                {
                  brandCode: "ecoFly",
                  price: {
                    amount: 400.0,
                    currency: "TRY",
                  },
                  order: 1,
                  status: "AVAILABLE",
                  rights: ["20 kg Bagaj", "Ucresiz Yemek Secimi"],
                },
                {
                  brandCode: "extraFly",
                  price: {
                    amount: 500.0,
                    currency: "TRY",
                  },
                  order: 2,
                  status: "AVAILABLE",
                  rights: [
                    "30 kg Bagaj",
                    "Standart Koltuk Secimi",
                    "Ucresiz Yemek Secimi",
                  ],
                },
                {
                  brandCode: "primeFly",
                  price: {
                    amount: 800.99,
                    currency: "TRY",
                  },
                  order: 3,
                  status: "AVAILABLE",
                  rights: [
                    "50 kg Bagaj",
                    "Standart Koltuk Secimi",
                    "Ucretsiz Degisiklik",
                    "Ucresiz Yemek Secimi",
                  ],
                },
              ],
            },
            ECONOMY: {
              subcategories: [
                {
                  brandCode: "ecoFly",
                  price: {
                    amount: 242.0,
                    currency: "TRY",
                  },
                  order: 1,
                  status: "AVAILABLE",
                  rights: ["15 kg Bagaj"],
                },
                {
                  brandCode: "extraFly",
                  price: {
                    amount: 290.0,
                    currency: "TRY",
                  },
                  order: 2,
                  status: "AVAILABLE",
                  rights: ["20 kg Bagaj", "Standart Koltuk Secimi"],
                },
                {
                  brandCode: "primeFly",
                  price: {
                    amount: 351.99,
                    currency: "TRY",
                  },
                  order: 3,
                  status: "AVAILABLE",
                  rights: [
                    "25 kg Bagaj",
                    "Standart Koltuk Secimi",
                    "Ucretsiz Degisiklik",
                  ],
                },
              ],
            },
          },
        },
        {
          originAirport: {
            name: "Istanbul Airport",
            code: "IST",
            city: {
              code: "IST",
              name: "Istanbul",
            },
            country: {
              code: "TR",
              name: "Turkey",
            },
          },
          destinationAirport: {
            name: "Antalya Airport",
            code: "AYT",
            city: {
              code: "AYT",
              name: "Antalya",
            },
            country: {
              code: "TR",
              name: "Turkey",
            },
          },
          arrivalDateTimeDisplay: "09:50",
          departureDateTimeDisplay: "11:20",
          flightDuration: "1s 30d",
          fareCategories: {
            BUSINESS: {
              subcategories: [
                {
                  brandCode: "ecoFly",
                  price: {
                    amount: 676.0,
                    currency: "TRY",
                  },
                  order: 1,
                  status: "ERROR",
                  rights: ["20 kg Bagaj", "Ucresiz Yemek Secimi"],
                },
                {
                  brandCode: "extraFly",
                  price: {
                    amount: 800.0,
                    currency: "TRY",
                  },
                  order: 2,
                  status: "AVAILABLE",
                  rights: [
                    "30 kg Bagaj",
                    "Standart Koltuk Secimi",
                    "Ucresiz Yemek Secimi",
                  ],
                },
                {
                  brandCode: "primeFly",
                  price: {
                    amount: 1200.99,
                    currency: "TRY",
                  },
                  order: 3,
                  status: "AVAILABLE",
                  rights: [
                    "50 kg Bagaj",
                    "Standart Koltuk Secimi",
                    "Ucretsiz Degisiklik",
                    "Ucresiz Yemek Secimi",
                  ],
                },
              ],
            },
            ECONOMY: {
              subcategories: [
                {
                  brandCode: "ecoFly",
                  price: {
                    amount: 250.0,
                    currency: "TRY",
                  },
                  order: 1,
                  status: "AVAILABLE",
                  rights: ["15 kg Bagaj"],
                },
                {
                  brandCode: "extraFly",
                  price: {
                    amount: 380.0,
                    currency: "TRY",
                  },
                  order: 2,
                  status: "AVAILABLE",
                  rights: ["20 kg Bagaj", "Standart Koltuk Secimi"],
                },
                {
                  brandCode: "primeFly",
                  price: {
                    amount: 470.99,
                    currency: "TRY",
                  },
                  order: 3,
                  status: "ERROR",
                  rights: [
                    "25 kg Bagaj",
                    "Standart Koltuk Secimi",
                    "Ucretsiz Degisiklik",
                  ],
                },
              ],
            },
          },
        },
        {
          originAirport: {
            name: "Istanbul Airport",
            code: "IST",
            city: {
              code: "IST",
              name: "Istanbul",
            },
            country: {
              code: "TR",
              name: "Turkey",
            },
          },
          destinationAirport: {
            name: "Antalya Airport",
            code: "AYT",
            city: {
              code: "AYT",
              name: "Antalya",
            },
            country: {
              code: "TR",
              name: "Turkey",
            },
          },
          arrivalDateTimeDisplay: "11:25",
          departureDateTimeDisplay: "12:55",
          flightDuration: "1s 30d",
          fareCategories: {
            BUSINESS: {
              subcategories: [
                {
                  brandCode: "ecoFly",
                  price: {
                    amount: 692.0,
                    currency: "TRY",
                  },
                  order: 1,
                  status: "AVAILABLE",
                  rights: ["20 kg Bagaj", "Ucresiz Yemek Secimi"],
                },
                {
                  brandCode: "extraFly",
                  price: {
                    amount: 950.0,
                    currency: "TRY",
                  },
                  order: 2,
                  status: "AVAILABLE",
                  rights: [
                    "30 kg Bagaj",
                    "Standart Koltuk Secimi",
                    "Ucresiz Yemek Secimi",
                  ],
                },
                {
                  brandCode: "primeFly",
                  price: {
                    amount: 1400.0,
                    currency: "TRY",
                  },
                  order: 3,
                  status: "AVAILABLE",
                  rights: [
                    "50 kg Bagaj",
                    "Standart Koltuk Secimi",
                    "Ucretsiz Degisiklik",
                    "Ucresiz Yemek Secimi",
                  ],
                },
              ],
            },
            ECONOMY: {
              subcategories: [
                {
                  brandCode: "ecoFly",
                  price: {
                    amount: 368.0,
                    currency: "TRY",
                  },
                  order: 1,
                  status: "AVAILABLE",
                  rights: ["15 kg Bagaj"],
                },
                {
                  brandCode: "extraFly",
                  price: {
                    amount: 425.0,
                    currency: "TRY",
                  },
                  order: 2,
                  status: "AVAILABLE",
                  rights: ["20 kg Bagaj", "Standart Koltuk Secimi"],
                },
                {
                  brandCode: "primeFly",
                  price: {
                    amount: 580.99,
                    currency: "TRY",
                  },
                  order: 3,
                  status: "ERROR",
                  rights: [
                    "25 kg Bagaj",
                    "Standart Koltuk Secimi",
                    "Ucretsiz Degisiklik",
                  ],
                },
              ],
            },
          },
        },
        {
          originAirport: {
            name: "Istanbul Airport",
            code: "IST",
            city: {
              code: "IST",
              name: "Istanbul",
            },
            country: {
              code: "TR",
              name: "Turkey",
            },
          },
          destinationAirport: {
            name: "Antalya Airport",
            code: "AYT",
            city: {
              code: "AYT",
              name: "Antalya",
            },
            country: {
              code: "TR",
              name: "Turkey",
            },
          },
          arrivalDateTimeDisplay: "18:20",
          departureDateTimeDisplay: "19:50",
          flightDuration: "1s 30d",
          fareCategories: {
            BUSINESS: {
              subcategories: [
                {
                  brandCode: "ecoFly",
                  price: {
                    amount: 670.0,
                    currency: "TRY",
                  },
                  order: 1,
                  status: "AVAILABLE",
                  rights: ["20 kg Bagaj", "Ucresiz Yemek Secimi"],
                },
                {
                  brandCode: "extraFly",
                  price: {
                    amount: 956.0,
                    currency: "TRY",
                  },
                  order: 2,
                  status: "AVAILABLE",
                  rights: [
                    "30 kg Bagaj",
                    "Standart Koltuk Secimi",
                    "Ucresiz Yemek Secimi",
                  ],
                },
                {
                  brandCode: "primeFly",
                  price: {
                    amount: 1358.0,
                    currency: "TRY",
                  },
                  order: 3,
                  status: "AVAILABLE",
                  rights: [
                    "50 kg Bagaj",
                    "Standart Koltuk Secimi",
                    "Ucretsiz Degisiklik",
                    "Ucresiz Yemek Secimi",
                  ],
                },
              ],
            },
            ECONOMY: {
              subcategories: [
                {
                  brandCode: "ecoFly",
                  price: {
                    amount: 195.0,
                    currency: "TRY",
                  },
                  order: 1,
                  status: "AVAILABLE",
                  rights: ["15 kg Bagaj"],
                },
                {
                  brandCode: "extraFly",
                  price: {
                    amount: 290.5,
                    currency: "TRY",
                  },
                  order: 2,
                  status: "AVAILABLE",
                  rights: ["20 kg Bagaj", "Standart Koltuk Secimi"],
                },
                {
                  brandCode: "primeFly",
                  price: {
                    amount: 458.0,
                    currency: "TRY",
                  },
                  order: 3,
                  status: "AVAILABLE",
                  rights: [
                    "25 kg Bagaj",
                    "Standart Koltuk Secimi",
                    "Ucretsiz Degisiklik",
                  ],
                },
              ],
            },
          },
        },
        {
          originAirport: {
            name: "Istanbul Airport",
            code: "IST",
            city: {
              code: "IST",
              name: "Istanbul",
            },
            country: {
              code: "TR",
              name: "Turkey",
            },
          },
          destinationAirport: {
            name: "Antalya Airport",
            code: "AYT",
            city: {
              code: "AYT",
              name: "Antalya",
            },
            country: {
              code: "TR",
              name: "Turkey",
            },
          },
          arrivalDateTimeDisplay: "01:15",
          departureDateTimeDisplay: "02:45",
          flightDuration: "1s 30d",
          fareCategories: {
            BUSINESS: {
              subcategories: [
                {
                  brandCode: "ecoFly",
                  price: {
                    amount: 400.0,
                    currency: "TRY",
                  },
                  order: 1,
                  status: "AVAILABLE",
                  rights: ["20 kg Bagaj", "Ucresiz Yemek Secimi"],
                },
                {
                  brandCode: "extraFly",
                  price: {
                    amount: 500.0,
                    currency: "TRY",
                  },
                  order: 2,
                  status: "AVAILABLE",
                  rights: [
                    "30 kg Bagaj",
                    "Standart Koltuk Secimi",
                    "Ucresiz Yemek Secimi",
                  ],
                },
                {
                  brandCode: "primeFly",
                  price: {
                    amount: 800.99,
                    currency: "TRY",
                  },
                  order: 3,
                  status: "AVAILABLE",
                  rights: [
                    "50 kg Bagaj",
                    "Standart Koltuk Secimi",
                    "Ucretsiz Degisiklik",
                    "Ucresiz Yemek Secimi",
                  ],
                },
              ],
            },
            ECONOMY: {
              subcategories: [
                {
                  brandCode: "ecoFly",
                  price: {
                    amount: 242.0,
                    currency: "TRY",
                  },
                  order: 1,
                  status: "AVAILABLE",
                  rights: ["15 kg Bagaj"],
                },
                {
                  brandCode: "extraFly",
                  price: {
                    amount: 290.0,
                    currency: "TRY",
                  },
                  order: 2,
                  status: "AVAILABLE",
                  rights: ["20 kg Bagaj", "Standart Koltuk Secimi"],
                },
                {
                  brandCode: "primeFly",
                  price: {
                    amount: 351.99,
                    currency: "TRY",
                  },
                  order: 3,
                  status: "AVAILABLE",
                  rights: [
                    "25 kg Bagaj",
                    "Standart Koltuk Secimi",
                    "Ucretsiz Degisiklik",
                  ],
                },
              ],
            },
          },
        },
        {
          originAirport: {
            name: "Istanbul Airport",
            code: "IST",
            city: {
              code: "IST",
              name: "Istanbul",
            },
            country: {
              code: "TR",
              name: "Turkey",
            },
          },
          destinationAirport: {
            name: "Antalya Airport",
            code: "AYT",
            city: {
              code: "AYT",
              name: "Antalya",
            },
            country: {
              code: "TR",
              name: "Turkey",
            },
          },
          arrivalDateTimeDisplay: "09:50",
          departureDateTimeDisplay: "11:20",
          flightDuration: "1s 30d",
          fareCategories: {
            BUSINESS: {
              subcategories: [
                {
                  brandCode: "ecoFly",
                  price: {
                    amount: 676.0,
                    currency: "TRY",
                  },
                  order: 1,
                  status: "ERROR",
                  rights: ["20 kg Bagaj", "Ucresiz Yemek Secimi"],
                },
                {
                  brandCode: "extraFly",
                  price: {
                    amount: 800.0,
                    currency: "TRY",
                  },
                  order: 2,
                  status: "AVAILABLE",
                  rights: [
                    "30 kg Bagaj",
                    "Standart Koltuk Secimi",
                    "Ucresiz Yemek Secimi",
                  ],
                },
                {
                  brandCode: "primeFly",
                  price: {
                    amount: 1200.99,
                    currency: "TRY",
                  },
                  order: 3,
                  status: "AVAILABLE",
                  rights: [
                    "50 kg Bagaj",
                    "Standart Koltuk Secimi",
                    "Ucretsiz Degisiklik",
                    "Ucresiz Yemek Secimi",
                  ],
                },
              ],
            },
            ECONOMY: {
              subcategories: [
                {
                  brandCode: "ecoFly",
                  price: {
                    amount: 250.0,
                    currency: "TRY",
                  },
                  order: 1,
                  status: "AVAILABLE",
                  rights: ["15 kg Bagaj"],
                },
                {
                  brandCode: "extraFly",
                  price: {
                    amount: 380.0,
                    currency: "TRY",
                  },
                  order: 2,
                  status: "AVAILABLE",
                  rights: ["20 kg Bagaj", "Standart Koltuk Secimi"],
                },
                {
                  brandCode: "primeFly",
                  price: {
                    amount: 470.99,
                    currency: "TRY",
                  },
                  order: 3,
                  status: "ERROR",
                  rights: [
                    "25 kg Bagaj",
                    "Standart Koltuk Secimi",
                    "Ucretsiz Degisiklik",
                  ],
                },
              ],
            },
          },
        },
        {
          originAirport: {
            name: "Istanbul Airport",
            code: "IST",
            city: {
              code: "IST",
              name: "Istanbul",
            },
            country: {
              code: "TR",
              name: "Turkey",
            },
          },
          destinationAirport: {
            name: "Antalya Airport",
            code: "AYT",
            city: {
              code: "AYT",
              name: "Antalya",
            },
            country: {
              code: "TR",
              name: "Turkey",
            },
          },
          arrivalDateTimeDisplay: "11:25",
          departureDateTimeDisplay: "12:55",
          flightDuration: "1s 30d",
          fareCategories: {
            BUSINESS: {
              subcategories: [
                {
                  brandCode: "ecoFly",
                  price: {
                    amount: 692.0,
                    currency: "TRY",
                  },
                  order: 1,
                  status: "AVAILABLE",
                  rights: ["20 kg Bagaj", "Ucresiz Yemek Secimi"],
                },
                {
                  brandCode: "extraFly",
                  price: {
                    amount: 950.0,
                    currency: "TRY",
                  },
                  order: 2,
                  status: "AVAILABLE",
                  rights: [
                    "30 kg Bagaj",
                    "Standart Koltuk Secimi",
                    "Ucresiz Yemek Secimi",
                  ],
                },
                {
                  brandCode: "primeFly",
                  price: {
                    amount: 1400.0,
                    currency: "TRY",
                  },
                  order: 3,
                  status: "AVAILABLE",
                  rights: [
                    "50 kg Bagaj",
                    "Standart Koltuk Secimi",
                    "Ucretsiz Degisiklik",
                    "Ucresiz Yemek Secimi",
                  ],
                },
              ],
            },
            ECONOMY: {
              subcategories: [
                {
                  brandCode: "ecoFly",
                  price: {
                    amount: 368.0,
                    currency: "TRY",
                  },
                  order: 1,
                  status: "AVAILABLE",
                  rights: ["15 kg Bagaj"],
                },
                {
                  brandCode: "extraFly",
                  price: {
                    amount: 425.0,
                    currency: "TRY",
                  },
                  order: 2,
                  status: "AVAILABLE",
                  rights: ["20 kg Bagaj", "Standart Koltuk Secimi"],
                },
                {
                  brandCode: "primeFly",
                  price: {
                    amount: 580.99,
                    currency: "TRY",
                  },
                  order: 3,
                  status: "ERROR",
                  rights: [
                    "25 kg Bagaj",
                    "Standart Koltuk Secimi",
                    "Ucretsiz Degisiklik",
                  ],
                },
              ],
            },
          },
        },
        {
          originAirport: {
            name: "Istanbul Airport",
            code: "IST",
            city: {
              code: "IST",
              name: "Istanbul",
            },
            country: {
              code: "TR",
              name: "Turkey",
            },
          },
          destinationAirport: {
            name: "Antalya Airport",
            code: "AYT",
            city: {
              code: "AYT",
              name: "Antalya",
            },
            country: {
              code: "TR",
              name: "Turkey",
            },
          },
          arrivalDateTimeDisplay: "18:20",
          departureDateTimeDisplay: "19:50",
          flightDuration: "1s 30d",
          fareCategories: {
            BUSINESS: {
              subcategories: [
                {
                  brandCode: "ecoFly",
                  price: {
                    amount: 670.0,
                    currency: "TRY",
                  },
                  order: 1,
                  status: "AVAILABLE",
                  rights: ["20 kg Bagaj", "Ucresiz Yemek Secimi"],
                },
                {
                  brandCode: "extraFly",
                  price: {
                    amount: 956.0,
                    currency: "TRY",
                  },
                  order: 2,
                  status: "AVAILABLE",
                  rights: [
                    "30 kg Bagaj",
                    "Standart Koltuk Secimi",
                    "Ucresiz Yemek Secimi",
                  ],
                },
                {
                  brandCode: "primeFly",
                  price: {
                    amount: 1358.0,
                    currency: "TRY",
                  },
                  order: 3,
                  status: "AVAILABLE",
                  rights: [
                    "50 kg Bagaj",
                    "Standart Koltuk Secimi",
                    "Ucretsiz Degisiklik",
                    "Ucresiz Yemek Secimi",
                  ],
                },
              ],
            },
            ECONOMY: {
              subcategories: [
                {
                  brandCode: "ecoFly",
                  price: {
                    amount: 195.0,
                    currency: "TRY",
                  },
                  order: 1,
                  status: "AVAILABLE",
                  rights: ["15 kg Bagaj"],
                },
                {
                  brandCode: "extraFly",
                  price: {
                    amount: 290.5,
                    currency: "TRY",
                  },
                  order: 2,
                  status: "AVAILABLE",
                  rights: ["20 kg Bagaj", "Standart Koltuk Secimi"],
                },
                {
                  brandCode: "primeFly",
                  price: {
                    amount: 458.0,
                    currency: "TRY",
                  },
                  order: 3,
                  status: "AVAILABLE",
                  rights: [
                    "25 kg Bagaj",
                    "Standart Koltuk Secimi",
                    "Ucretsiz Degisiklik",
                  ],
                },
              ],
            },
          },
        },
      ];
    } catch (error) {
      // Hata durumunda bir hata nesnesi fırlatabiliriz
      throw new Error("Bir hata oluştu");
    }
  }
);

const initialState: FlightsState = {
  flights: [],
  flightSearchForm: null,
  orderBy: "economy",
  hasPromotion: false,
  selectedFlight: null,
  searchForm: null,
  loading: true,
  error: false,
  theme: "dark",
};

export const flightsSlice = createSlice({
  name: "flights",

  initialState,
  reducers: {
    setFlightForm: (state, action) => {
      state.searchForm = action.payload;
    },
    toggleSwitch: (state, action) => {
      state.hasPromotion = action.payload;
    },
    onSelectFlight: (state, action) => {
      state.selectedFlight = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(simulateGetFlights.pending, (state) => {
        state.loading = true;
      })
      .addCase(simulateGetFlights.fulfilled, (state, action) => {
        state.loading = false;
        state.flights = action.payload.map((item) => {
          return { id: uuidv4(), ...item };
        });
      })
      .addCase(simulateGetFlights.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      });
  },
});

// Aksiyonları ve reducer'ı dışa aktarın
export const { setFlightForm, toggleSwitch, onSelectFlight } =
  flightsSlice.actions;
export default flightsSlice.reducer;
