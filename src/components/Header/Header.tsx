import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex items-center justify-between border-b-2 border-black">
      <Link to="/">
        <p>turkishairlines.com</p>
      </Link>
      <p>
        search <span>Flight Challange</span>
      </p>
    </div>
  );
}
