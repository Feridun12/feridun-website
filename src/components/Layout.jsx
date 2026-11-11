import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";

export default function Layout() {
  return (
    <div className="page">
      <div className="wrap">
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
}
