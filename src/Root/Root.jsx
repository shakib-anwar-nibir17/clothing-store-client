import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Root = () => {
  return (
    <div className="container mx-auto font-custom">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
