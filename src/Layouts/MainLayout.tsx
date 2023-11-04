import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Components/Header/Header";

export default function MainLayout() {
  const location = useLocation();

  function addThemeClassToBody(theme: "dark" | "light") {
    const bodyClassList = document.body.classList;
    theme === "dark"
      ? bodyClassList.remove("light")
      : bodyClassList.remove("dark");
    document.body.classList.add(theme);
  }

  useEffect(() => {
    location.pathname === "/"
      ? addThemeClassToBody("dark")
      : addThemeClassToBody("light");
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col dark:bg-sky-900 dark:text-white dark:border-white">
      <Header></Header>

      <div className="mx-auto flex-1 flex items-stretch justify-center mt-8 min-w-[80%]">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
