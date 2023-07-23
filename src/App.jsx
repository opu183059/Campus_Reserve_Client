import "./App.css";
import Navbar from "./components/common/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/common/Footer";
import { useEffect } from "react";
import Aos from "aos";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
