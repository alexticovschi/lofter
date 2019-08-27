import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/HomeComponents/Header/Header";
import BestOf from "../../components/HomeComponents/BestOf/BestOf";
import BrandMessage from "../../components/HomeComponents/BrandMessage/BrandMessage";
import Projects from "../../components/HomeComponents/Projects/Projects";
import CommercialFirst from "../../components/HomeComponents/CommercialFirst/CommercialFirst";
import CommercialSecond from "../../components/HomeComponents/CommercialSecond/CommercialSecond";
import Footer from "../../components/Footer/Footer";

import './home.scss';


const Home = () => (
  <div className="home-container">
    <Navbar/>
    <Header/>
    <BestOf/>
    <BrandMessage/>
    <CommercialFirst/>
    <Projects/>
    <CommercialSecond/>
    <Footer/>
  </div>
);

export default Home;

