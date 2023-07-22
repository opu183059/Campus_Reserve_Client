import "./App.css";
import Navbar from "./components/common/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/common/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
