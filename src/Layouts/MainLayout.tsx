import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { APP_CONFIG } from "../AppConfig";

export default function MainLayout() {
  const location = useLocation();
  const [documentTitle, setDocumentTitle] = useState("");

  function addThemeClassToBody(theme: "dark" | "light") {
    const bodyClassList = document.body.classList;
    bodyClassList.remove("dark", "light");
    bodyClassList.add(theme);
  }

  function getPageName(pathname: string, selectedLang = "tr") {
    const pages = APP_CONFIG.lang[selectedLang].pages;
    for (const pageKey in pages) {
      if (pages.hasOwnProperty(pageKey)) {
        const page = pages[pageKey];
        if (page.route === pathname) {
          return page.documentTitle;
        }
      }
    }
    return "";
  }

  useEffect(() => {
    setDocumentTitle(getPageName(location.pathname));
    location.pathname === "/"
      ? addThemeClassToBody("dark")
      : addThemeClassToBody("light");
  }, [location]);

  return (
    <>
      <Helmet>
        <html lang={APP_CONFIG.lang.tr.langName}></html>
        <title>Code Case | {documentTitle}</title>
      </Helmet>
      <div className="min-h-screen flex flex-col dark:bg-sky-900 dark:text-white dark:border-white">
        <div className="flex justify-between border-b p-4">
          <Link to="/">
            <p className="font-bold">{APP_CONFIG.brandName}</p>
          </Link>
          <p>
            <span>{documentTitle}</span> |
            <span className="font-bold"> {APP_CONFIG.appName}</span>
          </p>
        </div>

        <div className="mx-auto flex-1 flex items-stretch justify-center mt-8 min-w-[80%]">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}
