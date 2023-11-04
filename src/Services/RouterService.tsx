import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";

// Components
import MainLayout from "../Layouts/MainLayout";
import FlightSearchPage from "../Pages/FlightSearchPage/FlightSearchPage";
import FlightListPage from "../Pages/FlightListPage/FlightListPage";
import CabinSelectionConfirmationPage from "../Pages/CabinSelectionConfirmationPage/CabinSelectionConfirmationPage";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import { APP_CONFIG } from "../AppConfig";

const routes: RouteObject[] = [
  {
    path: APP_CONFIG.pages.searchPage.route,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <FlightSearchPage />,
      },
      {
        path: APP_CONFIG.pages.listPage.route,
        element: <FlightListPage />,
      },
      {
        path: APP_CONFIG.pages.cabinSelectionPage.route,
        element: <CabinSelectionConfirmationPage />,
        errorElement: <Navigate to={APP_CONFIG.pages.searchPage.route} />,
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
