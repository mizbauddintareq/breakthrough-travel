import React from "react";
import HotDeals from "../HotDeals/HotDeals";
import Slider from "../Slider/Slider";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <HotDeals></HotDeals>
    </div>
  );
};

export default Home;
