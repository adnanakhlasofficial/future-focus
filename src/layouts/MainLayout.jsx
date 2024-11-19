import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <header className="bg-slate-100">
        <Navbar></Navbar>
      </header>
      <main className="min-h-[calc(100vh-260px)] bg-slate-100 py-5">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default MainLayout;
