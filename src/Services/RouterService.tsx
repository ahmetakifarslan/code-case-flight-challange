import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";

// Components
import MainLayout from "../Layouts/MainLayout";
import FlightSearchPage from "../Pages/FlightSearchPage/FlightSearchPage";
import FlightListPage from "../Pages/FlightListPage/FlightListPage";
import CabinSelectionConfirmationPage from "../Pages/CabinSelectionConfirmationPage/CabinSelectionConfirmationPage";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";

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

const appRouter = createBrowserRouter(routes);

export default appRouter;
