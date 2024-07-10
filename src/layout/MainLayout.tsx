import { Outlet } from "react-router-dom";
import Navbar from "@/components/custom/Navbar/Navbar";
import Footer from "@/components/custom/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
