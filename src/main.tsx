import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout.tsx";
import FlightSearchPage from "./pages/FlightSearchPage/FlightSearchPage.tsx";
import FlightListPage from "./pages/FlightListPage/FlightListPage.tsx";
import CabinSelectionConfirmationPage from "./pages/CabinSelectionConfirmationPage/CabinSelectionConfirmationPage.tsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.tsx";

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
        path: "flight-search-page",
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
    <RouterProvider router={router} />
  </React.StrictMode>
);
