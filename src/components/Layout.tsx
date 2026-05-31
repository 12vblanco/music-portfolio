import { Outlet } from "react-router-dom";
import { Footer } from "./Footer/Footer";
import { Navbar } from "./Navigation/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
