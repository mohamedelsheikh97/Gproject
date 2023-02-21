import "./App.css";
import { Brands } from "./components/brands";
import Header from "./components/Header";
import Navs from "./components/nav";
import { Cards } from "./components/cards";
import Footer from "./components/footer";
import Welcome from "./components/welcome";
import { Route, Routes } from "react-router-dom";
import Cars from "./components/cars";
import CarDetails from "./components/car_details/carDetails";

function App() {
  return (
    <>
      <Navs></Navs>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cardetails" element={<CarDetails />} />
      </Routes>
    </>
  );
}

export default App;
