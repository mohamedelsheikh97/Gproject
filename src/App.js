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
import Login from "./components/login_page/login";
import Accessories from "./components/accessories_page/accessories";
import Carshop from "./components/carShop/carshop";
import Payment from "./components/payment_page/payment";
import Dashboard from "./components/dashboard_page/dashboard";

function App() {
  return (
    <>
      <Navs></Navs>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/:id" element={<Carshop/>}/>
        <Route path="/cars" element={<Cars />} />
        <Route path="/cardetails" element={<CarDetails />} />
        <Route path="/carshop" element={<Carshop />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/schools" element={<School />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/login" element={<Login />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
