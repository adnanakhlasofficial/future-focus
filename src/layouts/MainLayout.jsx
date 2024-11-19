import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../components/Loading/Loading";

const MainLayout = () => {
  const {loading} = useContext(AuthContext);
  
  if (loading) return <Loading></Loading>

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
