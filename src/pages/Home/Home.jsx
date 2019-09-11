import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/HomeComponents/Header/Header";
import BestOf from "../../components/HomeComponents/BestOf/BestOf";
import BrandMessage from "../../components/HomeComponents/BrandMessage/BrandMessage";
import Service from "../../components/HomeComponents/Service/Service";
import CommercialFirst from "../../components/HomeComponents/CommercialFirst/CommercialFirst";
import CommercialSecond from "../../components/HomeComponents/CommercialSecond/CommercialSecond";
import Footer from "../../components/Footer/Footer";

import "./home.scss";

const Home = () => (
  <div className="home-container">
    <Navbar />
    <Header />
    <BestOf />
    <BrandMessage />
    <CommercialFirst />
    <Service />
    <CommercialSecond />
    <Footer />
  </div>
);

export default Home;
