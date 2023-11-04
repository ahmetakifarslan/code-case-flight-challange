import { Link } from "react-router-dom";
import { APP_CONFIG } from "../../AppConfig";

export default function Header() {
  return (
    <div className="flex justify-between border-b p-4">
      <Link to="/">
        <p className="font-bold">{APP_CONFIG.layout.header.brandName}</p>
      </Link>
      <p>
        search |
        <span className="font-bold"> {APP_CONFIG.layout.header.appName}</span>
      </p>
    </div>
  );
}
