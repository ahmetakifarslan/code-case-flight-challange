import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { APP_CONFIG } from "../../AppConfig";

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Code Case | Sayfa Bulunamadı</title>
      </Helmet>

      <div className="h-screen bg-black-40 flex flex-col items-center justify-center">
        <h1 className="text-4xl">404 | Page not found</h1>
        <button
          onClick={() => navigate(APP_CONFIG.lang.tr.pages.searchPage.route)}
          className="bg-red-500 py-2 px-6 text-white font-medium text-sm mt-8"
        >
          Başa dön
        </button>
      </div>
    </>
  );
}
