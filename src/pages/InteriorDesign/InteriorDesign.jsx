import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import Banner from "../../components/InteriorDesignComponents/Banner/Banner";

import "./interiorDesign.scss";

const InteriorDesign = () => {
  return (
    <div className="interior-design-container">
      <Navbar />
        <Banner/>
      <Footer />
    </div>
  );
};

export default InteriorDesign;
