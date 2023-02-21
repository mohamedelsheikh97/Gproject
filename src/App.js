import "./App.css";
import Header from "./components/home_page/Header";
import Navs from "./components/nav";
import { Route, Routes } from "react-router-dom";
import Cars from "./components/car_page/cars";
import CarDetails from "./components/car_details/carDetails";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navs></Navs>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cardetails" element={<CarDetails />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
