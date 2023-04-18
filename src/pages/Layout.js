import { Outlet } from "react-router-dom";
import Footer from "../component/layout/Footer";
import Header from "../component/layout/header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="  w-full ">
        <Outlet></Outlet>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
