import { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

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
    <div className="min-h-screen dark:bg-sky-900 dark:text-white dark:border-white">
      <div className="flex justify-between border-b p-4">
        <Link to="/">
          <p className="font-bold">turkishairlines.com</p>
        </Link>
        <p>
          search <span className="font-bold">Flight Challange</span>
        </p>
      </div>

      <div className="lg:w-6/12 mx-auto shadow-default">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
