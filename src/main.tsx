import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./Assets/Styles/main.css";

// Services
import { store } from "./Services/StoreService";
import appRouter from "./Services/RouterService";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>
);
