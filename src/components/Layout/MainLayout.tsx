import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="p-8">
      <div className="pb-8">
        <Header></Header>
      </div>

      <div className="lg:w-8/12 mx-auto shadow-default">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
