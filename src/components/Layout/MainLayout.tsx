import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="p-8">
      <div className="pb-8">
        <Header></Header>
      </div>

      <div className="page-content">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
