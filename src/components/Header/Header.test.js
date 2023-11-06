import { RouterProvider, createMemoryRouter } from "react-router-dom";
import * as React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";
import { APP_CONFIG } from "../../AppConfig";

test("event route", async () => {
  const routes = [
    {
      path: "/",
      element: <Header />,
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ["/"],
    initialIndex: 1,
  });

  render(<RouterProvider router={router} />);
  const target = screen.getByTestId("header-test-title");
  await waitFor(() => target);
  expect(target.innerHTML).toEqual(APP_CONFIG.appName);
});
