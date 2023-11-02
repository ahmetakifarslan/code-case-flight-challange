import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Navigate,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout.tsx";
import FlightSearchPage from "./pages/FlightSearchPage/FlightSearchPage.tsx";
import FlightListPage from "./pages/FlightListPage/FlightListPage.tsx";
import CabinSelectionConfirmationPage from "./pages/CabinSelectionConfirmationPage/CabinSelectionConfirmationPage.tsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <FlightSearchPage />,
      },
      {
        path: "flight-list-page",
        element: <FlightListPage />,
      },
      {
        path: "cabin-selection",
        element: <CabinSelectionConfirmationPage />,
        errorElement: <Navigate to="/" />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
