import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import BestOf from "./components/BestOf/BestOf";
import BrandMessage from "./components/BrandMessage/BrandMessage";
import Projects from "./components/Projects/Projects";
import CommercialFirst from "./components/CommercialFirst/CommercialFirst";
import CommercialSecond from "./components/CommercialSecond/CommercialSecond";
import Footer from "./components/Footer/Footer";

import './App.scss';


function App() {
  return (
    <div className="container">
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
}

export default App;

