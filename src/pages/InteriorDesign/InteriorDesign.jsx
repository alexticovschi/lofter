import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import Banner from "../../components/InteriorDesignComponents/Banner/Banner";
import ShowCase1 from "../../components/InteriorDesignComponents/ShowCase1/ShowCase1";
import ShowCase2 from "../../components/InteriorDesignComponents/ShowCase2/ShowCase2";

import "./interiorDesign.scss";

const InteriorDesign = () => {
  return (
    <div className="interior-design-container">
      <Navbar />
        <Banner/>
        <ShowCase1/>
        <ShowCase2/>
      <Footer />
    </div>
  );
};

export default InteriorDesign;
