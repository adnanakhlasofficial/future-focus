import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../components/Loading/Loading";

const MainLayout = () => {
  const { loading } = useContext(AuthContext);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setScroll(true) : setScroll(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (loading) return <Loading></Loading>;

  return (
    <>
      <header
        className={
          scroll
            ? "sticky top-0 z-10 bg-slate-100 shadow-lg backdrop-blur-md"
            : "bg-slate-100"
        }
      >
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
