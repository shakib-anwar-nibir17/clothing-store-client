import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Root = () => {
  return (
    <div className="container mx-auto font-custom">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
