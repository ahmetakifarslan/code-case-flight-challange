import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex items-center justify-between border-b-2 border-black">
      <Link to="/">
        <p>turkishairlines.com</p>
      </Link>
      <p data-testid="header-test-title">search Flight Challange</p>
    </div>
  );
}
