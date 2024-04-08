import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const AppLayout = () => {
  return (
    <div className=" grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <main className=" mt-10 ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
