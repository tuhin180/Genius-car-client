import React from "react";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";
import Products from "../PopularProduct/Products";
import { FaCalendarAlt, FaPhoneAlt, FaMapMarkedAlt } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <div className="flex bg-slate-900 p-10 m-4 w-4/5 mx-auto gap-9 text-white rounded-lg">
        <div>
          <FaCalendarAlt />
          <p>We are oper monday-friday</p>
          <h6 className="font-bold text-2xl">7:00 am - 9:00 pm</h6>
        </div>
        <div>
          <FaPhoneAlt />
          <p>Have a question?</p>
          <h6 className="font-bold text-2xl">+2546 251 2658</h6>
        </div>
        <div>
          <FaMapMarkedAlt />
          <p>Need a repair? our address</p>
          <h6 className="font-bold text-2xl">Liza Street, New York</h6>
        </div>
      </div>
      <Products></Products>
    </div>
  );
};

export default Home;
