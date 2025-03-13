import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Store from "../Pages/ShopParts/Store";
import Reviews from "../Pages/Reviews/Reviews";
import PremiumArea from "../Pages/PremiumArea/PremiumArea";
import SidebarMenuBar from "../Cart/SidebarMenuBar";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Form from "../Pages/Form/Form";
import Login from "../Pages/Form/Login/Login";
import Signup from "../Pages/Form/Signup/Signup";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  //Animation on scroll
  useEffect(() => {
    AOS.init({
      duration: 1000, // You can adjust the duration as needed
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/premium" element={<PremiumArea />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/form" element={<Form />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
      <SidebarMenuBar />
    </BrowserRouter>
  );
}

export default App;
