import { Link } from "react-router-dom";
import { APP_CONFIG } from "../../AppConfig";

export default function Header({ documentTitle }: { documentTitle: string }) {
  return (
    <div className="flex justify-between border-b p-4">
      <Link to="/">
        <p className="font-bold">{APP_CONFIG.brandName}</p>
      </Link>
      <p>
        <span>{documentTitle}</span> |
        <span data-testid="header-test-title" className="font-bold">
          {APP_CONFIG.appName}
        </span>
      </p>
    </div>
  );
}
