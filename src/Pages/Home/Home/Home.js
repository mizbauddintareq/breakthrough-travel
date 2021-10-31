import React from "react";
import About from "../About/About";
import HotDeals from "../HotDeals/HotDeals";
import Review from "../Review/Review";
import Slider from "../Slider/Slider";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <HotDeals></HotDeals>
      <About></About>
      <Review></Review>
    </div>
  );
};

export default Home;
