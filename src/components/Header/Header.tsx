import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex justify-between border-b p-4">
      <Link to="/">
        <p className="font-bold">turkishairlines.com</p>
      </Link>
      <p>
        search <span className="font-bold">Flight Challange</span>
      </p>
    </div>
  );
}
