import "./App.css";
import Header from "./components/home_page/Header";
import Navs from "./components/nav";
import { Route, Routes } from "react-router-dom";
import Cars from "./components/car_page/cars";
import CarDetails from "./components/car_details/carDetails";
import Footer from "./components/footer";
import Maintenance from "./components/maintain_page/maintain";
import School from "./components/schools_page/school";
import Notfound from "./components/notfound_page/notfound";

function App() {
  return (
    <>
      <Navs></Navs>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cardetails" element={<CarDetails />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/schools" element={<School />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
