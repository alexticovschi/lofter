import React from "react";
import Header from "../../components/HomeComponents/Header/Header";
import Slider from "../../components/HomeComponents/Slider/SliderComponent";
import BrandMessage from "../../components/HomeComponents/BrandMessage/BrandMessage";
import Service from "../../components/HomeComponents/Service/Service";
import CommercialFirst from "../../components/HomeComponents/CommercialFirst/CommercialFirst";
import CommercialSecond from "../../components/HomeComponents/CommercialSecond/CommercialSecond";

import "./home.scss";

const Home = () => (
  <div className="home-container">
    <Header />
    <Slider />
    <BrandMessage />
    <CommercialFirst />
    <Service />
    <CommercialSecond />
  </div>
);

export default Home;
